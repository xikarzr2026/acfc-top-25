#!/usr/bin/env node
/**
 * ACFC weekly data update — pulls a completed week from ESPN's public APIs and rewrites data.js.
 *
 *   node scripts/update-week.js <week> [--dry-run]
 *
 * What it changes (every value is derived from a fetched source, nothing is hand-typed):
 *   1. Game log   — appends week <week> results from the ESPN scoreboard. Opponent "#N" tags use the
 *                   ESPN curatedRank at kickoff (the poll in effect when the game was played).
 *   2. Derived    — record, sam (mean margin), top25Wins/top10Wins, keyLoss, bestWin (ranked wins only),
 *                   upcomingMarquee (played opponent dropped).
 *   3. Polls      — apRank / coachesRank from the latest published AP & Coaches polls (null if unranked).
 *   4. previousRank — the ACFC rank computed from the dataset BEFORE this update.
 *   5. ESPN-anchored stats — sor, gameControl, sos, offEfficiency, defEfficiency are re-ordered to
 *                   match ESPN FPI's Strength-of-Record rank, Game-Control rank, played-SOS rank and
 *                   offensive/defensive efficiency. QUANTILE MAPPING: the dataset keeps its existing
 *                   value distribution for each stat (so the engine's calibration ranges still hold);
 *                   ESPN only decides which team gets which value.
 *
 * NOT changed (no free source): successRate, finishingDrives, explosivenessEpa, turnoverLuckDelta,
 * meritIndex, roster/coaching priors, compositeRank/bcsRank (internal hand-maintained composites).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data.js');
const week = Number(process.argv[2]);
const dryRun = process.argv.includes('--dry-run');
if (!Number.isInteger(week) || week < 0) { console.error('usage: node scripts/update-week.js <week> [--dry-run]'); process.exit(2); }

const ESPN = 'https://site.api.espn.com/apis/site/v2/sports/football/college-football';
const FPI = 'https://site.web.api.espn.com/apis/fitt/v3/sports/football/college-football/powerindex?region=us&lang=en&limit=200';
const getJson = async (url) => { const r = await fetch(url); if (!r.ok) throw new Error(`${r.status} ${url}`); return r.json(); };

(async () => {
  const src = fs.readFileSync(DATA, 'utf8');
  const cut = src.indexOf('const FBS_DATASET');
  const header = src.slice(0, cut);
  const D = new Function(src + '\nreturn FBS_DATASET;')();
  const ACFC = new Function(src + '\n' + fs.readFileSync(path.join(ROOT, 'algorithm.js'), 'utf8') + '\nreturn ACFCAlgorithmEngine;')();
  const before = Object.fromEntries(new ACFC(D).calculateRankings().map(t => [t.id, t.rank]));

  // ── 1. Scoreboard ────────────────────────────────────────────────────────
  const sb = await getJson(`${ESPN}/scoreboard?seasontype=2&week=${week}&groups=80&limit=400`);
  const byName = Object.fromEntries(D.map(t => [t.name, t]));
  const espnId = {};
  const games = [];
  for (const ev of sb.events) {
    const c = ev.competitions[0];
    if (!c.competitors.some(x => byName[x.team.location])) continue;
    if (!c.status.type.completed) throw new Error(`week ${week} not complete: ${ev.name} is ${c.status.type.name}`);
    for (const side of c.competitors) {
      const t = byName[side.team.location];
      if (!t) continue;
      espnId[t.id] = side.team.id;
      const opp = c.competitors.find(x => x !== side);
      const rk = opp.curatedRank && opp.curatedRank.current;
      const tag = rk >= 1 && rk <= 25 ? `#${rk} ` : '';
      const venue = c.neutralSite ? 'Neutral' : side.homeAway === 'home' ? 'Home' : 'Away';
      const opponent = venue === 'Away' ? `at ${tag}${opp.team.location}`
        : `vs ${tag}${opp.team.location}` + (venue === 'Neutral' ? ` (${c.venue.fullName})` : '');
      const pf = Number(side.score), pa = Number(opp.score);
      games.push({ t, entry: { week, opponent, result: `${pf > pa ? 'W' : 'L'} ${pf}-${pa}`, venue }, oppName: opp.team.location, rk });
    }
  }

  // ── 2. Apply game log + derived fields ───────────────────────────────────
  const tagOf = s => { const m = /#(\d+)/.exec(s || ''); return m ? Number(m[1]) : null; };
  for (const { t, entry, oppName, rk } of games) {
    const log = t.schedule2026.gamesPlayed;
    if (log.some(g => g.week === week)) throw new Error(`${t.name} already has a week ${week} game — refusing to double-append`);
    log.push(entry);
    const [, res, pf, pa] = /^([WL]) (\d+)-(\d+)$/.exec(entry.result);
    const label = `${entry.opponent.replace(/ \(.*\)$/, '')} (${pf}-${pa})`;
    if (res === 'L' && /^none$/i.test(t.stats.keyLoss)) t.stats.keyLoss = label;
    if (res === 'W' && rk >= 1 && rk <= 25) {
      const cur = tagOf(t.stats.bestWin);
      if (cur === null || rk < cur) t.stats.bestWin = label;
    }
    const up = t.schedule2026.upcomingMarquee.split(/,\s*/);
    const idx = up.findIndex(u => u.replace(/^(vs|at)\s+/, '').replace(/\s*\(.*\)$/, '') === oppName);
    if (idx >= 0) { up.splice(idx, 1); t.schedule2026.upcomingMarquee = up.join(', '); }
  }
  for (const t of D) {
    const log = t.schedule2026.gamesPlayed.sort((a, b) => a.week - b.week);
    let w = 0, l = 0, m = 0, r25 = 0, r10 = 0;
    for (const g of log) {
      const [, res, pf, pa] = /^([WL]) (\d+)-(\d+)$/.exec(g.result);
      m += pf - pa;
      if (res === 'W') { w++; const n = tagOf(g.opponent); if (n !== null) { r25++; if (n <= 10) r10++; } } else l++;
    }
    t.record = { wins: w, losses: l };
    t.stats.sam = Math.round((m / log.length) * 100) / 100;
    t.stats.top25Wins = r25; t.stats.top10Wins = r10;
  }

  // ── 3. Polls ─────────────────────────────────────────────────────────────
  const rk = await getJson(`${ESPN}/rankings`);
  const ap = rk.rankings.find(p => /^AP Top 25/.test(p.name));
  const coaches = rk.rankings.find(p => /Coaches Poll/.test(p.name) && !/FCS|Division/.test(p.name));
  const pollMap = p => Object.fromEntries(p.ranks.map(x => [x.team.location, x.current]));
  const apM = pollMap(ap), coM = pollMap(coaches);
  for (const t of D) { t.apRank = apM[t.name] ?? null; t.coachesRank = coM[t.name] ?? null; t.previousRank = before[t.id]; }

  // ── 4. ESPN FPI-anchored stats (quantile mapping) ────────────────────────
  const fpi = await getJson(FPI);
  const fv = {};
  for (const e of fpi.teams) {
    const v = {};
    for (const c of e.categories) { const cat = fpi.categories.find(x => x.name === c.name); cat.names.forEach((n, i) => { v[`${c.name}.${n}`] = c.values[i]; }); }
    fv[e.team.id] = v;
  }
  const missing = D.filter(t => !espnId[t.id] || !fv[espnId[t.id]]).map(t => t.name);
  if (missing.length) throw new Error('no ESPN id / FPI row for: ' + missing.join(', ') + ' (did every team play this week?)');
  for (const t of D) {
    const v = fv[espnId[t.id]];
    if (v['fpi.numwins'] !== t.record.wins || v['fpi.numlosses'] !== t.record.losses)
      throw new Error(`${t.name}: game log ${t.record.wins}-${t.record.losses} disagrees with ESPN FPI ${v['fpi.numwins']}-${v['fpi.numlosses']}`);
  }
  const quantileMap = (stat, key, higherIsBetter) => {
    const pool = D.map(t => t.stats[stat]).sort((a, b) => b - a);            // best value first
    const order = [...D].sort((a, b) => {
      const x = fv[espnId[a.id]][key], y = fv[espnId[b.id]][key];
      return higherIsBetter ? y - x : x - y;
    });
    order.forEach((t, i) => { t.stats[stat] = pool[i]; });
  };
  quantileMap('sor', 'resume.accomplishmentrank', false);
  quantileMap('gameControl', 'resume.gamecontrolrank', false);
  quantileMap('sos', 'resume.avgsosrank', false);
  quantileMap('offEfficiency', 'efficiencies.offefficiency', true);
  quantileMap('defEfficiency', 'efficiencies.defefficiency', true);

  // ── Report + write ───────────────────────────────────────────────────────
  console.log(`week ${week}: ${games.length} team-games appended from ${sb.events.length} ESPN events`);
  for (const { t, entry } of games) console.log(`  ${t.name.padEnd(12)} ${entry.opponent.padEnd(40)} ${entry.result}`);
  console.log(`polls: ${ap.name} / ${coaches.name}`);
  if (dryRun) { console.log('(dry run — data.js not written)'); return; }
  fs.writeFileSync(DATA, header + 'const FBS_DATASET = ' + JSON.stringify(D, null, 4) + ';\n');
  console.log('data.js written');
})().catch(e => { console.error('UPDATE FAILED:', e.message); process.exit(1); });
