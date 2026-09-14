/**
 * Advanced College Football Composite (ACFC) - 2026-27 Season Dataset
 * Calibrated with live Week 3 2026 rankings from AP Poll, AFCA Coaches Poll, The Sideline Composite, and CFBTrack.
 */

const FBS_DATASET = [
  {
    id: "texas",
    name: "Texas",
    mascot: "Longhorns",
    abbrev: "TEX",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 1,
    coachesRank: 1,
    sidelineRank: 1,
    bcsRank: 1,
    colors: { primary: "#BF5700", secondary: "#FFFFFF", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/251.png",
    coaching: {
      headCoach: "Steve Sarkisian",
      offensiveSystem: "Pro-Style Spread / RPO",
      coachingGrade: 0.96,
      tenureYears: 6
    },
    roster: {
      talentComposite: 0.970,
      blueChipRatio: 0.85,
      returningProduction: 0.74,
      keyPlayers: ["Arch Manning (QB)", "CJ Baxter (RB)", "Anthony Hill Jr. (LB)", "Colin Simmons (EDGE)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs UTSA", result: "W 45-7", venue: "Home" },
        { week: 2, opponent: "vs #6 Ohio State", result: "W 31-24", venue: "Home" }
      ],
      upcomingMarquee: "vs Oklahoma (Red River Rivalry), vs Georgia, at Texas A&M",
      projectedSosRank: 3
    },
    stats: {
      sor: 0.970,
      gameControl: 0.980,
      sos: 0.890,
      colleyMetric: 0.960,
      sam: 28.5,
      top25Wins: 1,
      top10Wins: 1,
      bestWin: "vs #6 Ohio State (31-24)",
      keyLoss: "None",
      offEfficiency: 0.970,
      defEfficiency: 0.965,
      successRate: 0.540,
      finishingDrives: 5.15,
      explosivenessEpa: 0.345,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "georgia",
    name: "Georgia",
    mascot: "Bulldogs",
    abbrev: "UGA",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 2,
    coachesRank: 2,
    sidelineRank: 2,
    bcsRank: 2,
    colors: { primary: "#BA0C2F", secondary: "#000000", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/61.png",
    coaching: {
      headCoach: "Kirby Smart",
      offensiveSystem: "Pro-Spread Multiple",
      coachingGrade: 0.98,
      tenureYears: 11
    },
    roster: {
      talentComposite: 0.990,
      blueChipRatio: 0.89,
      returningProduction: 0.76,
      keyPlayers: ["Gunner Stockton (QB)", "Roderick Robinson (RB)", "Mykel Williams (EDGE)", "KJ Bolden (S)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Marshall", result: "W 45-3", venue: "Home" },
        { week: 2, opponent: "vs Charlotte", result: "W 48-7", venue: "Home" }
      ],
      upcomingMarquee: "at Alabama, at Texas, vs Ole Miss, vs Tennessee",
      projectedSosRank: 1
    },
    stats: {
      sor: 0.975,
      gameControl: 0.985,
      sos: 0.935,
      colleyMetric: 0.965,
      sam: 38.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Marshall (45-3)",
      keyLoss: "None",
      offEfficiency: 0.940,
      defEfficiency: 0.990,
      successRate: 0.530,
      finishingDrives: 4.95,
      explosivenessEpa: 0.310,
      turnoverLuckDelta: -0.01
    }
  },
  {
    id: "notre-dame",
    name: "Notre Dame",
    mascot: "Fighting Irish",
    abbrev: "ND",
    conference: "Independent",
    record: { wins: 2, losses: 0 },
    apRank: 3,
    coachesRank: 3,
    sidelineRank: 3,
    bcsRank: 3,
    colors: { primary: "#0C2340", secondary: "#C99700", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/87.png",
    coaching: {
      headCoach: "Marcus Freeman",
      offensiveSystem: "Pro-Style Balanced Spread",
      coachingGrade: 0.92,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.935,
      blueChipRatio: 0.76,
      returningProduction: 0.78,
      keyPlayers: ["CJ Carr (QB)", "Jeremiyah Love (RB)", "Benjamin Morrison (CB)", "Drayk Bowen (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Wisconsin (Lambeau Field)", result: "W 28-20", venue: "Neutral" },
        { week: 2, opponent: "vs Purdue", result: "W 45-14", venue: "Home" }
      ],
      upcomingMarquee: "vs Miami, at USC, at BYU",
      projectedSosRank: 8
    },
    stats: {
      sor: 0.950,
      gameControl: 0.940,
      sos: 0.880,
      colleyMetric: 0.950,
      sam: 24.0,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "vs Wisconsin at Lambeau (28-20)",
      keyLoss: "None",
      offEfficiency: 0.930,
      defEfficiency: 0.975,
      successRate: 0.520,
      finishingDrives: 4.85,
      explosivenessEpa: 0.300,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "indiana",
    name: "Indiana",
    mascot: "Hoosiers",
    abbrev: "IND",
    conference: "Big Ten",
    record: { wins: 2, losses: 0 },
    apRank: 4,
    coachesRank: 4,
    sidelineRank: 4,
    bcsRank: 4,
    colors: { primary: "#990000", secondary: "#EEEDEB", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/84.png",
    coaching: {
      headCoach: "Curt Cignetti",
      offensiveSystem: "High-Efficiency Spread / RPO Mesh",
      coachingGrade: 0.94,
      tenureYears: 3
    },
    roster: {
      talentComposite: 0.880,
      blueChipRatio: 0.42,
      returningProduction: 0.81,
      keyPlayers: ["Tyler Cherry (QB)", "Justice Ellison (RB)", "Elijah Sarratt (WR)", "Mikail Kamara (DL)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Ball State", result: "W 42-10", venue: "Home" },
        { week: 2, opponent: "vs Indiana State", result: "W 56-7", venue: "Home" }
      ],
      upcomingMarquee: "at UCLA, vs Michigan, at Ohio State",
      projectedSosRank: 16
    },
    stats: {
      sor: 0.915,
      gameControl: 0.975,
      sos: 0.730,
      colleyMetric: 0.920,
      sam: 37.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Ball State (42-10)",
      keyLoss: "None",
      offEfficiency: 0.965,
      defEfficiency: 0.930,
      successRate: 0.550,
      finishingDrives: 5.30,
      explosivenessEpa: 0.355,
      turnoverLuckDelta: 0.02
    }
  },
  {
    id: "miami",
    name: "Miami",
    mascot: "Hurricanes",
    abbrev: "MIA",
    conference: "ACC",
    record: { wins: 2, losses: 0 },
    apRank: 5,
    coachesRank: 5,
    sidelineRank: 5,
    bcsRank: 5,
    colors: { primary: "#F47321", secondary: "#005030", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
    coaching: {
      headCoach: "Mario Cristobal",
      offensiveSystem: "Air Raid / Power Trench Foundation",
      coachingGrade: 0.91,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.930,
      blueChipRatio: 0.72,
      returningProduction: 0.79,
      keyPlayers: ["Emory Williams (QB)", "Mark Fletcher Jr. (RB)", "Rueben Bain Jr. (EDGE)", "Damari Brown (CB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Florida A&M", result: "W 52-9", venue: "Home" },
        { week: 2, opponent: "vs South Florida", result: "W 41-14", venue: "Home" }
      ],
      upcomingMarquee: "at Notre Dame, vs Florida State, vs Louisville",
      projectedSosRank: 14
    },
    stats: {
      sor: 0.935,
      gameControl: 0.965,
      sos: 0.790,
      colleyMetric: 0.935,
      sam: 35.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs South Florida (41-14)",
      keyLoss: "None",
      offEfficiency: 0.975,
      defEfficiency: 0.915,
      successRate: 0.540,
      finishingDrives: 5.20,
      explosivenessEpa: 0.360,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "ohio-state",
    name: "Ohio State",
    mascot: "Buckeyes",
    abbrev: "OSU",
    conference: "Big Ten",
    record: { wins: 1, losses: 1 },
    apRank: 6,
    coachesRank: 6,
    sidelineRank: 6,
    bcsRank: 7,
    colors: { primary: "#BB0000", secondary: "#666666", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/194.png",
    coaching: {
      headCoach: "Ryan Day",
      offensiveSystem: "Spread Option / NFL Passing Tree",
      coachingGrade: 0.95,
      tenureYears: 8
    },
    roster: {
      talentComposite: 0.985,
      blueChipRatio: 0.88,
      returningProduction: 0.70,
      keyPlayers: ["Julian Sayin (QB)", "Jeremiah Smith (WR)", "Caleb Downs (S)", "Eddrick Houston (DL)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Akron", result: "W 52-6", venue: "Home" },
        { week: 2, opponent: "vs Texas", result: "L 24-31", venue: "Home" }
      ],
      upcomingMarquee: "at Oregon, at Penn State, vs Michigan",
      projectedSosRank: 4
    },
    stats: {
      sor: 0.865,
      gameControl: 0.930,
      sos: 0.920,
      colleyMetric: 0.830,
      sam: 21.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Akron (52-6)",
      keyLoss: "vs #1 Texas (24-31)",
      offEfficiency: 0.965,
      defEfficiency: 0.980,
      successRate: 0.545,
      finishingDrives: 5.15,
      explosivenessEpa: 0.350,
      turnoverLuckDelta: -0.04
    }
  },
  {
    id: "lsu",
    name: "LSU",
    mascot: "Tigers",
    abbrev: "LSU",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 7,
    coachesRank: 7,
    sidelineRank: 7,
    bcsRank: 6,
    colors: { primary: "#461D7C", secondary: "#FDD023", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/99.png",
    coaching: {
      headCoach: "Brian Kelly",
      offensiveSystem: "Spread Multi-Personnel / Pro Passing",
      coachingGrade: 0.93,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.960,
      blueChipRatio: 0.82,
      returningProduction: 0.73,
      keyPlayers: ["Garrett Nussmeier (QB)", "Kaleb Jackson (RB)", "Harold Perkins Jr. (LB/EDGE)", "PJ Woodland (CB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Clemson", result: "W 27-21", venue: "Home" },
        { week: 2, opponent: "vs Nicholls", result: "W 44-10", venue: "Home" }
      ],
      upcomingMarquee: "vs Ole Miss, at Texas A&M, vs Alabama, at Oklahoma",
      projectedSosRank: 6
    },
    stats: {
      sor: 0.940,
      gameControl: 0.920,
      sos: 0.890,
      colleyMetric: 0.940,
      sam: 20.0,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "vs Clemson (27-21)",
      keyLoss: "None",
      offEfficiency: 0.950,
      defEfficiency: 0.915,
      successRate: 0.525,
      finishingDrives: 4.90,
      explosivenessEpa: 0.330,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "texas-am",
    name: "Texas A&M",
    mascot: "Aggies",
    abbrev: "TA&M",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 9,
    coachesRank: 8,
    sidelineRank: 8,
    bcsRank: 9,
    colors: { primary: "#500000", secondary: "#FFFFFF", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/245.png",
    coaching: {
      headCoach: "Mike Elko",
      offensiveSystem: "Pro-Style Multiple / Trench Heavy",
      coachingGrade: 0.91,
      tenureYears: 3
    },
    roster: {
      talentComposite: 0.945,
      blueChipRatio: 0.78,
      returningProduction: 0.78,
      keyPlayers: ["Marcel Reed (QB)", "Le'Veon Moss (RB)", "Nic Scourton (EDGE)", "Taurean York (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Arizona State", result: "W 34-17", venue: "Home" },
        { week: 2, opponent: "vs McNeese", result: "W 52-10", venue: "Home" }
      ],
      upcomingMarquee: "vs Missouri, vs LSU, at Texas",
      projectedSosRank: 9
    },
    stats: {
      sor: 0.925,
      gameControl: 0.920,
      sos: 0.835,
      colleyMetric: 0.925,
      sam: 29.5,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "vs Arizona State (34-17)",
      keyLoss: "None",
      offEfficiency: 0.915,
      defEfficiency: 0.950,
      successRate: 0.515,
      finishingDrives: 4.70,
      explosivenessEpa: 0.290,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "ole-miss",
    name: "Ole Miss",
    mascot: "Rebels",
    abbrev: "MISS",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 8,
    coachesRank: 9,
    sidelineRank: 9,
    bcsRank: 8,
    colors: { primary: "#13294B", secondary: "#CE1126", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/145.png",
    coaching: {
      headCoach: "Lane Kiffin",
      offensiveSystem: "Tempo Vertical Choice / RPO",
      coachingGrade: 0.93,
      tenureYears: 7
    },
    roster: {
      talentComposite: 0.910,
      blueChipRatio: 0.67,
      returningProduction: 0.75,
      keyPlayers: ["Austin Simmons (QB)", "Princely Umanmielen (EDGE)", "Tre Harris III (WR)", "Suntarine Perkins (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Georgia State", result: "W 52-10", venue: "Home" },
        { week: 2, opponent: "vs Middle Tennessee", result: "W 48-7", venue: "Home" }
      ],
      upcomingMarquee: "at LSU, vs Oklahoma, vs Georgia",
      projectedSosRank: 10
    },
    stats: {
      sor: 0.920,
      gameControl: 0.985,
      sos: 0.710,
      colleyMetric: 0.925,
      sam: 36.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Middle Tennessee (48-7)",
      keyLoss: "None",
      offEfficiency: 0.980,
      defEfficiency: 0.950,
      successRate: 0.550,
      finishingDrives: 5.25,
      explosivenessEpa: 0.375,
      turnoverLuckDelta: 0.00
    }
  },
  {
    id: "alabama",
    name: "Alabama",
    mascot: "Crimson Tide",
    abbrev: "BAMA",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 10,
    coachesRank: 10,
    sidelineRank: 10,
    bcsRank: 10,
    colors: { primary: "#9E1B32", secondary: "#828A8F", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/333.png",
    coaching: {
      headCoach: "Kalen DeBoer",
      offensiveSystem: "Motion-Heavy Explosive Passing",
      coachingGrade: 0.94,
      tenureYears: 3
    },
    roster: {
      talentComposite: 0.985,
      blueChipRatio: 0.87,
      returningProduction: 0.72,
      keyPlayers: ["Ty Simpson (QB)", "Ryan Williams (WR)", "Justice Haynes (RB)", "Deontae Lawson (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Florida State", result: "W 31-14", venue: "Home" },
        { week: 2, opponent: "vs South Florida", result: "W 42-16", venue: "Home" }
      ],
      upcomingMarquee: "at Wisconsin, vs Georgia, at Tennessee, at LSU",
      projectedSosRank: 2
    },
    stats: {
      sor: 0.940,
      gameControl: 0.955,
      sos: 0.850,
      colleyMetric: 0.935,
      sam: 21.5,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "vs Florida State (31-14)",
      keyLoss: "None",
      offEfficiency: 0.960,
      defEfficiency: 0.930,
      successRate: 0.530,
      finishingDrives: 5.05,
      explosivenessEpa: 0.345,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "usc",
    name: "USC",
    mascot: "Trojans",
    abbrev: "USC",
    conference: "Big Ten",
    record: { wins: 2, losses: 0 },
    apRank: 12,
    coachesRank: 11,
    sidelineRank: 11,
    bcsRank: 11,
    colors: { primary: "#990000", secondary: "#FFC72C", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/30.png",
    coaching: {
      headCoach: "Lincoln Riley",
      offensiveSystem: "Air Raid / Counter-Tre GT Run Scheme",
      coachingGrade: 0.93,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.935,
      blueChipRatio: 0.74,
      returningProduction: 0.72,
      keyPlayers: ["Miller Moss (QB)", "Zachariah Branch (WR/RET)", "Kamari Ramsey (S)", "Easton Mascarenas-Arnold (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Fresno State", result: "W 38-14", venue: "Home" },
        { week: 2, opponent: "vs Utah State", result: "W 48-7", venue: "Home" }
      ],
      upcomingMarquee: "at Michigan, vs Penn State, vs Notre Dame",
      projectedSosRank: 11
    },
    stats: {
      sor: 0.925,
      gameControl: 0.940,
      sos: 0.810,
      colleyMetric: 0.930,
      sam: 32.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Fresno State (38-14)",
      keyLoss: "None",
      offEfficiency: 0.950,
      defEfficiency: 0.920,
      successRate: 0.525,
      finishingDrives: 4.90,
      explosivenessEpa: 0.335,
      turnoverLuckDelta: 0.02
    }
  },
  {
    id: "byu",
    name: "BYU",
    mascot: "Cougars",
    abbrev: "BYU",
    conference: "Big 12",
    record: { wins: 2, losses: 0 },
    apRank: 11,
    coachesRank: 13,
    sidelineRank: 12,
    bcsRank: 12,
    colors: { primary: "#002E5D", secondary: "#FFFFFF", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/252.png",
    coaching: {
      headCoach: "Kalani Sitake",
      offensiveSystem: "Multiple Pro-Spread / Physical Trench",
      coachingGrade: 0.89,
      tenureYears: 11
    },
    roster: {
      talentComposite: 0.850,
      blueChipRatio: 0.32,
      returningProduction: 0.82,
      keyPlayers: ["Jake Retzlaff (QB)", "LJ Martin (RB)", "Chase Roberts (WR)", "Tyler Batty (DE)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Southern Illinois", result: "W 41-13", venue: "Home" },
        { week: 2, opponent: "at #16 SMU", result: "W 18-15", venue: "Away" }
      ],
      upcomingMarquee: "vs Kansas State, at Baylor, vs Arizona",
      projectedSosRank: 20
    },
    stats: {
      sor: 0.925,
      gameControl: 0.880,
      sos: 0.825,
      colleyMetric: 0.930,
      sam: 15.5,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "at #16 SMU (18-15)",
      keyLoss: "None",
      offEfficiency: 0.880,
      defEfficiency: 0.935,
      successRate: 0.490,
      finishingDrives: 4.50,
      explosivenessEpa: 0.270,
      turnoverLuckDelta: 0.04
    }
  },
  {
    id: "texas-tech",
    name: "Texas Tech",
    mascot: "Red Raiders",
    abbrev: "TTU",
    conference: "Big 12",
    record: { wins: 2, losses: 0 },
    apRank: 13,
    coachesRank: 12,
    sidelineRank: 13,
    bcsRank: 13,
    colors: { primary: "#CC0000", secondary: "#000000", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png",
    coaching: {
      headCoach: "Joey McGuire",
      offensiveSystem: "High-Tempo Air Raid / Aggressive 4th-Down",
      coachingGrade: 0.89,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.870,
      blueChipRatio: 0.40,
      returningProduction: 0.79,
      keyPlayers: ["Behren Morton (QB)", "Tahj Brooks Legacy (RB)", "Coy Eakin (WR)", "Jacob Rodriguez (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Abilene Christian", result: "W 52-51 (OT)", venue: "Home" },
        { week: 2, opponent: "at Washington State", result: "W 37-16", venue: "Away" }
      ],
      upcomingMarquee: "vs Arizona State, at TCU, vs Baylor",
      projectedSosRank: 22
    },
    stats: {
      sor: 0.890,
      gameControl: 0.870,
      sos: 0.780,
      colleyMetric: 0.910,
      sam: 11.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "at Washington State (37-16)",
      keyLoss: "None",
      offEfficiency: 0.940,
      defEfficiency: 0.860,
      successRate: 0.505,
      finishingDrives: 4.80,
      explosivenessEpa: 0.320,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "penn-state",
    name: "Penn State",
    mascot: "Nittany Lions",
    abbrev: "PSU",
    conference: "Big Ten",
    record: { wins: 2, losses: 0 },
    apRank: 14,
    coachesRank: 15,
    sidelineRank: 14,
    bcsRank: 14,
    colors: { primary: "#041E42", secondary: "#FFFFFF", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/213.png",
    coaching: {
      headCoach: "James Franklin",
      offensiveSystem: "Modern Spread / Multi-TE Power",
      coachingGrade: 0.90,
      tenureYears: 13
    },
    roster: {
      talentComposite: 0.925,
      blueChipRatio: 0.73,
      returningProduction: 0.76,
      keyPlayers: ["Drew Allar (QB)", "Nicholas Singleton (RB)", "Kaytron Allen (RB)", "Tony Rojas (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs San Jose State", result: "W 45-10", venue: "Home" },
        { week: 2, opponent: "vs Bowling Green", result: "W 38-14", venue: "Home" }
      ],
      upcomingMarquee: "at USC, vs Ohio State, at Washington",
      projectedSosRank: 7
    },
    stats: {
      sor: 0.910,
      gameControl: 0.920,
      sos: 0.790,
      colleyMetric: 0.915,
      sam: 29.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs San Jose State (45-10)",
      keyLoss: "None",
      offEfficiency: 0.920,
      defEfficiency: 0.945,
      successRate: 0.500,
      finishingDrives: 4.75,
      explosivenessEpa: 0.280,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "tennessee",
    name: "Tennessee",
    mascot: "Volunteers",
    abbrev: "TENN",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 15,
    coachesRank: 14,
    sidelineRank: 15,
    bcsRank: 15,
    colors: { primary: "#FF8200", secondary: "#58595B", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png",
    coaching: {
      headCoach: "Josh Heupel",
      offensiveSystem: "Hyper-Speed Veer-and-Shoot",
      coachingGrade: 0.93,
      tenureYears: 6
    },
    roster: {
      talentComposite: 0.915,
      blueChipRatio: 0.69,
      returningProduction: 0.80,
      keyPlayers: ["Nico Iamaleava (QB)", "Dylan Sampson (RB)", "James Pearce Jr. (EDGE)", "Boo Carter (DB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Kent State", result: "W 56-6", venue: "Home" },
        { week: 2, opponent: "vs East Tennessee State", result: "W 51-10", venue: "Home" }
      ],
      upcomingMarquee: "at Oklahoma, vs Alabama, at Georgia",
      projectedSosRank: 5
    },
    stats: {
      sor: 0.935,
      gameControl: 0.980,
      sos: 0.810,
      colleyMetric: 0.935,
      sam: 33.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Kent State (56-6)",
      keyLoss: "None",
      offEfficiency: 0.970,
      defEfficiency: 0.965,
      successRate: 0.540,
      finishingDrives: 5.30,
      explosivenessEpa: 0.365,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "smu",
    name: "SMU",
    mascot: "Mustangs",
    abbrev: "SMU",
    conference: "ACC",
    record: { wins: 2, losses: 1 },
    apRank: 16,
    coachesRank: 16,
    sidelineRank: 16,
    bcsRank: 16,
    colors: { primary: "#0033A0", secondary: "#C8102E", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png",
    coaching: {
      headCoach: "Rhett Lashlee",
      offensiveSystem: "Ultra-Fast Air Raid / Up-Tempo Spread",
      coachingGrade: 0.89,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.875,
      blueChipRatio: 0.45,
      returningProduction: 0.77,
      keyPlayers: ["Kevin Jennings (QB)", "Brashard Smith (RB)", "Kobe Wilson (LB)", "Isaiah Nwokobia (S)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 0, opponent: "at Nevada", result: "W 29-24", venue: "Away" },
        { week: 1, opponent: "vs Houston Christian", result: "W 59-7", venue: "Home" },
        { week: 2, opponent: "vs #11 BYU", result: "L 15-18", venue: "Home" }
      ],
      upcomingMarquee: "vs TCU, at Louisville, at Duke",
      projectedSosRank: 21
    },
    stats: {
      sor: 0.840,
      gameControl: 0.865,
      sos: 0.790,
      colleyMetric: 0.830,
      sam: 16.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "at Nevada (29-24)",
      keyLoss: "vs #11 BYU (15-18)",
      offEfficiency: 0.895,
      defEfficiency: 0.880,
      successRate: 0.485,
      finishingDrives: 4.45,
      explosivenessEpa: 0.265,
      turnoverLuckDelta: -0.02
    }
  },
  {
    id: "utah",
    name: "Utah",
    mascot: "Utes",
    abbrev: "UTAH",
    conference: "Big 12",
    record: { wins: 2, losses: 0 },
    apRank: 17,
    coachesRank: 17,
    sidelineRank: 17,
    bcsRank: 17,
    colors: { primary: "#CC0000", secondary: "#000000", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/254.png",
    coaching: {
      headCoach: "Kyle Whittingham",
      offensiveSystem: "Power Spread / Aggressive Press Cover-1",
      coachingGrade: 0.94,
      tenureYears: 22
    },
    roster: {
      talentComposite: 0.885,
      blueChipRatio: 0.50,
      returningProduction: 0.80,
      keyPlayers: ["Isaac Wilson (QB)", "Landen King (TE)", "Lander Barton (LB)", "Junior Tafuna (DT)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Southern Utah", result: "W 49-0", venue: "Home" },
        { week: 2, opponent: "vs Baylor", result: "W 23-12", venue: "Home" }
      ],
      upcomingMarquee: "at Oklahoma State, vs Arizona, vs BYU",
      projectedSosRank: 18
    },
    stats: {
      sor: 0.910,
      gameControl: 0.930,
      sos: 0.770,
      colleyMetric: 0.915,
      sam: 30.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Baylor (23-12)",
      keyLoss: "None",
      offEfficiency: 0.905,
      defEfficiency: 0.955,
      successRate: 0.510,
      finishingDrives: 4.70,
      explosivenessEpa: 0.275,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "iowa",
    name: "Iowa",
    mascot: "Hawkeyes",
    abbrev: "IOWA",
    conference: "Big Ten",
    record: { wins: 2, losses: 0 },
    apRank: 18,
    coachesRank: 20,
    sidelineRank: 18,
    bcsRank: 18,
    colors: { primary: "#000000", secondary: "#FFE100", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png",
    coaching: {
      headCoach: "Kirk Ferentz",
      offensiveSystem: "Zone Run / Heavy 12/13 Personnel / Elite Defense",
      coachingGrade: 0.90,
      tenureYears: 28
    },
    roster: {
      talentComposite: 0.865,
      blueChipRatio: 0.36,
      returningProduction: 0.83,
      keyPlayers: ["Cade McNamara / Marco Lainez (QB)", "Kaleb Johnson (RB)", "Luke Lachey (TE)", "Jay Higgins (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Illinois State", result: "W 40-0", venue: "Home" },
        { week: 2, opponent: "vs Iowa State", result: "W 19-20 (OT Win)", venue: "Home" }
      ],
      upcomingMarquee: "at Ohio State, vs Washington, vs Wisconsin",
      projectedSosRank: 19
    },
    stats: {
      sor: 0.900,
      gameControl: 0.910,
      sos: 0.775,
      colleyMetric: 0.910,
      sam: 20.5,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "vs Iowa State (20-19)",
      keyLoss: "None",
      offEfficiency: 0.840,
      defEfficiency: 0.985,
      successRate: 0.475,
      finishingDrives: 4.25,
      explosivenessEpa: 0.220,
      turnoverLuckDelta: 0.02
    }
  },
  {
    id: "michigan",
    name: "Michigan",
    mascot: "Wolverines",
    abbrev: "MICH",
    conference: "Big Ten",
    record: { wins: 1, losses: 1 },
    apRank: 19,
    coachesRank: 19,
    sidelineRank: 19,
    bcsRank: 19,
    colors: { primary: "#00274C", secondary: "#FFCB05", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/130.png",
    coaching: {
      headCoach: "Sherrone Moore",
      offensiveSystem: "Smashmouth Power Gap / Multiple TE",
      coachingGrade: 0.89,
      tenureYears: 3
    },
    roster: {
      talentComposite: 0.920,
      blueChipRatio: 0.68,
      returningProduction: 0.62,
      keyPlayers: ["Alex Orji (QB)", "Donovan Edwards (RB)", "Mason Graham (DT)", "Will Johnson (CB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Western Michigan", result: "W 35-10", venue: "Home" },
        { week: 2, opponent: "vs #24 Oklahoma", result: "W 24-20", venue: "Home" }
      ],
      upcomingMarquee: "vs USC, vs Oregon, at Ohio State",
      projectedSosRank: 12
    },
    stats: {
      sor: 0.910,
      gameControl: 0.890,
      sos: 0.880,
      colleyMetric: 0.915,
      sam: 14.5,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "vs #24 Oklahoma (24-20)",
      keyLoss: "None",
      offEfficiency: 0.875,
      defEfficiency: 0.960,
      successRate: 0.495,
      finishingDrives: 4.60,
      explosivenessEpa: 0.260,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "oregon",
    name: "Oregon",
    mascot: "Ducks",
    abbrev: "ORE",
    conference: "Big Ten",
    record: { wins: 1, losses: 1 },
    apRank: 21,
    coachesRank: 18,
    sidelineRank: 20,
    bcsRank: 20,
    colors: { primary: "#154733", secondary: "#FEE123", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png",
    coaching: {
      headCoach: "Dan Lanning",
      offensiveSystem: "High-Tempo Spread / Power Run",
      coachingGrade: 0.93,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.940,
      blueChipRatio: 0.79,
      returningProduction: 0.75,
      keyPlayers: ["Dante Moore (QB)", "Noah Whittington (RB)", "Matayo Uiagalelei (EDGE)", "Jurrion Dickey (WR)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Idaho", result: "W 24-14", venue: "Home" },
        { week: 2, opponent: "vs Boise State", result: "L 34-37", venue: "Home" }
      ],
      upcomingMarquee: "at Oregon State, vs Ohio State, at Michigan",
      projectedSosRank: 7
    },
    stats: {
      sor: 0.825,
      gameControl: 0.870,
      sos: 0.870,
      colleyMetric: 0.805,
      sam: 3.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Idaho (24-14)",
      keyLoss: "vs Boise State (34-37)",
      offEfficiency: 0.940,
      defEfficiency: 0.890,
      successRate: 0.515,
      finishingDrives: 4.80,
      explosivenessEpa: 0.310,
      turnoverLuckDelta: -0.03
    }
  },
  {
    id: "missouri",
    name: "Missouri",
    mascot: "Tigers",
    abbrev: "MIZZ",
    conference: "SEC",
    record: { wins: 2, losses: 0 },
    apRank: 20,
    coachesRank: 22,
    sidelineRank: 21,
    bcsRank: 21,
    colors: { primary: "#F1B82D", secondary: "#000000", text: "#000000" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/142.png",
    coaching: {
      headCoach: "Eliah Drinkwitz",
      offensiveSystem: "Pro-Spread Motion / Wide Zone",
      coachingGrade: 0.90,
      tenureYears: 7
    },
    roster: {
      talentComposite: 0.880,
      blueChipRatio: 0.48,
      returningProduction: 0.77,
      keyPlayers: ["Brady Cook Legacy (QB)", "Luther Burden III Legacy (WR)", "Johnny Walker Jr. (EDGE)", "Marquis Johnson (WR)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Murray State", result: "W 51-0", venue: "Home" },
        { week: 2, opponent: "vs Buffalo", result: "W 38-0", venue: "Home" }
      ],
      upcomingMarquee: "vs Boston College, at Texas A&M, vs Alabama",
      projectedSosRank: 17
    },
    stats: {
      sor: 0.900,
      gameControl: 0.975,
      sos: 0.690,
      colleyMetric: 0.910,
      sam: 34.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Buffalo (38-0)",
      keyLoss: "None",
      offEfficiency: 0.930,
      defEfficiency: 0.950,
      successRate: 0.510,
      finishingDrives: 4.85,
      explosivenessEpa: 0.300,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "oklahoma",
    name: "Oklahoma",
    mascot: "Sooners",
    abbrev: "OU",
    conference: "SEC",
    record: { wins: 1, losses: 1 },
    apRank: 24,
    coachesRank: 21,
    sidelineRank: 22,
    bcsRank: 22,
    colors: { primary: "#841617", secondary: "#FDF9D8", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/201.png",
    coaching: {
      headCoach: "Brent Venables",
      offensiveSystem: "Up-Tempo Spread / Blitz-Heavy Defense",
      coachingGrade: 0.90,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.940,
      blueChipRatio: 0.75,
      returningProduction: 0.73,
      keyPlayers: ["Jackson Arnold (QB)", "Deion Burks (WR)", "Danny Stutsman (LB)", "Billy Bowman Jr. (S)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Temple", result: "W 51-3", venue: "Home" },
        { week: 2, opponent: "at #19 Michigan", result: "L 20-24", venue: "Away" }
      ],
      upcomingMarquee: "vs Tennessee, vs Texas, at Ole Miss, at LSU",
      projectedSosRank: 5
    },
    stats: {
      sor: 0.825,
      gameControl: 0.885,
      sos: 0.890,
      colleyMetric: 0.815,
      sam: 22.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Temple (51-3)",
      keyLoss: "at #19 Michigan (20-24)",
      offEfficiency: 0.890,
      defEfficiency: 0.965,
      successRate: 0.490,
      finishingDrives: 4.45,
      explosivenessEpa: 0.285,
      turnoverLuckDelta: -0.02
    }
  },
  {
    id: "houston",
    name: "Houston",
    mascot: "Cougars",
    abbrev: "HOU",
    conference: "Big 12",
    record: { wins: 2, losses: 0 },
    apRank: 22,
    coachesRank: 23,
    sidelineRank: 23,
    bcsRank: 23,
    colors: { primary: "#C8102E", secondary: "#FFFFFF", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/248.png",
    coaching: {
      headCoach: "Willie Fritz",
      offensiveSystem: "Option-Spread / Disciplined Defense",
      coachingGrade: 0.89,
      tenureYears: 3
    },
    roster: {
      talentComposite: 0.840,
      blueChipRatio: 0.28,
      returningProduction: 0.80,
      keyPlayers: ["Donovan Smith (QB)", "Parker Jenkins (RB)", "Joseph Manjack IV (WR)", "Keith Cooper Jr. (DL)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs UNLV", result: "W 27-7", venue: "Home" },
        { week: 2, opponent: "vs Rice", result: "W 31-14", venue: "Home" }
      ],
      upcomingMarquee: "at Cincinnati, vs Iowa State, at TCU",
      projectedSosRank: 23
    },
    stats: {
      sor: 0.910,
      gameControl: 0.910,
      sos: 0.770,
      colleyMetric: 0.915,
      sam: 18.5,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Rice (31-14)",
      keyLoss: "None",
      offEfficiency: 0.865,
      defEfficiency: 0.955,
      successRate: 0.490,
      finishingDrives: 4.50,
      explosivenessEpa: 0.260,
      turnoverLuckDelta: 0.03
    }
  },
  {
    id: "louisville",
    name: "Louisville",
    mascot: "Cardinals",
    abbrev: "LOU",
    conference: "ACC",
    record: { wins: 2, losses: 0 },
    apRank: 23,
    coachesRank: 26,
    sidelineRank: 24,
    bcsRank: 24,
    colors: { primary: "#AD0000", secondary: "#000000", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
    coaching: {
      headCoach: "Jeff Brohm",
      offensiveSystem: "Aggressive Air Passing / Modern Play Action",
      coachingGrade: 0.91,
      tenureYears: 4
    },
    roster: {
      talentComposite: 0.885,
      blueChipRatio: 0.50,
      returningProduction: 0.74,
      keyPlayers: ["Pierce Clarkson (QB)", "Isaac Brown (RB)", "Ja'Corey Brooks (WR)", "Ashton Gillotte (DL)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Austin Peay", result: "W 62-0", venue: "Home" },
        { week: 2, opponent: "vs Jacksonville State", result: "W 38-14", venue: "Home" }
      ],
      upcomingMarquee: "vs Georgia Tech, at Notre Dame, vs Miami",
      projectedSosRank: 15
    },
    stats: {
      sor: 0.900,
      gameControl: 0.920,
      sos: 0.760,
      colleyMetric: 0.910,
      sam: 31.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "vs Jacksonville State (38-14)",
      keyLoss: "None",
      offEfficiency: 0.930,
      defEfficiency: 0.890,
      successRate: 0.505,
      finishingDrives: 4.80,
      explosivenessEpa: 0.315,
      turnoverLuckDelta: 0.01
    }
  },
  {
    id: "virginia",
    name: "Virginia",
    mascot: "Cavaliers",
    abbrev: "UVA",
    conference: "ACC",
    record: { wins: 2, losses: 0 },
    apRank: 25,
    coachesRank: 25,
    sidelineRank: 25,
    bcsRank: 25,
    colors: { primary: "#232D4B", secondary: "#F84C1E", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/258.png",
    coaching: {
      headCoach: "Tony Elliott",
      offensiveSystem: "Pro-Spread Multiple",
      coachingGrade: 0.87,
      tenureYears: 5
    },
    roster: {
      talentComposite: 0.850,
      blueChipRatio: 0.33,
      returningProduction: 0.81,
      keyPlayers: ["Anthony Colandrea (QB)", "Kobe Pace (RB)", "Malachi Fields (WR)", "Jonas Sanker (S)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "vs Richmond", result: "W 34-13", venue: "Home" },
        { week: 2, opponent: "at Wake Forest", result: "W 31-30", venue: "Away" }
      ],
      upcomingMarquee: "vs Maryland, at Louisville, vs North Carolina",
      projectedSosRank: 25
    },
    stats: {
      sor: 0.895,
      gameControl: 0.875,
      sos: 0.760,
      colleyMetric: 0.910,
      sam: 11.0,
      top25Wins: 0,
      top10Wins: 0,
      bestWin: "at Wake Forest (31-30)",
      keyLoss: "None",
      offEfficiency: 0.880,
      defEfficiency: 0.885,
      successRate: 0.480,
      finishingDrives: 4.55,
      explosivenessEpa: 0.275,
      turnoverLuckDelta: 0.02
    }
  },
  {
    id: "boise-state",
    name: "Boise State",
    mascot: "Broncos",
    abbrev: "BSU",
    conference: "Mountain West",
    record: { wins: 2, losses: 0 },
    apRank: 26,
    coachesRank: 24,
    sidelineRank: 26,
    bcsRank: 26,
    colors: { primary: "#0033A0", secondary: "#D64309", text: "#FFFFFF" },
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/68.png",
    coaching: {
      headCoach: "Spencer Danielson",
      offensiveSystem: "Pro-Zone Running / Play-Action Shot",
      coachingGrade: 0.89,
      tenureYears: 3
    },
    roster: {
      talentComposite: 0.835,
      blueChipRatio: 0.26,
      returningProduction: 0.84,
      keyPlayers: ["Maddux Madsen (QB)", "Sire Gaines / Breezy (RB)", "Ahmed Hassanein (DE)", "Sey Dassanayake (LB)"]
    },
    schedule2026: {
      gamesPlayed: [
        { week: 1, opponent: "at Georgia Southern", result: "W 56-45", venue: "Away" },
        { week: 2, opponent: "at #21 Oregon", result: "W 37-34", venue: "Away" }
      ],
      upcomingMarquee: "vs Washington State, at UNLV",
      projectedSosRank: 24
    },
    stats: {
      sor: 0.940,
      gameControl: 0.915,
      sos: 0.870,
      colleyMetric: 0.945,
      sam: 7.0,
      top25Wins: 1,
      top10Wins: 0,
      bestWin: "at #21 Oregon (37-34)",
      keyLoss: "None",
      offEfficiency: 0.960,
      defEfficiency: 0.845,
      successRate: 0.530,
      finishingDrives: 5.15,
      explosivenessEpa: 0.340,
      turnoverLuckDelta: 0.01
    }
  }
];
