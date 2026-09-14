/**
 * Advanced College Football Composite (ACFC) - 2026-27 Algorithm Engine
 * 
 * Implements decoupled Resume Merit Score (RMS) and Predictive Efficiency Score (PES),
 * Bayesian Prior Blending, Multi-Poll Benchmarking, and Emulation Presets for:
 * - SP+ / ESPN FPI (Predictive Power)
 * - Colley Matrix (Pure W-L Quality)
 * - Sagarin Predictor (Diminishing-Returns Margin)
 * - CFP Committee (High SOS & Marquee Wins)
 * - The Sideline / AP Poll (Consensus)
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
    this.currentWeek = 3;
    this.weekReports = [];
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

  getBayesianPriorWeight(week = this.currentWeek) {
    const priorSchedule = {
      1: 0.60,
      2: 0.50,
      3: 0.40,
      4: 0.30,
      5: 0.22,
      6: 0.15,
      7: 0.10,
      8: 0.05
    };
    return priorSchedule[week] !== undefined ? priorSchedule[week] : 0.05;
  }

  simulateWeekSlate(weekNumber) {
    const slateData = WEEKLY_SLATES_2026 && WEEKLY_SLATES_2026[weekNumber];
    if (!slateData) {
      console.warn(`No schedule slate found for Week ${weekNumber}`);
      return null;
    }

    // 1. Snapshot previous rank for delta calculations
    const currentRanks = this.calculateRankings();
    const rankMap = new Map();
    currentRanks.forEach(team => {
      rankMap.set(team.id, team.rank);
      const match = this.dataset.find(t => t.id === team.id);
      if (match) {
        match.previousRank = team.rank;
      }
    });

    const simulatedGames = [];

    // Helper: generate authentic football scores
    const getFootballScores = (expectedMargin) => {
      const pace = 50 + (Math.random() - 0.5) * 14;
      const actualMargin = expectedMargin + (Math.random() - 0.5) * 16;
      let score1 = Math.round((pace + actualMargin) / 2);
      let score2 = Math.round((pace - actualMargin) / 2);

      // Avoid ties in college football
      if (score1 === score2) {
        if (Math.random() > 0.5) score1 += 3; else score2 += 3;
      }

      // Convert to common football scores
      score1 = Math.max(7, score1);
      score2 = Math.max(3, score2);

      return { score1, score2, actualMargin: score1 - score2 };
    };

    // 2. Play out each matchup in slate
    slateData.games.forEach(game => {
      if (game.isBye) {
        const byeTeam = this.dataset.find(t => t.id === game.homeTeamId);
        if (byeTeam) {
          simulatedGames.push({
            isBye: true,
            teamName: byeTeam.name,
            teamLogo: byeTeam.logo,
            marquee: game.marquee || "Open Date"
          });
        }
        return;
      }

      // Case A: Matchup between two Top 25 teams
      if (game.isTop25Matchup && game.homeTeamId && game.awayTeamId) {
        const homeTeam = this.dataset.find(t => t.id === game.homeTeamId);
        const awayTeam = this.dataset.find(t => t.id === game.awayTeamId);

        if (homeTeam && awayTeam) {
          const homeRank = rankMap.get(homeTeam.id) || 15;
          const awayRank = rankMap.get(awayTeam.id) || 15;

          const homePES = this.calculatePES(homeTeam).score;
          const awayPES = this.calculatePES(awayTeam).score;

          const venueBonus = game.isNeutral ? 0 : 2.5;
          const expectedMargin = ((homePES - awayPES) * 28.0) + venueBonus;

          const { score1, score2 } = getFootballScores(expectedMargin);
          const homeWon = score1 > score2;
          const homeScore = score1;
          const awayScore = score2;

          // Update W-L records
          if (homeWon) {
            homeTeam.record.wins++;
            awayTeam.record.losses++;
          } else {
            homeTeam.record.losses++;
            awayTeam.record.wins++;
          }

          // Append to team schedules
          const homeVenueLabel = game.isNeutral ? "Neutral" : "Home";
          const awayVenueLabel = game.isNeutral ? "Neutral" : "Away";
          const homePrefix = game.isNeutral ? "vs " : "vs ";
          const awayPrefix = game.isNeutral ? "vs " : "at ";

          homeTeam.schedule2026.gamesPlayed.push({
            week: weekNumber,
            opponent: `${homePrefix}#${awayRank} ${awayTeam.name}`,
            result: `${homeWon ? "W" : "L"} ${homeScore}-${awayScore}`,
            venue: homeVenueLabel
          });

          awayTeam.schedule2026.gamesPlayed.push({
            week: weekNumber,
            opponent: `${awayPrefix}#${homeRank} ${homeTeam.name}`,
            result: `${homeWon ? "L" : "W"} ${awayScore}-${homeScore}`,
            venue: awayVenueLabel
          });

          // Adjust in-season analytics
          const margin = homeScore - awayScore;
          homeTeam.stats.sam = Math.round(((homeTeam.stats.sam * 0.72) + (margin * 0.28)) * 10) / 10;
          awayTeam.stats.sam = Math.round(((awayTeam.stats.sam * 0.72) - (margin * 0.28)) * 10) / 10;

          if (homeWon) {
            homeTeam.stats.top25Wins++;
            if (awayRank <= 10) homeTeam.stats.top10Wins++;
            homeTeam.stats.sor = Math.min(0.998, homeTeam.stats.sor + 0.014);
            homeTeam.stats.gameControl = Math.min(0.998, homeTeam.stats.gameControl + 0.010);
            awayTeam.stats.sor = Math.max(0.650, awayTeam.stats.sor - 0.025);
            awayTeam.stats.gameControl = Math.max(0.650, awayTeam.stats.gameControl - 0.015);
          } else {
            awayTeam.stats.top25Wins++;
            if (homeRank <= 10) awayTeam.stats.top10Wins++;
            awayTeam.stats.sor = Math.min(0.998, awayTeam.stats.sor + 0.020);
            awayTeam.stats.gameControl = Math.min(0.998, awayTeam.stats.gameControl + 0.014);
            homeTeam.stats.sor = Math.max(0.650, homeTeam.stats.sor - 0.022);
            homeTeam.stats.gameControl = Math.max(0.650, homeTeam.stats.gameControl - 0.018);
          }

          homeTeam.stats.sos = Math.min(0.985, homeTeam.stats.sos + 0.008);
          awayTeam.stats.sos = Math.min(0.985, awayTeam.stats.sos + 0.008);

          const isUpset = (homeWon && homeRank > awayRank + 4) || (!homeWon && awayRank > homeRank + 4);

          simulatedGames.push({
            isTop25: true,
            homeTeam: { id: homeTeam.id, name: homeTeam.name, abbrev: homeTeam.abbrev, rank: homeRank, logo: homeTeam.logo, score: homeScore, won: homeWon },
            awayTeam: { id: awayTeam.id, name: awayTeam.name, abbrev: awayTeam.abbrev, rank: awayRank, logo: awayTeam.logo, score: awayScore, won: !homeWon },
            winnerId: homeWon ? homeTeam.id : awayTeam.id,
            isUpset,
            marquee: game.marquee
          });
        }
      } 
      // Case B: Top 25 team vs unranked opponent
      else {
        const top25Team = this.dataset.find(t => t.id === (game.homeTeamId || game.awayTeamId));
        if (top25Team) {
          const isHome = top25Team.id === game.homeTeamId;
          const oppName = isHome ? (game.awayTeamName || "Unranked FBS") : (game.homeTeamName || "Unranked FBS");
          const oppAbbrev = isHome ? (game.awayAbbrev || "OPP") : (game.homeAbbrev || "OPP");
          const oppPower = game.awayPower || game.homePower || 0.54;

          const teamPES = this.calculatePES(top25Team).score;
          const venueAdv = isHome ? 2.5 : -2.5;
          const expectedMargin = ((teamPES - oppPower) * 34.0) + venueAdv;

          // Heavy favorite usually wins (88-97% chance depending on spread)
          const winProb = 1 / (1 + Math.exp(-expectedMargin / 7.5));
          const top25Won = Math.random() < winProb;

          let top25Score, oppScore;
          if (top25Won) {
            top25Score = Math.max(28, Math.round(35 + (expectedMargin * 0.4) + (Math.random() - 0.5) * 10));
            oppScore = Math.max(3, Math.round(21 - (expectedMargin * 0.3) + (Math.random() - 0.5) * 8));
            if (top25Score <= oppScore) top25Score = oppScore + 7;
          } else {
            // Upset!
            oppScore = Math.max(24, Math.round(28 + (Math.random() * 7)));
            top25Score = Math.max(14, oppScore - Math.round(3 + Math.random() * 4));
          }

          const homeScore = isHome ? top25Score : oppScore;
          const awayScore = isHome ? oppScore : top25Score;

          if (top25Won) {
            top25Team.record.wins++;
            top25Team.stats.sam = Math.round(((top25Team.stats.sam * 0.8) + ((top25Score - oppScore) * 0.2)) * 10) / 10;
            top25Team.stats.sor = Math.min(0.999, top25Team.stats.sor + 0.005);
            top25Team.stats.gameControl = Math.min(0.999, top25Team.stats.gameControl + 0.005);
          } else {
            top25Team.record.losses++;
            top25Team.stats.sam = Math.round(((top25Team.stats.sam * 0.7) - 14) * 10) / 10;
            top25Team.stats.sor = Math.max(0.600, top25Team.stats.sor - 0.065);
            top25Team.stats.gameControl = Math.max(0.600, top25Team.stats.gameControl - 0.040);
          }

          top25Team.stats.sos = Math.min(0.985, top25Team.stats.sos + 0.004);

          const venueText = isHome ? "Home" : "Away";
          const prefix = isHome ? "vs " : "at ";
          top25Team.schedule2026.gamesPlayed.push({
            week: weekNumber,
            opponent: `${prefix}${oppName}`,
            result: `${top25Won ? "W" : "L"} ${top25Score}-${oppScore}`,
            venue: venueText
          });

          const currentRank = rankMap.get(top25Team.id) || 20;

          simulatedGames.push({
            isTop25: false,
            homeTeam: isHome 
              ? { id: top25Team.id, name: top25Team.name, abbrev: top25Team.abbrev, rank: currentRank, logo: top25Team.logo, score: homeScore, won: top25Won }
              : { id: "opp", name: oppName, abbrev: oppAbbrev, rank: null, logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/default.png", score: homeScore, won: !top25Won },
            awayTeam: isHome
              ? { id: "opp", name: oppName, abbrev: oppAbbrev, rank: null, logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/default.png", score: awayScore, won: !top25Won }
              : { id: top25Team.id, name: top25Team.name, abbrev: top25Team.abbrev, rank: currentRank, logo: top25Team.logo, score: awayScore, won: top25Won },
            winnerId: top25Won ? top25Team.id : "opp",
            isUpset: !top25Won,
            marquee: game.marquee
          });
        }
      }
    });

    // 3. Update Bayesian Prior Weight for the newly simulated week
    this.currentWeek = weekNumber;
    const newPriorWeight = this.getBayesianPriorWeight(weekNumber);
    this.config.priorWeight = newPriorWeight;

    // 4. Re-calculate composite rankings
    const updatedRankings = this.calculateRankings();

    // 5. Compute weekly rank deltas
    updatedRankings.forEach(team => {
      const prev = team.previousRank !== undefined ? team.previousRank : team.rank;
      team.rankDelta = prev - team.rank;
    });

    // 6. Identify top risers and fallers
    const sortedByDelta = [...updatedRankings].sort((a, b) => b.rankDelta - a.rankDelta);
    const topRisers = sortedByDelta.filter(t => t.rankDelta > 0).slice(0, 3);
    const topFallers = [...sortedByDelta].reverse().filter(t => t.rankDelta < 0).slice(0, 3);
    const upsets = simulatedGames.filter(g => g.isUpset);

    const weekReport = {
      week: weekNumber,
      title: slateData.title,
      priorWeight: newPriorWeight,
      games: simulatedGames,
      topRisers,
      topFallers,
      upsets,
      timestamp: new Date().toLocaleTimeString()
    };

    this.weekReports.push(weekReport);
    return weekReport;
  }

  resetSeason() {
    if (typeof getFreshDataset === "function") {
      this.dataset = getFreshDataset();
    }
    this.currentWeek = 3;
    this.config.priorWeight = 0.40;
    this.weekReports = [];
    return this.calculateRankings();
  }
}
