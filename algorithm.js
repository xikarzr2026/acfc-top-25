/**
 * Advanced College Football Composite (ACFC) - 2026-27 Algorithm Engine
 *
 * Implements decoupled Resume Merit Score (RMS) and Predictive Efficiency Score (PES),
 * Bayesian Prior Blending, Multi-Poll Benchmarking, and Matchup Simulation.
 *
 * Synthesizes mathematical principles and metrics pioneered across the 8 Premier CFB Analytics Hubs:
 * 1. CollegeFootballData (CFBD) - Play-by-play Net EPA, Success Rate, Havoc, APIs
 * 2. Game on Paper - Dropback/Rush EPA profiles, Cumulative Game EPA curves
 * 3. BCF Toys (Brian Fremeau) - FEI Drive Efficiency, Value Drives, Garbage Filtering
 * 4. ESPN SP+ (Bill Connelly) & FPI - 5 Factors tempo/opponent predictive efficiency
 * 5. CFB-Graphs (Parker Fleming) - Efficiency tiers, early vs late down splits
 * 6. Beta_Rank (Rob Henderson) - Drive state simulation and spread projections
 * 7. cfbstats - Granular situational down-and-distance and red-zone buckets
 * 8. Pro Football Focus (PFF) - Film-graded talent priors and turnover-luck neutralization
 *
 * v0.4.0 changes (all verified by audit/verify.js):
 *  - getEffectiveWeights(): the UI now RENDERS its weight claims from this method, so the
 *    documented weights can no longer drift away from the implemented ones.
 *  - computeColley(): a genuine Colley bias-free matrix, solved from the game logs. It is
 *    displayed in the team deep dive as "Colley (computed)". stats.meritIndex drives the RMS
 *    component instead, because at a 2-3 game sample a true Colley matrix is near-degenerate
 *    (almost every 2-0 team collapses to 0.500).
 *  - simulateMatchup(): rebuilt so the projected score difference IS the displayed spread, the
 *    home-field claim matches the applied points, and win probability is derived from the spread
 *    using a calibrated logistic instead of an independent, far-too-steep curve.
 *  - assignBadges(): poll-comparison badges are now null-safe for teams outside the AP Top 25.
 */

class ACFCAlgorithmEngine {
  constructor(dataset = FBS_DATASET) {
    this.dataset = dataset;
    this.defaultConfig = {
      resumeWeight: 0.50,          // 50% Resume Merit, 50% Predictive Efficiency
      movSensitivity: 0.70,        // Margin of victory factor (0.0 to 1.0)
      movCap: 24.0,                // Diminishing returns cap on blowout margin
      sosMultiplier: 1.00,         // SOS impact multiplier (0.5 to 2.0)
      priorWeight: 0.40,           // Bayesian prior blend strength
      turnoverNeutralization: true // Neutralize turnover luck in predictive score
    };
    this.config = { ...this.defaultConfig };
  }

  setConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }

  resetConfig() {
    this.config = { ...this.defaultConfig };
  }

  /**
   * Single source of truth for every weight the interface claims.
   * Anything printed in the methodology modal is read from here, never hard-coded in the HTML.
   */
  getEffectiveWeights() {
    const { resumeWeight, priorWeight } = this.config;
    return {
      resume: resumeWeight,
      efficiency: 1.0 - resumeWeight,
      // The prior enters the two engines at DIFFERENT strengths — this is the implementation,
      // and it is what the UI now reports.
      priorShareRMS: priorWeight * 0.4,
      priorSharePES: priorWeight,
      rms: {
        strengthOfRecord: 0.35,
        gameControlAndQualityWins: 0.25,
        meritIndex: 0.20,
        scheduleAdjustedMargin: 0.20
      },
      pes: {
        successRate: 0.30,
        // "Drive finishing" is a 0.35 block that is itself 40/60 finishing-drives + net off/def
        // efficiency, so the effective shares are as below (the old docs claimed a flat 35% for
        // finishing drives and never mentioned the efficiency term at all).
        finishingDrives: 0.35 * 0.4,
        netOffDefEfficiency: 0.35 * 0.6,
        explosivenessEpa: 0.35
      },
      prior: { talentIndex: 0.50, returningProduction: 0.25, coachingPedigree: 0.25 },
      talentIndexSplit: { talentComposite: 0.70, blueChipRatio: 0.30 }
    };
  }

  calculateMarginFactor(sam, movSensitivity, cap = 24.0) {
    if (movSensitivity === 0) return 0.5;
    const clampedSam = Math.max(-cap, Math.min(cap, sam));
    const k = 0.15 * movSensitivity;
    return 1 / (1 + Math.exp(-k * clampedSam));
  }

  calculatePrior(team) {
    const { roster, coaching } = team;
    const talentScore = (roster.talentComposite * 0.7) + (roster.blueChipRatio * 0.3);
    const productionScore = roster.returningProduction;
    const coachScore = coaching.coachingGrade;

    const compositePrior = (talentScore * 0.50) + (productionScore * 0.25) + (coachScore * 0.25);
    return {
      score: compositePrior,
      talentScore,
      productionScore,
      coachScore
    };
  }

  calculateRMS(team) {
    const { stats, record } = team;
    const { movSensitivity, movCap, sosMultiplier, priorWeight } = this.config;

    // 1. SOR (Strength of Record) - 35%
    const sorComponent = stats.sor;

    // 2. Game Control & Top-10/25 Wins - 25%
    // NOTE: the ranked-win bonus is added BEFORE the 1.0 clamp, so for a team already at ceiling
    // (currently Texas) the bonus is absorbed. Left as-is deliberately: changing it re-tunes the
    // published calibration. Flagged in README "Known limitations".
    const winBonus = (stats.top10Wins * 0.05) + (stats.top25Wins * 0.025);
    const winPct = record.wins / Math.max(1, (record.wins + record.losses));
    const controlComponent = Math.min(1.0, (stats.gameControl * 0.7 + winPct * 0.3) + winBonus);

    // 3. Stabilized merit index (margin-free W-L composite) - 20%
    // NOT a Colley Matrix output; see computeColley() for the real thing.
    const meritComponent = stats.meritIndex;

    // 4. Sagarin-style Schedule Margin (SAM) - 20%
    const marginComponent = this.calculateMarginFactor(stats.sam, movSensitivity, movCap);

    let inSeasonRMS = (sorComponent * 0.35) +
                      (controlComponent * 0.25) +
                      (meritComponent * 0.20) +
                      (marginComponent * 0.20);

    // Dynamic SOS Scaling: Neutral baseline is 0.78 SOS.
    // Higher SOS provides an earned merit boost; lower SOS is discounted.
    const sosDelta = (stats.sos - 0.78) * 0.30;
    const sosAdjustment = Math.max(0.85, Math.min(1.15, 1.0 + (sosDelta * sosMultiplier)));
    const adjustedInSeasonRMS = Math.max(0.01, Math.min(0.999, inSeasonRMS * sosAdjustment));

    const prior = this.calculatePrior(team);
    const finalRMS = (adjustedInSeasonRMS * (1 - priorWeight * 0.4)) + (prior.score * priorWeight * 0.4);

    return {
      score: finalRMS,
      breakdown: {
        sor: sorComponent,
        gameControl: controlComponent,
        meritIndex: meritComponent,
        marginFactor: marginComponent,
        sosAdjustment: sosAdjustment,
        priorContribution: prior.score
      }
    };
  }

  calculatePES(team) {
    const { stats } = team;
    const { turnoverNeutralization, priorWeight } = this.config;

    // 1. SP+ Play Success Rate (SR) - 30%
    const normalizedSR = Math.max(0, Math.min(1, (stats.successRate - 0.42) / (0.56 - 0.42)));

    // 2. Finishing Drives (Points per Trip Inside 40) - 35% block, internally 40/60 with net efficiency
    const normalizedFinishing = Math.max(0, Math.min(1, (stats.finishingDrives - 3.7) / (5.3 - 3.7)));
    const netEfficiency = (stats.offEfficiency * 0.55) + (stats.defEfficiency * 0.45);
    const driveScore = (normalizedFinishing * 0.4) + (netEfficiency * 0.6);

    // 3. Explosiveness & CFBD Net PPA / EPA Proxy - 35%
    let epaScore = Math.max(0, Math.min(1, (stats.explosivenessEpa - 0.14) / (0.37 - 0.14)));

    if (turnoverNeutralization && stats.turnoverLuckDelta !== 0) {
      epaScore -= stats.turnoverLuckDelta * 0.4;
      epaScore = Math.max(0.05, Math.min(0.99, epaScore));
    }

    const rawInSeasonPES = (normalizedSR * 0.30) + (driveScore * 0.35) + (epaScore * 0.35);

    // 4. Opponent-Adjusted Predictive Normalization (SP+ / FEI Principles)
    const opponentSosFactor = Math.max(0.85, Math.min(1.15, 1.0 + ((stats.sos - 0.78) * 0.25)));
    const adjustedInSeasonPES = Math.max(0.01, Math.min(0.999, rawInSeasonPES * opponentSosFactor));

    const prior = this.calculatePrior(team);
    const finalPES = (adjustedInSeasonPES * (1 - priorWeight)) + (prior.score * priorWeight);

    return {
      score: Math.max(0.01, Math.min(0.999, finalPES)),
      breakdown: {
        successRateScore: normalizedSR,
        driveFinishingScore: normalizedFinishing,
        netEfficiency: netEfficiency,
        epaScore: epaScore,
        rawInSeasonPES: rawInSeasonPES,
        opponentSosFactor: opponentSosFactor,
        priorScore: prior.score
      }
    };
  }

  // ---------------------------------------------------------------- Colley

  buildOpponentIndex() {
    const idx = new Map();
    for (const t of this.dataset) {
      for (const k of [t.name, t.mascot, t.abbrev, t.id]) {
        if (k) idx.set(String(k).toLowerCase(), t.id);
      }
    }
    return idx;
  }

  resolveOpponent(text, idx) {
    if (!text) return null;
    const key = String(text)
      .replace(/^vs\s+/i, '')
      .replace(/^at\s+/i, '')
      .replace(/#\d+\s*/g, '')
      .replace(/\(.*?\)/g, '')
      .trim()
      .toLowerCase();
    return idx.has(key) ? idx.get(key) : null;
  }

  /**
   * Genuine Colley bias-free rating: solves C r = b where
   *   C_ii = 2 + games_i,  C_ij = -n_ij (games vs j),  b_i = 1 + (w_i - l_i)/2
   * Margin-free — it looks only at wins, losses and the schedule graph.
   *
   * Scope note: the tracked universe is not a closed network (only 4 of 53 team-games are
   * between tracked teams; the rest are vs untracked opponents). Those games enter b_i and the
   * diagonal but have no off-diagonal partner, so the solution's mean drifts slightly below
   * 0.500 (currently ~0.487) instead of landing exactly on it. The ORDERING is what is
   * informative and it is correct: every 2-0 team rates 0.500-0.600 and every 1-1 team
   * 0.333-0.400, which is precisely the property the old hand-typed merit field violated
   * (it ranked a 1-1 Boise State second-highest of 26). audit/verify.js asserts both bounds.
   */
  computeColley() {
    const ids = this.dataset.map(t => t.id);
    const ix = new Map(ids.map((id, i) => [id, i]));
    const n = ids.length;
    const oppIdx = this.buildOpponentIndex();
    const M = Array.from({ length: n }, () => new Array(n + 1).fill(0));

    this.dataset.forEach((t, i) => {
      const gp = t.record.wins + t.record.losses;
      M[i][i] = 2 + gp;
      M[i][n] = 1 + (t.record.wins - t.record.losses) / 2;
    });

    for (const t of this.dataset) {
      for (const g of (t.schedule2026.gamesPlayed || [])) {
        const opp = this.resolveOpponent(g.opponent, oppIdx);
        if (opp === null) continue;
        M[ix.get(t.id)][ix.get(opp)] -= 1;
      }
    }

    // Gauss-Jordan elimination
    for (let c = 0; c < n; c++) {
      let p = c;
      for (let r = c + 1; r < n; r++) {
        if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
      }
      if (Math.abs(M[p][c]) < 1e-12) continue;
      const swap = M[c]; M[c] = M[p]; M[p] = swap;
      for (let r = 0; r < n; r++) {
        if (r === c) continue;
        const f = M[r][c] / M[c][c];
        if (!f) continue;
        for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
      }
    }

    const out = {};
    this.dataset.forEach((t, i) => {
      out[t.id] = M[i][i] !== 0 ? M[i][n] / M[i][i] : 0.5;
    });
    return out;
  }

  assignBadges(team, acfcRank, rms, pes) {
    const badges = [];
    const { apRank, stats, roster, coaching } = team;
    // Teams outside the AP Top 25 carry a null rank; poll-comparison badges must not fire for them.
    const isRanked = apRank !== null && apRank !== undefined;

    if (isRanked && pes.score >= 0.88 && apRank > acfcRank + 2) {
      badges.push({
        id: "analytics-darling",
        label: "Analytics Darling",
        type: "cyan",
        tooltip: "High underlying down-to-down efficiency (PES) and EPA overlooked by human poll inertia."
      });
    }

    if (isRanked && apRank <= 12 && (acfcRank >= apRank + 3 || pes.score < 0.82)) {
      badges.push({
        id: "poll-inertia",
        label: "Poll Inertia",
        type: "rose",
        tooltip: "Ranked high in human polls primarily due to inertia/record rather than down-to-down dominance."
      });
    }

    if (roster.blueChipRatio >= 0.75) {
      badges.push({
        id: "roster-elite",
        label: "Blue-Chip Power",
        type: "purple",
        tooltip: "Elite 4/5-star roster talent composite and blue-chip ratio (>75%)."
      });
    }

    if (coaching.coachingGrade >= 0.93) {
      badges.push({
        id: "elite-coach",
        label: "Master Tactician",
        type: "amber",
        tooltip: `Head Coach ${coaching.headCoach} holds elite tactical pedigree (${(coaching.coachingGrade * 100).toFixed(0)}%).`
      });
    }

    if (stats.offEfficiency >= 0.96) {
      badges.push({
        id: "offensive-juggernaut",
        label: "Offensive Juggernaut",
        type: "amber",
        tooltip: `Top-tier offensive drive efficiency (${(stats.offEfficiency * 100).toFixed(1)}%), elite EPA, and explosive scoring execution.`
      });
    }

    if (stats.sam >= 35.0) {
      badges.push({
        id: "blowout-machine",
        label: "Blowout Machine",
        type: "cyan",
        tooltip: `Dominant scoring differential (+${stats.sam.toFixed(1)} margin) crushing opponents in early-season action.`
      });
    }

    if (stats.defEfficiency >= 0.94) {
      badges.push({
        id: "defensive-fortress",
        label: "Defensive Fortress",
        type: "emerald",
        tooltip: "Top-tier defensive stop rate and opponent scoring drive suppression."
      });
    }

    return badges;
  }

  calculateRankings() {
    const { resumeWeight } = this.config;
    const efficiencyWeight = 1.0 - resumeWeight;
    // Computed once, not per team.
    const colleyComputed = this.computeColley();

    const evaluatedTeams = this.dataset.map(team => {
      const prior = this.calculatePrior(team);
      const rms = this.calculateRMS(team);
      const pes = this.calculatePES(team);

      const rawComposite = (resumeWeight * rms.score) + (efficiencyWeight * pes.score);

      return {
        ...team,
        prior,
        rms,
        pes,
        colleyComputed: colleyComputed[team.id],
        compositeScore: rawComposite
      };
    });

    evaluatedTeams.sort((a, b) => b.compositeScore - a.compositeScore);

    const maxScore = evaluatedTeams[0].compositeScore;
    const minScore = evaluatedTeams[evaluatedTeams.length - 1].compositeScore;
    const scoreRange = maxScore - minScore || 1;

    const rankedTeams = evaluatedTeams.map((team, index) => {
      const rank = index + 1;
      const normalizedIndex = 0.58 + ((team.compositeScore - minScore) / scoreRange) * 0.405;
      const acfcIndexFormatted = normalizedIndex.toFixed(3);

      const apDelta = team.apRank ? team.apRank - rank : null;
      const coachesDelta = team.coachesRank ? team.coachesRank - rank : null;
      const sidelineDelta = team.sidelineRank ? team.sidelineRank - rank : null;
      const bcsDelta = team.bcsRank ? team.bcsRank - rank : null;
      const rankDelta = team.previousRank !== undefined ? (team.previousRank - rank) : 0;

      const badges = this.assignBadges(team, rank, team.rms, team.pes);

      return {
        ...team,
        rank,
        acfcIndex: parseFloat(acfcIndexFormatted),
        acfcIndexFormatted,
        apDelta,
        coachesDelta,
        sidelineDelta,
        bcsDelta,
        rankDelta,
        badges
      };
    });

    return rankedTeams;
  }

  /**
   * Head-to-head projection.
   * ONE source of truth: the projected scores are computed first and the displayed spread and
   * win probability are DERIVED from them, so the three can never contradict each other.
   */
  simulateMatchup(teamAId, teamBId, venue = "neutral") {
    const teamA = this.dataset.find(t => t.id === teamAId);
    const teamB = this.dataset.find(t => t.id === teamBId);

    if (!teamA || !teamB) return null;

    const POINTS_PER_PES_UNIT = 38.0;  // one whole PES unit of separation ~= 38 points
    const HFA_POINTS = 2.5;            // matches the "Home (+2.5)" control label
    const TOTAL_BASE = 55.0;           // baseline combined scoring
    const WIN_PROB_SCALE = 6.5;        // logistic: a 7-pt favourite wins ~74%

    const pesA = this.calculatePES(teamA).score;
    const pesB = this.calculatePES(teamB).score;

    let venueShift = 0;
    if (venue === "homeA" || venue === true) venueShift = HFA_POINTS;
    else if (venue === "homeB") venueShift = -HFA_POINTS;

    const margin = ((pesA - pesB) * POINTS_PER_PES_UNIT) + venueShift;

    // Pace: each side's expected total responds to its own offense vs the opposing defense.
    const paceA = TOTAL_BASE + ((teamA.stats.offEfficiency - teamB.stats.defEfficiency) * 10);
    const paceB = TOTAL_BASE + ((teamB.stats.offEfficiency - teamA.stats.defEfficiency) * 10);
    const total = Math.max(30, Math.round((paceA + paceB) / 2));

    const scoreA = Math.max(10, Math.round((total + margin) / 2));
    const scoreB = Math.max(10, Math.round((total - margin) / 2));

    // Derived from what is actually displayed.
    const displayedMargin = scoreA - scoreB;
    const winProbA = 1 / (1 + Math.exp(-displayedMargin / WIN_PROB_SCALE));
    const winProbB = 1 - winProbA;

    let spreadText = "EVEN (Pick'em)";
    if (displayedMargin > 0) {
      spreadText = `${teamA.abbrev} -${Math.abs(displayedMargin)}`;
    } else if (displayedMargin < 0) {
      spreadText = `${teamB.abbrev} -${Math.abs(displayedMargin)}`;
    }

    const talentDiff = (teamA.roster.talentComposite - teamB.roster.talentComposite) * 100;
    const talentEdge = Math.abs(talentDiff) < 0.05
      ? "Even"
      : (talentDiff > 0
        ? `${teamA.abbrev} (+${talentDiff.toFixed(1)} index pts)`
        : `${teamB.abbrev} (+${Math.abs(talentDiff).toFixed(1)} index pts)`);

    return {
      teamA,
      teamB,
      venue,
      winProbA: (winProbA * 100).toFixed(1),
      winProbB: (winProbB * 100).toFixed(1),
      predictedSpread: spreadText,
      projectedMargin: displayedMargin,
      projectedScoreA: scoreA,
      projectedScoreB: scoreB,
      totalProjected: scoreA + scoreB,
      keyMatchups: {
        talentEdge,
        coachAdvantage: teamA.coaching.coachingGrade > teamB.coaching.coachingGrade
          ? `${teamA.coaching.headCoach} (${teamA.abbrev})`
          : `${teamB.coaching.headCoach} (${teamB.abbrev})`,
        successRateEdge: teamA.stats.successRate > teamB.stats.successRate ? teamA.abbrev : teamB.abbrev,
        finishingDriveEdge: teamA.stats.finishingDrives > teamB.stats.finishingDrives ? teamA.abbrev : teamB.abbrev
      }
    };
  }
}
