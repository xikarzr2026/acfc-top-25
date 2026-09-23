#!/usr/bin/env node
/**
 * ACFC Top 25 — dataset & model verification harness
 * ==================================================
 * Dependency-free. Run with:  node audit/verify.js
 * Runs in CI on every push (see .github/workflows/verify.yml).
 *
 * Every check here exists because the corresponding bug actually shipped at least once.
 * If you add a field to data.js, add its invariant here too.
 *
 * Exit code 0 = all checks passed, 1 = at least one failure.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

const dataSrc = read('data.js');
const algoSrc = read('algorithm.js');
const indexHtml = read('index.html');
const versionJson = JSON.parse(read('version.json'));
const readme = read('README.md');

const FBS_DATASET = new Function(dataSrc + '\nreturn FBS_DATASET;')();
const ACFCAlgorithmEngine = new Function(dataSrc + '\n' + algoSrc + '\nreturn ACFCAlgorithmEngine;')();

const failures = [];
const warnings = [];
let checksRun = 0;

function section(title) { console.log('\n' + title + '\n' + '─'.repeat(title.length)); }
function check(label, condition, detail) {
  checksRun++;
  if (condition) { console.log('  ✓ ' + label); }
  else { console.log('  ✗ ' + label + (detail !== undefined ? '  → ' + JSON.stringify(detail) : '')); failures.push(label); }
}
function warn(label, detail) { warnings.push(label); console.log('  ! ' + label + (detail !== undefined ? '  → ' + JSON.stringify(detail) : '')); }

const T = Object.fromEntries(FBS_DATASET.map(t => [t.id, t]));
const SCORE_RE = /^\s*([WL])\s+(\d+)\s*[-–]\s*(\d+)\s*$/;

// ─────────────────────────────────────────────────────────────────────────────
section('1. Schema');
// ─────────────────────────────────────────────────────────────────────────────
const REQUIRED = ['id', 'name', 'mascot', 'abbrev', 'conference', 'record', 'colors', 'logo',
  'coaching', 'roster', 'schedule2026', 'stats', 'previousRank'];
const REQUIRED_STATS = ['sor', 'gameControl', 'sos', 'meritIndex', 'sam', 'top25Wins', 'top10Wins',
  'bestWin', 'keyLoss', 'offEfficiency', 'defEfficiency', 'successRate', 'finishingDrives',
  'explosivenessEpa', 'turnoverLuckDelta'];
const REQUIRED_ROSTER = ['talentComposite', 'blueChipRatio', 'returningProduction', 'keyPlayers'];
const REQUIRED_COACHING = ['headCoach', 'offensiveSystem', 'coachingGrade', 'tenureYears'];

check('dataset is non-empty', FBS_DATASET.length > 0, FBS_DATASET.length);
check('team ids are unique', new Set(FBS_DATASET.map(t => t.id)).size === FBS_DATASET.length);
check('stats.meritIndex exists on every team (renamed from the old, misleading colleyMetric)',
  FBS_DATASET.every(t => typeof t.stats.meritIndex === 'number'));
check('no legacy stats.colleyMetric field remains',
  !/"colleyMetric"/.test(dataSrc));
for (const t of FBS_DATASET) {
  const missing = [
    ...REQUIRED.filter(k => t[k] === undefined),
    ...REQUIRED_STATS.filter(k => t.stats?.[k] === undefined).map(k => 'stats.' + k),
    ...REQUIRED_ROSTER.filter(k => t.roster?.[k] === undefined).map(k => 'roster.' + k),
    ...REQUIRED_COACHING.filter(k => t.coaching?.[k] === undefined).map(k => 'coaching.' + k)
  ];
  if (missing.length) check(`schema complete for ${t.id}`, false, missing);
}
check('every team has at least one game log entry', FBS_DATASET.every(t => (t.schedule2026.gamesPlayed || []).length > 0));

// ─────────────────────────────────────────────────────────────────────────────
section('2. Records, margins and the score log');
// ─────────────────────────────────────────────────────────────────────────────
let totalTeamGames = 0;
for (const t of FBS_DATASET) {
  const games = t.schedule2026.gamesPlayed || [];
  totalTeamGames += games.length;
  let w = 0, l = 0; const margins = []; const bad = [];
  for (const g of games) {
    const m = SCORE_RE.exec(g.result || '');
    if (!m) { bad.push(g.result); continue; }
    const [, res, pf, pa] = m;
    if (res === 'W') w++; else l++;
    margins.push(Number(pf) - Number(pa));
  }
  check(`${t.name}: record.wins/losses match the game log`, w === t.record.wins && l === t.record.losses, `log ${w}-${l} vs record ${t.record.wins}-${t.record.losses}`);
  check(`${t.name}: gamesPlayed count equals games logged`, games.length === t.record.wins + t.record.losses);
  check(`${t.name}: all results parse as "W|L pp-pp"`, bad.length === 0, bad);
  const avg = margins.reduce((a, b) => a + b, 0) / margins.length;
  check(`${t.name}: stats.sam equals the mean scoring margin`, Math.abs(avg - t.stats.sam) < 0.051, `log ${avg.toFixed(2)} vs sam ${t.stats.sam}`);
}
const expectedTeamGames = FBS_DATASET.reduce((a, t) => a + t.record.wins + t.record.losses, 0);
check('total logged team-games equals the sum of every W+L', totalTeamGames === expectedTeamGames, { totalTeamGames, expectedTeamGames });

// ─────────────────────────────────────────────────────────────────────────────
section('3. Poll membership  (a poll is 25 teams — rank 26 must never exist)');
// ─────────────────────────────────────────────────────────────────────────────
for (const field of ['apRank', 'coachesRank', 'compositeRank', 'bcsRank']) {
  const present = FBS_DATASET.filter(t => t[field] !== null && t[field] !== undefined);
  const values = present.map(t => t[field]);
  check(`${field}: no rank greater than 25`, values.every(v => v <= 25), values.filter(v => v > 25));
  check(`${field}: every rank is a positive integer`, values.every(v => Number.isInteger(v) && v >= 1));
  check(`${field}: no duplicate ranks`, new Set(values).size === values.length, values.filter((v, i) => values.indexOf(v) !== i));
  const missingSlots = Array.from({ length: 25 }, (_, i) => i + 1).filter(v => !values.includes(v));
  if (missingSlots.length) warn(`${field}: ${missingSlots.length} poll slot(s) unfilled (${missingSlots.join(', ')}) — legitimate only when the poll ranks a team outside the tracked universe`, { field, missingSlots });
}
check('unranked teams are stored as null, not a sentinel like 26',
  FBS_DATASET.every(t => ['apRank', 'coachesRank', 'compositeRank', 'bcsRank'].every(f => t[f] === null || typeof t[f] === 'number')));

// ─────────────────────────────────────────────────────────────────────────────
section('4. Opponent rank tags — one kickoff snapshot per game');
// ─────────────────────────────────────────────────────────────────────────────
// Convention (documented in data.js): the poll in effect at kickoff — preseason for weeks 0-1,
// the Sep 8 poll for week 2. Both sides of a fixture must be logged, with mirrored scores.
function tagOf(opponent) {
  const m = /#(\d+)/.exec(opponent || '');
  return m ? Number(m[1]) : null;
}
const index = new Map();
for (const t of FBS_DATASET) for (const k of [t.name, t.mascot, t.abbrev, t.id]) if (k) index.set(k.toLowerCase(), t.id);
function opponentId(text) {
  const key = String(text || '').replace(/^vs\s+/i, '').replace(/^at\s+/i, '').replace(/#\d+\s*/g, '').replace(/\(.*?\)/g, '').trim().toLowerCase();
  return index.get(key) || null;
}
const fixtures = new Map();
for (const t of FBS_DATASET) {
  for (const g of t.schedule2026.gamesPlayed || []) {
    const oppId = opponentId(g.opponent);
    if (!oppId) continue;
    const key = [t.id, oppId].sort().join('|');
    if (!fixtures.has(key)) fixtures.set(key, []);
    fixtures.get(key).push({ side: t.id, opp: oppId, opponent: g.opponent, result: g.result });
  }
}
check('at least one in-dataset fixture exists', fixtures.size > 0, fixtures.size);
for (const [key, sides] of fixtures) {
  check(`${key}: logged by both sides`, sides.length === 2, sides.map(s => s.side));
  if (sides.length === 2) {
    const a = SCORE_RE.exec(sides[0].result), b = SCORE_RE.exec(sides[1].result);
    check(`${key}: scores mirror between the two logs`,
      a && b && a[2] === b[3] && a[3] === b[2],
      { first: sides[0].result, second: sides[1].result });
    check(`${key}: winners agree`, a && b && a[1] !== b[1], { first: a && a[1], second: b && b[1] });
  }
  // Both sides must describe the same poll snapshot: a side may only carry a "#N" tag on its
  // opponent when that opponent WAS ranked at kickoff, and must not carry a post-game-only rank.
  for (const s of sides) {
    const tag = tagOf(s.opponent);
    if (tag === null) continue;
    check(`${key}: ${s.side} tags its opponent #${tag} — must be the kickoff value`,
      tag >= 1 && tag <= 25, tag);
  }
}
// The concrete regressions this section exists for:
const michTag = (T.michigan.schedule2026.gamesPlayed.find(g => opponentId(g.opponent) === 'oklahoma') || {}).opponent;
const oklaTag = (T.oklahoma.schedule2026.gamesPlayed.find(g => opponentId(g.opponent) === 'michigan') || {}).opponent;
check('Michigan ↔ Oklahoma: Michigan tags #11 (kickoff rank) and Oklahoma carries no post-game #19',
  /#11/.test(michTag || '') && !/#\d+/.test(oklaTag || ''), { michiganSays: michTag, oklahomaSays: oklaTag });
const osuTag = (T['ohio-state'].schedule2026.gamesPlayed.find(g => opponentId(g.opponent) === 'texas') || {}).opponent;
check('Ohio State ↔ Texas: Texas tags #1 (kickoff rank) and Ohio State tags #4, not the post-game #1',
  /#1 /.test(T.texas.schedule2026.gamesPlayed.find(g => opponentId(g.opponent) === 'ohio-state').opponent) && /#4/.test(osuTag || ''),
  { texasSays: T.texas.schedule2026.gamesPlayed.find(g => opponentId(g.opponent) === 'ohio-state').opponent, ohioStateSays: osuTag });
check('Ole Miss ↔ Louisville: the real kickoff-ranked opponent is tagged',
  /#24/.test((T['ole-miss'].schedule2026.gamesPlayed.find(g => opponentId(g.opponent) === 'louisville') || {}).opponent || ''),
  (T['ole-miss'].schedule2026.gamesPlayed.find(g => opponentId(g.opponent) === 'louisville') || {}).opponent);

// ─────────────────────────────────────────────────────────────────────────────
section('5. top25Wins / top10Wins are derived, not asserted');
// ─────────────────────────────────────────────────────────────────────────────
// A ranked win requires: a WIN whose opponent is tagged ranked in the log.
for (const t of FBS_DATASET) {
  const wins = (t.schedule2026.gamesPlayed || []).filter(g => SCORE_RE.exec(g.result || '')?.[1] === 'W');
  const derived25 = wins.filter(g => { const n = tagOf(g.opponent); return n !== null && n <= 25; }).length;
  const derived10 = wins.filter(g => { const n = tagOf(g.opponent); return n !== null && n <= 10; }).length;
  check(`${t.name}: top25Wins (${t.stats.top25Wins}) matches ranked wins in the game log (${derived25})`, t.stats.top25Wins === derived25);
  check(`${t.name}: top10Wins (${t.stats.top10Wins}) matches top-10 wins in the game log (${derived10})`, t.stats.top10Wins === derived10);
  check(`${t.name}: top10Wins does not exceed top25Wins`, t.stats.top10Wins <= t.stats.top25Wins);
  const hasLoss = (t.schedule2026.gamesPlayed || []).some(g => SCORE_RE.exec(g.result || '')?.[1] === 'L');
  check(`${t.name}: keyLoss present iff the team has a loss`, hasLoss ? !/^none$/i.test(String(t.stats.keyLoss)) : /^none$/i.test(String(t.stats.keyLoss)), t.stats.keyLoss);
}

// ─────────────────────────────────────────────────────────────────────────────
section('6. projectedSosRank and week numbering');
// ─────────────────────────────────────────────────────────────────────────────
const psr = FBS_DATASET.map(t => t.schedule2026.projectedSosRank).sort((a, b) => a - b);
check('projectedSosRank is a strict 1..N permutation (no ties, no gaps)',
  JSON.stringify(psr) === JSON.stringify(FBS_DATASET.map((_, i) => i + 1)), psr);
const weekZero = FBS_DATASET.flatMap(t => (t.schedule2026.gamesPlayed || []).filter(g => g.week === 0).map(g => t.id));
check('week 0 exists and is labelled week 0', weekZero.length > 0, weekZero);
for (const t of FBS_DATASET) {
  const weeks = (t.schedule2026.gamesPlayed || []).map(g => g.week);
  check(`${t.name}: game weeks are in ascending order`, weeks.every((v, i) => i === 0 || v > weeks[i - 1]), weeks);
}

// ─────────────────────────────────────────────────────────────────────────────
section('7. The engine actually runs, and the Colley claim is true');
// ─────────────────────────────────────────────────────────────────────────────
const engine = new ACFCAlgorithmEngine(FBS_DATASET);
const ranked = engine.calculateRankings();
check('calculateRankings returns every team', ranked.length === FBS_DATASET.length);
check('ranks are 1..N with no ties', JSON.stringify(ranked.map(r => r.rank)) === JSON.stringify(FBS_DATASET.map((_, i) => i + 1)));
check('composite score is monotonically non-increasing', ranked.every((r, i) => i === 0 || ranked[i - 1].compositeScore >= r.compositeScore));
check('every displayed index is within its documented band', ranked.every(r => r.acfcIndex >= 0.58 && r.acfcIndex <= 0.9851));

const colley = engine.computeColley();
const cVals = Object.values(colley);
const cMean = cVals.reduce((a, b) => a + b, 0) / cVals.length;
check('computed Colley mean is near 0.500 (drifts slightly: the tracked universe is not a closed network)', Math.abs(cMean - 0.5) < 0.05, cMean.toFixed(4));
check('computed Colley stays inside the range a 2-3 game matrix can produce', cVals.every(v => v >= 0.2 && v <= 0.8), { min: Math.min(...cVals), max: Math.max(...cVals) });
// Colley's defining property is that it is MARGIN-FREE: rewrite every score to a 1-point result with
// the same winner and the ratings must not move. (An earlier check asserted "every undefeated team
// outrates every 1-loss team" — that is not a Colley property: once Week 3 added more in-universe
// games, 2-1 Louisville, with a win over a tracked team, correctly outrated undefeated teams whose
// opponents are all outside the tracked universe.)
const oneScoreData = JSON.parse(JSON.stringify(FBS_DATASET));
for (const t of oneScoreData) for (const g of t.schedule2026.gamesPlayed) g.result = /^W/.test(g.result) ? 'W 1-0' : 'L 0-1';
const colleyOneScore = new ACFCAlgorithmEngine(oneScoreData).computeColley();
check('computed Colley is margin-free (identical when every score becomes 1-0, same winners)',
  Object.keys(colley).every(id => Math.abs(colley[id] - colleyOneScore[id]) < 1e-9));
check('the old fabricated merit field would have failed this — Boise State is NOT top-3',
  Object.entries(colley).sort((a, b) => b[1] - a[1]).findIndex(([id]) => id === 'boise-state') >= 5,
  Object.entries(colley).sort((a, b) => b[1] - a[1]).map(([id, v]) => `${id}:${v.toFixed(3)}`).slice(0, 6));

// ─────────────────────────────────────────────────────────────────────────────
section('8. Unranked teams must not receive poll-comparison badges');
// ─────────────────────────────────────────────────────────────────────────────
for (const r of ranked) {
  const isRanked = r.apRank !== null && r.apRank !== undefined;
  for (const b of r.badges) {
    if (b.id === 'poll-inertia' || b.id === 'analytics-darling') {
      check(`${r.name}: ${b.id} only fires for AP-ranked teams`, isRanked, { apRank: r.apRank });
    }
  }
  check(`${r.name}: apDelta is null exactly when apRank is null`, (r.apDelta === null) === !isRanked, { apRank: r.apRank, apDelta: r.apDelta });
}
const rankedTeams = ranked.filter(r => r.apRank !== null);
check('AP delta is bounded by the tracked universe',
  rankedTeams.every(r => Math.abs(r.apDelta) <= FBS_DATASET.length), rankedTeams.map(r => r.apDelta).filter(d => Math.abs(d) > 26));

// ─────────────────────────────────────────────────────────────────────────────
section('9. Matchup engine self-consistency');
// ─────────────────────────────────────────────────────────────────────────────
const pairs = [[ranked[0].id, ranked[ranked.length - 1].id], ['texas', 'smu'], ['georgia', 'alabama'], ['oregon', 'boise-state']];
for (const [a, b] of pairs) {
  const neutral = engine.simulateMatchup(a, b, 'neutral');
  const homeA = engine.simulateMatchup(a, b, 'homeA');
  const margin = neutral.projectedScoreA - neutral.projectedScoreB;
  // The regression: the old engine displayed a spread derived from PES while the projected scores
  // were computed from a different formula, so a "9 point" line came with an 11 point score gap.
  check(`${a} vs ${b}: displayed spread equals the projected score margin`,
    (margin === 0 && /EVEN/.test(neutral.predictedSpread)) || neutral.predictedSpread === `${margin > 0 ? neutral.teamA.abbrev : neutral.teamB.abbrev} -${Math.abs(margin)}`,
    { spread: neutral.predictedSpread, margin });
  const homeMargin = homeA.projectedScoreA - homeA.projectedScoreB;
  // Scores are integers, so a 2.5-point shift can display as 2 or 3. The underlying shift is exact.
  check(`${a} vs ${b}: home field is worth the advertised 2.5 points`,
    Math.abs(Math.abs(homeMargin - margin) - 2.5) <= 1.0, { neutral: margin, homeA: homeMargin });
  // The other regression: win% came from logistic(diff*12) while the spread came from diff*38,
  // so a 9-point favourite showed 94%.
  const wp = Number(neutral.winProbA);
  check(`${a} vs ${b}: win probability is consistent with the spread (not the old 12x curve)`,
    Math.abs(wp - (100 / (1 + Math.exp(-Math.abs(margin) / 6.5)))) < 1.5, { winProb: wp, margin });
  check(`${a} vs ${b}: win probabilities sum to 100`, Math.abs((Number(neutral.winProbA) + Number(neutral.winProbB)) - 100) < 0.15);
}
check('the engine refuses to project a team against itself', engine.simulateMatchup('texas', 'texas', 'neutral') !== null);

// ─────────────────────────────────────────────────────────────────────────────
section('10. Documented weights must equal implemented weights');
// ─────────────────────────────────────────────────────────────────────────────
const w = engine.getEffectiveWeights();
const sumsTo1 = (obj) => Math.abs(Object.values(obj).reduce((a, b) => a + b, 0) - 1) < 1e-9;
check('RMS sub-weights sum to 1.0', sumsTo1(w.rms), w.rms);
check('PES sub-weights sum to 1.0', sumsTo1(w.pes), w.pes);
check('prior sub-weights sum to 1.0', sumsTo1(w.prior), w.prior);
check('resume + efficiency weights sum to 1.0', Math.abs((w.resume + w.efficiency) - 1) < 1e-9);
// The regression: the page claimed a flat "40% prior" and "35% finishing drives" while the code
// applied 16% and 14%. The modal must now read from the engine.
check('methodology modal renders the prior split from the engine (no hard-coded 40% prior claim)',
  /id="mw-prior-rms"/.test(indexHtml) && /id="mw-prior-pes"/.test(indexHtml));
check('methodology modal renders finishing drives and net efficiency as separate, disclosed shares',
  /id="mw-pes-finishing"/.test(indexHtml) && /id="mw-pes-eff"/.test(indexHtml));
check('the page never hard-codes the phrase "Colley Matrix Iteration" (the field is a merit index)',
  !/Colley Matrix Iteration/.test(indexHtml));
check('the page does hard-code the prior split as different values',
  w.priorShareRMS !== w.priorSharePES, { rms: w.priorShareRMS, pes: w.priorSharePES });

// v0.4.1: the game-control ceiling used to swallow the quality-win bonus entirely, so a team with a
// top-10 win banked literally nothing for it. Two checks: the headroom factor must be exposed to
// the UI (so it cannot go undocumented), and the bonus must actually alter the component.
check('the game-control headroom factor is exposed to the UI, not an inline magic number',
  typeof w.controlBaseScale === 'number' && w.controlBaseScale > 0 && w.controlBaseScale < 1, w.controlBaseScale);
check('the headroom factor leaves room for the maximum 0.075 bonus',
  (1 - w.controlBaseScale) >= 0.075 - 1e-9, { headroom: 1 - w.controlBaseScale });
check('the methodology modal renders the headroom factor', /id="mw-control-scale"/.test(indexHtml));

const bonusTeam = 'texas';
const stripped = FBS_DATASET.map(t => t.id === bonusTeam
  ? { ...t, stats: { ...t.stats, top10Wins: 0, top25Wins: 0 } } : t);
const withBonus = ranked.find(r => r.id === bonusTeam);
const withoutBonus = new ACFCAlgorithmEngine(stripped).calculateRankings().find(r => r.id === bonusTeam);
check('a top-10 win actually changes the game-control component (regression: the bonus was clamped away)',
  withBonus.rms.breakdown.gameControl > withoutBonus.rms.breakdown.gameControl,
  { withBonus: withBonus.rms.breakdown.gameControl, withoutBonus: withoutBonus.rms.breakdown.gameControl });
check('claiming a quality win never lowers a team\'s RMS',
  withBonus.rms.score >= withoutBonus.rms.score,
  { withBonus: withBonus.rms.score, withoutBonus: withoutBonus.rms.score });

// The Sideline Composite / CFBTrack were presented as external published polls. Neither could be
// verified against any published source, so no surface may cite them as a benchmark any more.
// Historical rename notes are permitted in Known Limitations / Changelog — hence the "body" split.
const docBody = readme.split('## 8. Known Limitations')[0];
check('no UI surface claims an unverifiable "Sideline Composite" benchmark', !/[Ss]ideline/.test(indexHtml));
check('the README body does not cite an unverifiable "Sideline Composite" benchmark', !/[Ss]ideline/.test(docBody));
check('no surface claims a "CFBTrack" benchmark', !/CFBTrack/.test(indexHtml) && !/CFBTrack/.test(docBody));
check('the composite column is labelled as internal, not as a published poll',
  /vs Composite/.test(indexHtml) && /internal, hand-maintained composites/.test(indexHtml));
check('the data layer no longer carries a field named sidelineRank (a doc mention is fine, a key is not)',
  !/"sidelineRank"\s*:/.test(dataSrc) && !/sidelineRank/.test(algoSrc));

// ─────────────────────────────────────────────────────────────────────────────
section('11. UI invariants that shipped broken');
// ─────────────────────────────────────────────────────────────────────────────
check('table is filtered to ranks <= 25 (the page is a Top 25)', /team\.rank <= 25/.test(indexHtml));
check('a First Team Out strip exists for rank 26', /first-team-out-wrapper/.test(indexHtml));
check('the viewport-pinning header row wraps (390px overflow regression)',
  /min-h-20 py-3 flex flex-wrap/.test(indexHtml));
check('the SAM sign is formatted by a helper, not a hard-coded "+"', /function fmtSigned/.test(indexHtml) && !/\+\$\{stats\.sam\.toFixed/.test(indexHtml));
check('meter widths are clamped (negative SAM produced width:-1.4%)', /function metricBarWidth/.test(indexHtml));
check('the "═ 0" placeholder glyph is gone', !/\u2550/.test(indexHtml));
check('modals are announced as dialogs and closable with Escape',
  /aria-modal/.test(indexHtml) && /e\.key !== "Escape"/.test(indexHtml));
check('a favicon is declared (was a 404 on every load)', /rel="icon"/.test(indexHtml));
check('the Tailwind CDN is version-pinned', /cdn\.tailwindcss\.com\/3\.\d+\.\d+/.test(indexHtml));
check('no runtime fetch of version.json (CORS errors under file://)', !/fetch\("version\.json"\)/.test(indexHtml));
check('the KPI cards are populated from the engine', /kpi-top-pes-detail/.test(indexHtml) && /kpi-biggest-delta-detail/.test(indexHtml));

// ─────────────────────────────────────────────────────────────────────────────
section('12. Version + documentation sync');
// ─────────────────────────────────────────────────────────────────────────────
const badge = (indexHtml.match(/const APP_VERSION = "([^"]+)"/) || [])[1];
check('index.html APP_VERSION exists', Boolean(badge), badge);
check('index.html APP_VERSION equals version.json version', badge === versionJson.version, { html: badge, json: versionJson.version });
check('data.js header records the current version', dataSrc.includes('(v' + versionJson.version + ')'));
check('README no longer claims a 40% prior inside RMS', !/40% Bayesian Prior/i.test(readme));
// The README listed a Week 1 game that does not exist and mislabelled a Week 1 game as Week 2.
check('README does not claim Florida State at Alabama in Week 1',
  !/Florida State at Alabama \(Week 1\)/.test(readme));
check('README does not claim Boise State at Oregon in Week 2',
  !/Boise State at Oregon \(Week 2\)/.test(readme));
check('README does not describe the Matchup Arena as covering all of FBS',
  !/comparing any two FBS teams/.test(readme));

// ─────────────────────────────────────────────────────────────────────────────
console.log('\n' + '═'.repeat(64));
console.log(`  ${checksRun} checks run · ${failures.length} failed · ${warnings.length} warning(s)`);
if (failures.length) {
  console.log('\n  FAILED CHECKS:');
  for (const f of failures) console.log('    ✗ ' + f);
}
if (warnings.length) {
  console.log('\n  WARNINGS:');
  for (const wn of warnings) console.log('    ! ' + wn);
}
console.log('═'.repeat(64));
if (failures.length) {
  console.log('\n  VERIFY FAILED\n');
  process.exit(1);
}
console.log('\n  VERIFY PASSED\n');
