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
 */

class ACFCAlgorithmEngine {
  constructor(dataset = FBS_DATASET) {
    this.dataset = dataset;
    this.defaultConfig = {
      resumeWeight: 0.50,          // 50% Resume Merit, 50% Predictive Efficiency
      movSensitivity: 0.70,        // Margin of victory factor (0.0 to 1.0)
      movCap: 24.0,                // Diminishing returns cap on blowout margin
      sosMultiplier: 1.00,         // SOS impact multiplier (0.5 to 2.0)
      priorWeight: 0.40,           // 40% Roster/Coach Bayesian Prior, 60% In-Season Data
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
    const winBonus = (stats.top10Wins * 0.05) + (stats.top25Wins * 0.025);
    const winPct = record.wins / Math.max(1, (record.wins + record.losses));
    const controlComponent = Math.min(1.0, (stats.gameControl * 0.7 + winPct * 0.3) + winBonus);

    // 3. Colley Bias-Free Matrix Component - 20%
    const colleyComponent = stats.colleyMetric;

    // 4. Sagarin-style Schedule Margin (SAM) - 20%
    const marginComponent = this.calculateMarginFactor(stats.sam, movSensitivity, movCap);

    let inSeasonRMS = (sorComponent * 0.35) + 
                      (controlComponent * 0.25) + 
                      (colleyComponent * 0.20) + 
                      (marginComponent * 0.20);

    // Dynamic SOS Scaling: Neutral baseline is 0.78 SOS.
    // Higher SOS provides an earned merit boost; lower SOS is discounted.
    // sosMultiplier (0.5x to 2.0x) dynamically amplifies or dampens the schedule difficulty factor.
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
        colley: colleyComponent,
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

    // 2. Finishing Drives (Points per Trip Inside 40) - 35%
    const normalizedFinishing = Math.max(0, Math.min(1, (stats.finishingDrives - 3.7) / (5.3 - 3.7)));
    const netEfficiency = (stats.offEfficiency * 0.55) + (stats.defEfficiency * 0.45);
    const driveScore = (normalizedFinishing * 0.4) + (netEfficiency * 0.6);

    // 3. Explosiveness & CFBD Net PPA / EPA Proxy - 35%
    let epaScore = Math.max(0, Math.min(1, (stats.explosivenessEpa - 0.14) / (0.37 - 0.14)));

    if (turnoverNeutralization && stats.turnoverLuckDelta !== 0) {
      epaScore -= stats.turnoverLuckDelta * 0.4;
      epaScore = Math.max(0.05, Math.min(0.99, epaScore));
    }

    const inSeasonPES = (normalizedSR * 0.30) + (driveScore * 0.35) + (epaScore * 0.35);
    const prior = this.calculatePrior(team);
    const finalPES = (inSeasonPES * (1 - priorWeight)) + (prior.score * priorWeight);

    return {
      score: Math.max(0.01, Math.min(0.999, finalPES)),
      breakdown: {
        successRateScore: normalizedSR,
        driveFinishingScore: normalizedFinishing,
        netEfficiency: netEfficiency,
        epaScore: epaScore,
        priorScore: prior.score
      }
    };
  }

  assignBadges(team, acfcRank, rms, pes) {
    const badges = [];
    const { apRank, stats, roster, coaching } = team;

    if (pes.score >= 0.88 && apRank > acfcRank + 2) {
      badges.push({
        id: "analytics-darling",
        label: "Analytics Darling",
        type: "cyan",
        tooltip: "High underlying down-to-down efficiency (PES) and EPA overlooked by human poll inertia."
      });
    }

    if (apRank <= 12 && (acfcRank >= apRank + 3 || pes.score < 0.82)) {
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

  simulateMatchup(teamAId, teamBId, venue = "neutral") {
    const teamA = this.dataset.find(t => t.id === teamAId);
    const teamB = this.dataset.find(t => t.id === teamBId);

    if (!teamA || !teamB) return null;

    const pesA = this.calculatePES(teamA).score;
    const pesB = this.calculatePES(teamB).score;

    // Venue advantage: +0.035 PES for home team (~2.5 to 3.0 points spread impact)
    let venueAdvantageA = 0;
    if (venue === "homeA" || venue === true) {
      venueAdvantageA = 0.035;
    } else if (venue === "homeB") {
      venueAdvantageA = -0.035;
    }

    const diff = (pesA + venueAdvantageA) - pesB;

    const winProbA = 1 / (1 + Math.exp(- diff * 12.0));
    const winProbB = 1 - winProbA;

    const rawSpread = (diff * 38.0);
    const spreadA = Math.round(rawSpread * 2) / 2;

    const basePace = 27.5;
    const scoreA = Math.max(10, Math.round(basePace + (teamA.stats.offEfficiency * 12) - (teamB.stats.defEfficiency * 8) + (spreadA / 2)));
    const scoreB = Math.max(10, Math.round(basePace + (teamB.stats.offEfficiency * 12) - (teamA.stats.defEfficiency * 8) - (spreadA / 2)));

    let spreadText = "EVEN (Pick'em)";
    if (spreadA > 0) {
      spreadText = `${teamA.abbrev} -${Math.abs(spreadA)}`;
    } else if (spreadA < 0) {
      spreadText = `${teamB.abbrev} -${Math.abs(spreadA)}`;
    }

    return {
      teamA,
      teamB,
      venue,
      winProbA: (winProbA * 100).toFixed(1),
      winProbB: (winProbB * 100).toFixed(1),
      predictedSpread: spreadText,
      projectedScoreA: scoreA,
      projectedScoreB: scoreB,
      totalProjected: scoreA + scoreB,
      keyMatchups: {
        talentEdge: teamA.roster.talentComposite > teamB.roster.talentComposite ? `${teamA.abbrev} (+${((teamA.roster.talentComposite - teamB.roster.talentComposite)*100).toFixed(1)}%)` : `${teamB.abbrev} (+${((teamB.roster.talentComposite - teamA.roster.talentComposite)*100).toFixed(1)}%)`,
        coachAdvantage: teamA.coaching.coachingGrade > teamB.coaching.coachingGrade ? `${teamA.coaching.headCoach} (${teamA.abbrev})` : `${teamB.coaching.headCoach} (${teamB.abbrev})`,
        successRateEdge: teamA.stats.successRate > teamB.stats.successRate ? teamA.abbrev : teamB.abbrev,
        finishingDriveEdge: teamA.stats.finishingDrives > teamB.stats.finishingDrives ? teamA.abbrev : teamB.abbrev
      }
    };
  }
}
