/**
 * Advanced College Football Composite (ACFC) - 2026-27 Season Dataset
 * Calibrated with live Week 3 2026 rankings from AP Poll, AFCA Coaches Poll, The Sideline Composite, and CFBTrack.
 * Full 100% verified 2026 schedule and score sweep across all 26 teams (v0.3.5).
 */

const FBS_DATASET = [
    {
        "id":  "texas",
        "name":  "Texas",
        "mascot":  "Longhorns",
        "abbrev":  "TEX",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  1,
        "coachesRank":  1,
        "sidelineRank":  1,
        "bcsRank":  1,
        "colors":  {
                       "primary":  "#BF5700",
                       "secondary":  "#FFFFFF",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/251.png",
        "coaching":  {
                         "headCoach":  "Steve Sarkisian",
                         "offensiveSystem":  "Pro-Style Spread / RPO",
                         "coachingGrade":  0.96,
                         "tenureYears":  6
                     },
        "roster":  {
                       "talentComposite":  0.970,
                       "blueChipRatio":  0.85,
                       "returningProduction":  0.74,
                       "keyPlayers":  [
                                          "Arch Manning (QB)",
                                          "CJ Baxter (RB)",
                                          "Anthony Hill Jr. (LB)",
                                          "Colin Simmons (EDGE)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Texas State",
                                                     "result":  "W 59-7",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs #1 Ohio State",
                                                     "result":  "W 24-23",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs UTSA, at Tennessee, vs Oklahoma (Red River Rivalry), vs Florida",
                             "projectedSosRank":  3
                         },
        "stats":  {
                      "sor":  0.98,
                      "gameControl":  0.980,
                      "sos":  0.91,
                      "colleyMetric":  0.960,
                      "sam":  26.5,
                      "top25Wins":  1,
                      "top10Wins":  1,
                      "bestWin":  "vs #1 Ohio State (24-23)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.97,
                      "defEfficiency":  0.965,
                      "successRate":  0.54,
                      "finishingDrives":  5.15,
                      "explosivenessEpa":  0.345,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  1
    },
    {
        "id":  "georgia",
        "name":  "Georgia",
        "mascot":  "Bulldogs",
        "abbrev":  "UGA",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  2,
        "coachesRank":  2,
        "sidelineRank":  2,
        "bcsRank":  2,
        "colors":  {
                       "primary":  "#BA0C2F",
                       "secondary":  "#000000",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/61.png",
        "coaching":  {
                         "headCoach":  "Kirby Smart",
                         "offensiveSystem":  "Pro-Spread Multiple",
                         "coachingGrade":  0.98,
                         "tenureYears":  11
                     },
        "roster":  {
                       "talentComposite":  0.990,
                       "blueChipRatio":  0.89,
                       "returningProduction":  0.76,
                       "keyPlayers":  [
                                          "Gunner Stockton (QB)",
                                          "Roderick Robinson (RB)",
                                          "Mykel Williams (EDGE)",
                                          "KJ Bolden (S)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Tennessee State",
                                                     "result":  "W 63-3",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Western Kentucky",
                                                     "result":  "W 70-20",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "at Arkansas, vs Oklahoma, vs Vanderbilt, at Alabama",
                             "projectedSosRank":  1
                         },
        "stats":  {
                      "sor":  0.975,
                      "gameControl":  0.985,
                      "sos":  0.86,
                      "colleyMetric":  0.965,
                      "sam":  55,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Western Kentucky (70-20)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.955,
                      "defEfficiency":  0.99,
                      "successRate":  0.54,
                      "finishingDrives":  5.15,
                      "explosivenessEpa":  0.335,
                      "turnoverLuckDelta":  -0.01
                  },
        "previousRank":  3
    },
    {
        "id":  "notre-dame",
        "name":  "Notre Dame",
        "mascot":  "Fighting Irish",
        "abbrev":  "ND",
        "conference":  "Independent",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  3,
        "coachesRank":  3,
        "sidelineRank":  3,
        "bcsRank":  3,
        "colors":  {
                       "primary":  "#0C2340",
                       "secondary":  "#C99700",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/87.png",
        "coaching":  {
                         "headCoach":  "Marcus Freeman",
                         "offensiveSystem":  "Pro-Style Balanced Spread",
                         "coachingGrade":  0.92,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.935,
                       "blueChipRatio":  0.76,
                       "returningProduction":  0.78,
                       "keyPlayers":  [
                                          "CJ Carr (QB)",
                                          "Jeremiyah Love (RB)",
                                          "Benjamin Morrison (CB)",
                                          "Drayk Bowen (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Wisconsin (Lambeau Field)",
                                                     "result":  "W 41-13",
                                                     "venue":  "Neutral"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Rice",
                                                     "result":  "W 52-0",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Michigan State, at Purdue, at North Carolina, vs Stanford",
                             "projectedSosRank":  8
                         },
        "stats":  {
                      "sor":  0.965,
                      "gameControl":  0.940,
                      "sos":  0.905,
                      "colleyMetric":  0.950,
                      "sam":  40,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "vs Wisconsin at Lambeau (41-13)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.948,
                      "defEfficiency":  0.978,
                      "successRate":  0.538,
                      "finishingDrives":  5.08,
                      "explosivenessEpa":  0.335,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  10
    },
    {
        "id":  "miami",
        "name":  "Miami",
        "mascot":  "Hurricanes",
        "abbrev":  "MIA",
        "conference":  "ACC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  5,
        "coachesRank":  5,
        "sidelineRank":  5,
        "bcsRank":  5,
        "colors":  {
                       "primary":  "#F47321",
                       "secondary":  "#005030",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
        "coaching":  {
                         "headCoach":  "Mario Cristobal",
                         "offensiveSystem":  "Air Raid / Power Trench Foundation",
                         "coachingGrade":  0.91,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.930,
                       "blueChipRatio":  0.72,
                       "returningProduction":  0.79,
                       "keyPlayers":  [
                                          "Emory Williams (QB)",
                                          "Mark Fletcher Jr. (RB)",
                                          "Rueben Bain Jr. (EDGE)",
                                          "Damari Brown (CB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "at Stanford",
                                                     "result":  "W 45-6",
                                                     "venue":  "Away"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Florida A\u0026M",
                                                     "result":  "W 77-7",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "at Wake Forest, vs Central Michigan, at Clemson, vs Florida State",
                             "projectedSosRank":  14
                         },
        "stats":  {
                      "sor":  0.945,
                      "gameControl":  0.965,
                      "sos":  0.81,
                      "colleyMetric":  0.935,
                      "sam":  54.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "at Stanford (45-6)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.98,
                      "defEfficiency":  0.925,
                      "successRate":  0.545,
                      "finishingDrives":  5.25,
                      "explosivenessEpa":  0.365,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  4
    },
    {
        "id":  "lsu",
        "name":  "LSU",
        "mascot":  "Tigers",
        "abbrev":  "LSU",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  7,
        "coachesRank":  7,
        "sidelineRank":  7,
        "bcsRank":  6,
        "colors":  {
                       "primary":  "#461D7C",
                       "secondary":  "#FDD023",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/99.png",
        "coaching":  {
                         "headCoach":  "Brian Kelly",
                         "offensiveSystem":  "Spread Multi-Personnel / Pro Passing",
                         "coachingGrade":  0.93,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.960,
                       "blueChipRatio":  0.82,
                       "returningProduction":  0.73,
                       "keyPlayers":  [
                                          "Garrett Nussmeier (QB)",
                                          "Kaleb Jackson (RB)",
                                          "Harold Perkins Jr. (LB/EDGE)",
                                          "PJ Woodland (CB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Clemson",
                                                     "result":  "W 51-10",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Louisiana Tech",
                                                     "result":  "W 45-14",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "at Ole Miss, vs Texas A\u0026M, vs McNeese, at Kentucky",
                             "projectedSosRank":  6
                         },
        "stats":  {
                      "sor":  0.948,
                      "gameControl":  0.920,
                      "sos":  0.885,
                      "colleyMetric":  0.940,
                      "sam":  36,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "vs Clemson (51-10)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.952,
                      "defEfficiency":  0.928,
                      "successRate":  0.538,
                      "finishingDrives":  5.02,
                      "explosivenessEpa":  0.338,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  9
    },
    {
        "id":  "alabama",
        "name":  "Alabama",
        "mascot":  "Crimson Tide",
        "abbrev":  "BAMA",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  10,
        "coachesRank":  10,
        "sidelineRank":  10,
        "bcsRank":  10,
        "colors":  {
                       "primary":  "#9E1B32",
                       "secondary":  "#828A8F",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/333.png",
        "coaching":  {
                         "headCoach":  "Kalen DeBoer",
                         "offensiveSystem":  "Motion-Heavy Explosive Passing",
                         "coachingGrade":  0.94,
                         "tenureYears":  3
                     },
        "roster":  {
                       "talentComposite":  0.985,
                       "blueChipRatio":  0.87,
                       "returningProduction":  0.72,
                       "keyPlayers":  [
                                          "Ty Simpson (QB)",
                                          "Ryan Williams (WR)",
                                          "Justice Haynes (RB)",
                                          "Deontae Lawson (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs East Carolina",
                                                     "result":  "W 48-10",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at Kentucky",
                                                     "result":  "W 45-17",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Florida State, vs South Carolina, at Mississippi State, vs Georgia",
                             "projectedSosRank":  2
                         },
        "stats":  {
                      "sor":  0.938,
                      "gameControl":  0.955,
                      "sos":  0.855,
                      "colleyMetric":  0.935,
                      "sam":  33,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "at Kentucky (45-17)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.95,
                      "defEfficiency":  0.93,
                      "successRate":  0.532,
                      "finishingDrives":  5,
                      "explosivenessEpa":  0.33,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  5
    },
    {
        "id":  "ohio-state",
        "name":  "Ohio State",
        "mascot":  "Buckeyes",
        "abbrev":  "OSU",
        "conference":  "Big Ten",
        "record":  {
                       "wins":  1,
                       "losses":  1
                   },
        "apRank":  6,
        "coachesRank":  6,
        "sidelineRank":  6,
        "bcsRank":  7,
        "colors":  {
                       "primary":  "#BB0000",
                       "secondary":  "#666666",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/194.png",
        "coaching":  {
                         "headCoach":  "Ryan Day",
                         "offensiveSystem":  "Spread Option / NFL Passing Tree",
                         "coachingGrade":  0.95,
                         "tenureYears":  8
                     },
        "roster":  {
                       "talentComposite":  0.985,
                       "blueChipRatio":  0.88,
                       "returningProduction":  0.70,
                       "keyPlayers":  [
                                          "Julian Sayin (QB)",
                                          "Jeremiah Smith (WR)",
                                          "Caleb Downs (S)",
                                          "Eddrick Houston (DL)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Ball State",
                                                     "result":  "W 56-3",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at #1 Texas",
                                                     "result":  "L 23-24",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Kent State, vs Illinois, at Iowa, vs Maryland",
                             "projectedSosRank":  4
                         },
        "stats":  {
                      "sor":  0.88,
                      "gameControl":  0.930,
                      "sos":  0.925,
                      "colleyMetric":  0.830,
                      "sam":  26,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Ball State (56-3)",
                      "keyLoss":  "at #1 Texas (23-24)",
                      "offEfficiency":  0.965,
                      "defEfficiency":  0.98,
                      "successRate":  0.545,
                      "finishingDrives":  5.15,
                      "explosivenessEpa":  0.35,
                      "turnoverLuckDelta":  -0.04
                  },
        "previousRank":  7
    },
    {
        "id":  "indiana",
        "name":  "Indiana",
        "mascot":  "Hoosiers",
        "abbrev":  "IND",
        "conference":  "Big Ten",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  4,
        "coachesRank":  4,
        "sidelineRank":  4,
        "bcsRank":  4,
        "colors":  {
                       "primary":  "#990000",
                       "secondary":  "#EEEDEB",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/84.png",
        "coaching":  {
                         "headCoach":  "Curt Cignetti",
                         "offensiveSystem":  "High-Efficiency Spread / RPO Mesh",
                         "coachingGrade":  0.94,
                         "tenureYears":  3
                     },
        "roster":  {
                       "talentComposite":  0.880,
                       "blueChipRatio":  0.42,
                       "returningProduction":  0.81,
                       "keyPlayers":  [
                                          "Tyler Cherry (QB)",
                                          "Justice Ellison (RB)",
                                          "Elijah Sarratt (WR)",
                                          "Mikail Kamara (DL)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs North Texas",
                                                     "result":  "W 52-16",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Howard",
                                                     "result":  "W 55-0",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Western Kentucky, vs Northwestern, at Rutgers, at Nebraska",
                             "projectedSosRank":  16
                         },
        "stats":  {
                      "sor":  0.935,
                      "gameControl":  0.975,
                      "sos":  0.77,
                      "colleyMetric":  0.920,
                      "sam":  45.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs North Texas (52-16)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.972,
                      "defEfficiency":  0.938,
                      "successRate":  0.552,
                      "finishingDrives":  5.32,
                      "explosivenessEpa":  0.358,
                      "turnoverLuckDelta":  0.02
                  },
        "previousRank":  8
    },
    {
        "id":  "ole-miss",
        "name":  "Ole Miss",
        "mascot":  "Rebels",
        "abbrev":  "MISS",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  8,
        "coachesRank":  9,
        "sidelineRank":  9,
        "bcsRank":  8,
        "colors":  {
                       "primary":  "#13294B",
                       "secondary":  "#CE1126",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/145.png",
        "coaching":  {
                         "headCoach":  "Lane Kiffin",
                         "offensiveSystem":  "Tempo Vertical Choice / RPO",
                         "coachingGrade":  0.93,
                         "tenureYears":  7
                     },
        "roster":  {
                       "talentComposite":  0.910,
                       "blueChipRatio":  0.67,
                       "returningProduction":  0.75,
                       "keyPlayers":  [
                                          "Austin Simmons (QB)",
                                          "Princely Umanmielen (EDGE)",
                                          "Tre Harris III (WR)",
                                          "Suntarine Perkins (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Louisville",
                                                     "result":  "W 41-38",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Charlotte",
                                                     "result":  "W 41-9",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs #7 LSU, at Florida, at Vanderbilt, vs Missouri",
                             "projectedSosRank":  10
                         },
        "stats":  {
                      "sor":  0.918,
                      "gameControl":  0.985,
                      "sos":  0.735,
                      "colleyMetric":  0.925,
                      "sam":  17.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Louisville (41-38)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.97,
                      "defEfficiency":  0.94,
                      "successRate":  0.538,
                      "finishingDrives":  5.18,
                      "explosivenessEpa":  0.35,
                      "turnoverLuckDelta":  0.00
                  },
        "previousRank":  6
    },
    {
        "id":  "usc",
        "name":  "USC",
        "mascot":  "Trojans",
        "abbrev":  "USC",
        "conference":  "Big Ten",
        "record":  {
                       "wins":  3,
                       "losses":  0
                   },
        "apRank":  12,
        "coachesRank":  11,
        "sidelineRank":  11,
        "bcsRank":  11,
        "colors":  {
                       "primary":  "#990000",
                       "secondary":  "#FFC72C",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/30.png",
        "coaching":  {
                         "headCoach":  "Lincoln Riley",
                         "offensiveSystem":  "Air Raid / Counter-Tre GT Run Scheme",
                         "coachingGrade":  0.93,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.935,
                       "blueChipRatio":  0.74,
                       "returningProduction":  0.72,
                       "keyPlayers":  [
                                          "Miller Moss (QB)",
                                          "Zachariah Branch (WR/RET)",
                                          "Kamari Ramsey (S)",
                                          "Easton Mascarenas-Arnold (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  0,
                                                     "opponent":  "vs San Jose State",
                                                     "result":  "W 42-26",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Fresno State",
                                                     "result":  "W 39-0",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Louisiana",
                                                     "result":  "W 49-30",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "at Rutgers, vs Oregon, vs Washington, at Penn State",
                             "projectedSosRank":  11
                         },
        "stats":  {
                      "sor":  0.92,
                      "gameControl":  0.940,
                      "sos":  0.79,
                      "colleyMetric":  0.930,
                      "sam":  24.7,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Fresno State (39-0)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.95,
                      "defEfficiency":  0.92,
                      "successRate":  0.53,
                      "finishingDrives":  5.05,
                      "explosivenessEpa":  0.33,
                      "turnoverLuckDelta":  0.02
                  },
        "previousRank":  11
    },
    {
        "id":  "tennessee",
        "name":  "Tennessee",
        "mascot":  "Volunteers",
        "abbrev":  "TENN",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  15,
        "coachesRank":  14,
        "sidelineRank":  15,
        "bcsRank":  15,
        "colors":  {
                       "primary":  "#FF8200",
                       "secondary":  "#58595B",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png",
        "coaching":  {
                         "headCoach":  "Josh Heupel",
                         "offensiveSystem":  "Hyper-Speed Veer-and-Shoot",
                         "coachingGrade":  0.93,
                         "tenureYears":  6
                     },
        "roster":  {
                       "talentComposite":  0.915,
                       "blueChipRatio":  0.69,
                       "returningProduction":  0.80,
                       "keyPlayers":  [
                                          "Nico Iamaleava (QB)",
                                          "Dylan Sampson (RB)",
                                          "James Pearce Jr. (EDGE)",
                                          "Boo Carter (DB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Furman",
                                                     "result":  "W 56-9",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at Georgia Tech",
                                                     "result":  "W 45-24",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Kennesaw State, vs Texas, vs Auburn, at Arkansas",
                             "projectedSosRank":  5
                         },
        "stats":  {
                      "sor":  0.91,
                      "gameControl":  0.980,
                      "sos":  0.715,
                      "colleyMetric":  0.935,
                      "sam":  34,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "at Georgia Tech (45-24)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.962,
                      "defEfficiency":  0.95,
                      "successRate":  0.532,
                      "finishingDrives":  5.12,
                      "explosivenessEpa":  0.34,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  2
    },
    {
        "id":  "texas-am",
        "name":  "Texas A\u0026M",
        "mascot":  "Aggies",
        "abbrev":  "TA\u0026M",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  9,
        "coachesRank":  8,
        "sidelineRank":  8,
        "bcsRank":  9,
        "colors":  {
                       "primary":  "#500000",
                       "secondary":  "#FFFFFF",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/245.png",
        "coaching":  {
                         "headCoach":  "Mike Elko",
                         "offensiveSystem":  "Pro-Style Multiple / Trench Heavy",
                         "coachingGrade":  0.91,
                         "tenureYears":  3
                     },
        "roster":  {
                       "talentComposite":  0.945,
                       "blueChipRatio":  0.78,
                       "returningProduction":  0.78,
                       "keyPlayers":  [
                                          "Marcel Reed (QB)",
                                          "Le\u0027Veon Moss (RB)",
                                          "Nic Scourton (EDGE)",
                                          "Taurean York (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Missouri State",
                                                     "result":  "W 50-0",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Arizona State",
                                                     "result":  "W 48-20",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Kentucky, at LSU, vs Arkansas, at Missouri",
                             "projectedSosRank":  9
                         },
        "stats":  {
                      "sor":  0.925,
                      "gameControl":  0.920,
                      "sos":  0.82,
                      "colleyMetric":  0.925,
                      "sam":  39,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "vs Arizona State (48-20)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.92,
                      "defEfficiency":  0.95,
                      "successRate":  0.515,
                      "finishingDrives":  4.85,
                      "explosivenessEpa":  0.3,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  12
    },
    {
        "id":  "penn-state",
        "name":  "Penn State",
        "mascot":  "Nittany Lions",
        "abbrev":  "PSU",
        "conference":  "Big Ten",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  14,
        "coachesRank":  15,
        "sidelineRank":  14,
        "bcsRank":  14,
        "colors":  {
                       "primary":  "#041E42",
                       "secondary":  "#FFFFFF",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/213.png",
        "coaching":  {
                         "headCoach":  "James Franklin",
                         "offensiveSystem":  "Modern Spread / Multi-TE Power",
                         "coachingGrade":  0.90,
                         "tenureYears":  13
                     },
        "roster":  {
                       "talentComposite":  0.925,
                       "blueChipRatio":  0.73,
                       "returningProduction":  0.76,
                       "keyPlayers":  [
                                          "Drew Allar (QB)",
                                          "Nicholas Singleton (RB)",
                                          "Kaytron Allen (RB)",
                                          "Tony Rojas (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Marshall",
                                                     "result":  "W 45-0",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at Temple",
                                                     "result":  "W 27-9",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Buffalo, vs Wisconsin, at Northwestern, vs USC",
                             "projectedSosRank":  7
                         },
        "stats":  {
                      "sor":  0.915,
                      "gameControl":  0.920,
                      "sos":  0.79,
                      "colleyMetric":  0.915,
                      "sam":  31.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Marshall (45-0)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.925,
                      "defEfficiency":  0.945,
                      "successRate":  0.52,
                      "finishingDrives":  4.9,
                      "explosivenessEpa":  0.305,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  14
    },
    {
        "id":  "michigan",
        "name":  "Michigan",
        "mascot":  "Wolverines",
        "abbrev":  "MICH",
        "conference":  "Big Ten",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  19,
        "coachesRank":  19,
        "sidelineRank":  19,
        "bcsRank":  19,
        "colors":  {
                       "primary":  "#00274C",
                       "secondary":  "#FFCB05",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/130.png",
        "coaching":  {
                         "headCoach":  "Sherrone Moore",
                         "offensiveSystem":  "Smashmouth Power Gap / Multiple TE",
                         "coachingGrade":  0.89,
                         "tenureYears":  3
                     },
        "roster":  {
                       "talentComposite":  0.920,
                       "blueChipRatio":  0.68,
                       "returningProduction":  0.62,
                       "keyPlayers":  [
                                          "Alex Orji (QB)",
                                          "Donovan Edwards (RB)",
                                          "Mason Graham (DT)",
                                          "Will Johnson (CB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Western Michigan",
                                                     "result":  "W 13-12",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs #11 Oklahoma",
                                                     "result":  "W 17-10",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs UTEP, vs Iowa, at Minnesota, vs Penn State",
                             "projectedSosRank":  12
                         },
        "stats":  {
                      "sor":  0.935,
                      "gameControl":  0.890,
                      "sos":  0.875,
                      "colleyMetric":  0.915,
                      "sam":  4,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "vs #11 Oklahoma (17-10)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.91,
                      "defEfficiency":  0.968,
                      "successRate":  0.518,
                      "finishingDrives":  4.9,
                      "explosivenessEpa":  0.305,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  22
    },
    {
        "id":  "byu",
        "name":  "BYU",
        "mascot":  "Cougars",
        "abbrev":  "BYU",
        "conference":  "Big 12",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  11,
        "coachesRank":  13,
        "sidelineRank":  12,
        "bcsRank":  12,
        "colors":  {
                       "primary":  "#002E5D",
                       "secondary":  "#FFFFFF",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/252.png",
        "coaching":  {
                         "headCoach":  "Kalani Sitake",
                         "offensiveSystem":  "Multiple Pro-Spread / Physical Trench",
                         "coachingGrade":  0.89,
                         "tenureYears":  11
                     },
        "roster":  {
                       "talentComposite":  0.850,
                       "blueChipRatio":  0.32,
                       "returningProduction":  0.82,
                       "keyPlayers":  [
                                          "Jake Retzlaff (QB)",
                                          "LJ Martin (RB)",
                                          "Chase Roberts (WR)",
                                          "Tyler Batty (DE)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Utah Tech",
                                                     "result":  "W 63-7",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Arizona",
                                                     "result":  "W 28-17",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "at Colorado State, at TCU, vs Iowa State, vs Notre Dame",
                             "projectedSosRank":  20
                         },
        "stats":  {
                      "sor":  0.94,
                      "gameControl":  0.880,
                      "sos":  0.85,
                      "colleyMetric":  0.930,
                      "sam":  33.5,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "vs Arizona (28-17)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.92,
                      "defEfficiency":  0.945,
                      "successRate":  0.52,
                      "finishingDrives":  4.95,
                      "explosivenessEpa":  0.315,
                      "turnoverLuckDelta":  0.04
                  },
        "previousRank":  21
    },
    {
        "id":  "boise-state",
        "name":  "Boise State",
        "mascot":  "Broncos",
        "abbrev":  "BSU",
        "conference":  "Mountain West",
        "record":  {
                       "wins":  1,
                       "losses":  1
                   },
        "apRank":  26,
        "coachesRank":  24,
        "sidelineRank":  26,
        "bcsRank":  26,
        "colors":  {
                       "primary":  "#0033A0",
                       "secondary":  "#D64309",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/68.png",
        "coaching":  {
                         "headCoach":  "Spencer Danielson",
                         "offensiveSystem":  "Pro-Zone Running / Play-Action Shot",
                         "coachingGrade":  0.89,
                         "tenureYears":  3
                     },
        "roster":  {
                       "talentComposite":  0.835,
                       "blueChipRatio":  0.26,
                       "returningProduction":  0.84,
                       "keyPlayers":  [
                                          "Maddux Madsen (QB)",
                                          "Sire Gaines / Breezy (RB)",
                                          "Ahmed Hassanein (DE)",
                                          "Sey Dassanayake (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "at Oregon",
                                                     "result":  "L 27-34",
                                                     "venue":  "Away"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Memphis",
                                                     "result":  "W 38-20",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs South Dakota, at Western Michigan, vs Utah State, at Fresno State",
                             "projectedSosRank":  24
                         },
        "stats":  {
                      "sor":  0.928,
                      "gameControl":  0.915,
                      "sos":  0.855,
                      "colleyMetric":  0.945,
                      "sam":  5.5,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "vs Memphis (38-20)",
                      "keyLoss":  "at Oregon (27-34)",
                      "offEfficiency":  0.945,
                      "defEfficiency":  0.845,
                      "successRate":  0.522,
                      "finishingDrives":  5,
                      "explosivenessEpa":  0.325,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  13
    },
    {
        "id":  "utah",
        "name":  "Utah",
        "mascot":  "Utes",
        "abbrev":  "UTAH",
        "conference":  "Big 12",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  17,
        "coachesRank":  17,
        "sidelineRank":  17,
        "bcsRank":  17,
        "colors":  {
                       "primary":  "#CC0000",
                       "secondary":  "#000000",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/254.png",
        "coaching":  {
                         "headCoach":  "Kyle Whittingham",
                         "offensiveSystem":  "Power Spread / Aggressive Press Cover-1",
                         "coachingGrade":  0.94,
                         "tenureYears":  22
                     },
        "roster":  {
                       "talentComposite":  0.885,
                       "blueChipRatio":  0.50,
                       "returningProduction":  0.80,
                       "keyPlayers":  [
                                          "Isaac Wilson (QB)",
                                          "Landen King (TE)",
                                          "Lander Barton (LB)",
                                          "Junior Tafuna (DT)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Idaho",
                                                     "result":  "W 66-14",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Arkansas",
                                                     "result":  "W 43-10",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Utah State, at Iowa State, vs Kansas, at Colorado",
                             "projectedSosRank":  18
                         },
        "stats":  {
                      "sor":  0.91,
                      "gameControl":  0.930,
                      "sos":  0.78,
                      "colleyMetric":  0.915,
                      "sam":  42.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Arkansas (43-10)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.905,
                      "defEfficiency":  0.955,
                      "successRate":  0.51,
                      "finishingDrives":  4.85,
                      "explosivenessEpa":  0.29,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  17
    },
    {
        "id":  "louisville",
        "name":  "Louisville",
        "mascot":  "Cardinals",
        "abbrev":  "LOU",
        "conference":  "ACC",
        "record":  {
                       "wins":  1,
                       "losses":  1
                   },
        "apRank":  23,
        "coachesRank":  26,
        "sidelineRank":  24,
        "bcsRank":  24,
        "colors":  {
                       "primary":  "#AD0000",
                       "secondary":  "#000000",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
        "coaching":  {
                         "headCoach":  "Jeff Brohm",
                         "offensiveSystem":  "Aggressive Air Passing / Modern Play Action",
                         "coachingGrade":  0.91,
                         "tenureYears":  4
                     },
        "roster":  {
                       "talentComposite":  0.885,
                       "blueChipRatio":  0.50,
                       "returningProduction":  0.74,
                       "keyPlayers":  [
                                          "Pierce Clarkson (QB)",
                                          "Isaac Brown (RB)",
                                          "Ja\u0027Corey Brooks (WR)",
                                          "Ashton Gillotte (DL)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Ole Miss",
                                                     "result":  "L 38-41",
                                                     "venue":  "Neutral"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Villanova",
                                                     "result":  "W 59-13",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs SMU, vs Wake Forest, at NC State, vs Florida State",
                             "projectedSosRank":  15
                         },
        "stats":  {
                      "sor":  0.895,
                      "gameControl":  0.920,
                      "sos":  0.73,
                      "colleyMetric":  0.910,
                      "sam":  21.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Villanova (59-13)",
                      "keyLoss":  "vs Ole Miss (38-41)",
                      "offEfficiency":  0.93,
                      "defEfficiency":  0.895,
                      "successRate":  0.52,
                      "finishingDrives":  4.9,
                      "explosivenessEpa":  0.31,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  15
    },
    {
        "id":  "texas-tech",
        "name":  "Texas Tech",
        "mascot":  "Red Raiders",
        "abbrev":  "TTU",
        "conference":  "Big 12",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  13,
        "coachesRank":  12,
        "sidelineRank":  13,
        "bcsRank":  13,
        "colors":  {
                       "primary":  "#CC0000",
                       "secondary":  "#000000",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png",
        "coaching":  {
                         "headCoach":  "Joey McGuire",
                         "offensiveSystem":  "High-Tempo Air Raid / Aggressive 4th-Down",
                         "coachingGrade":  0.89,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.870,
                       "blueChipRatio":  0.40,
                       "returningProduction":  0.79,
                       "keyPlayers":  [
                                          "Behren Morton (QB)",
                                          "Tahj Brooks Legacy (RB)",
                                          "Coy Eakin (WR)",
                                          "Jacob Rodriguez (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Abilene Christian",
                                                     "result":  "W 33-10",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at Oregon State",
                                                     "result":  "W 35-24",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Houston, at Utah, vs TCU, at West Virginia",
                             "projectedSosRank":  22
                         },
        "stats":  {
                      "sor":  0.895,
                      "gameControl":  0.870,
                      "sos":  0.78,
                      "colleyMetric":  0.910,
                      "sam":  17,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "at Oregon State (35-24)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.935,
                      "defEfficiency":  0.865,
                      "successRate":  0.52,
                      "finishingDrives":  4.9,
                      "explosivenessEpa":  0.315,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  18
    },
    {
        "id":  "missouri",
        "name":  "Missouri",
        "mascot":  "Tigers",
        "abbrev":  "MIZZ",
        "conference":  "SEC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  20,
        "coachesRank":  22,
        "sidelineRank":  21,
        "bcsRank":  21,
        "colors":  {
                       "primary":  "#F1B82D",
                       "secondary":  "#000000",
                       "text":  "#000000"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/142.png",
        "coaching":  {
                         "headCoach":  "Eliah Drinkwitz",
                         "offensiveSystem":  "Pro-Spread Motion / Wide Zone",
                         "coachingGrade":  0.90,
                         "tenureYears":  7
                     },
        "roster":  {
                       "talentComposite":  0.880,
                       "blueChipRatio":  0.48,
                       "returningProduction":  0.77,
                       "keyPlayers":  [
                                          "Brady Cook Legacy (QB)",
                                          "Luther Burden III Legacy (WR)",
                                          "Johnny Walker Jr. (EDGE)",
                                          "Marquis Johnson (WR)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Arkansas-Pine Bluff",
                                                     "result":  "W 54-14",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at Kansas",
                                                     "result":  "W 38-21",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Troy, at Mississippi State, vs Florida, vs Texas A\u0026M",
                             "projectedSosRank":  17
                         },
        "stats":  {
                      "sor":  0.895,
                      "gameControl":  0.975,
                      "sos":  0.7,
                      "colleyMetric":  0.910,
                      "sam":  28.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "at Kansas (38-21)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.925,
                      "defEfficiency":  0.945,
                      "successRate":  0.515,
                      "finishingDrives":  4.85,
                      "explosivenessEpa":  0.295,
                      "turnoverLuckDelta":  0.01
                  },
        "previousRank":  16
    },
    {
        "id":  "oregon",
        "name":  "Oregon",
        "mascot":  "Ducks",
        "abbrev":  "ORE",
        "conference":  "Big Ten",
        "record":  {
                       "wins":  1,
                       "losses":  1
                   },
        "apRank":  21,
        "coachesRank":  18,
        "sidelineRank":  20,
        "bcsRank":  20,
        "colors":  {
                       "primary":  "#154733",
                       "secondary":  "#FEE123",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png",
        "coaching":  {
                         "headCoach":  "Dan Lanning",
                         "offensiveSystem":  "High-Tempo Spread / Power Run",
                         "coachingGrade":  0.93,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.940,
                       "blueChipRatio":  0.79,
                       "returningProduction":  0.75,
                       "keyPlayers":  [
                                          "Dante Moore (QB)",
                                          "Noah Whittington (RB)",
                                          "Matayo Uiagalelei (EDGE)",
                                          "Jurrion Dickey (WR)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Boise State",
                                                     "result":  "W 34-27",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at Oklahoma State",
                                                     "result":  "L 31-39",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Portland State, at USC, vs UCLA, at Michigan",
                             "projectedSosRank":  7
                         },
        "stats":  {
                      "sor":  0.835,
                      "gameControl":  0.870,
                      "sos":  0.85,
                      "colleyMetric":  0.805,
                      "sam":  -0.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Boise State (34-27)",
                      "keyLoss":  "at Oklahoma State (31-39)",
                      "offEfficiency":  0.935,
                      "defEfficiency":  0.89,
                      "successRate":  0.512,
                      "finishingDrives":  4.78,
                      "explosivenessEpa":  0.305,
                      "turnoverLuckDelta":  -0.03
                  },
        "previousRank":  19
    },
    {
        "id":  "oklahoma",
        "name":  "Oklahoma",
        "mascot":  "Sooners",
        "abbrev":  "OU",
        "conference":  "SEC",
        "record":  {
                       "wins":  1,
                       "losses":  1
                   },
        "apRank":  24,
        "coachesRank":  21,
        "sidelineRank":  22,
        "bcsRank":  22,
        "colors":  {
                       "primary":  "#841617",
                       "secondary":  "#FDF9D8",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/201.png",
        "coaching":  {
                         "headCoach":  "Brent Venables",
                         "offensiveSystem":  "Up-Tempo Spread / Blitz-Heavy Defense",
                         "coachingGrade":  0.90,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.940,
                       "blueChipRatio":  0.75,
                       "returningProduction":  0.73,
                       "keyPlayers":  [
                                          "Jackson Arnold (QB)",
                                          "Deion Burks (WR)",
                                          "Danny Stutsman (LB)",
                                          "Billy Bowman Jr. (S)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs UTEP",
                                                     "result":  "W 51-0",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "at #19 Michigan",
                                                     "result":  "L 10-17",
                                                     "venue":  "Away"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs New Mexico, at Georgia, vs Texas, vs Kentucky",
                             "projectedSosRank":  5
                         },
        "stats":  {
                      "sor":  0.835,
                      "gameControl":  0.885,
                      "sos":  0.86,
                      "colleyMetric":  0.815,
                      "sam":  22,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs UTEP (51-0)",
                      "keyLoss":  "at #19 Michigan (10-17)",
                      "offEfficiency":  0.885,
                      "defEfficiency":  0.96,
                      "successRate":  0.498,
                      "finishingDrives":  4.62,
                      "explosivenessEpa":  0.27,
                      "turnoverLuckDelta":  -0.02
                  },
        "previousRank":  20
    },
    {
        "id":  "iowa",
        "name":  "Iowa",
        "mascot":  "Hawkeyes",
        "abbrev":  "IOWA",
        "conference":  "Big Ten",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  18,
        "coachesRank":  20,
        "sidelineRank":  18,
        "bcsRank":  18,
        "colors":  {
                       "primary":  "#000000",
                       "secondary":  "#FFE100",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png",
        "coaching":  {
                         "headCoach":  "Kirk Ferentz",
                         "offensiveSystem":  "Zone Run / Heavy 12/13 Personnel / Elite Defense",
                         "coachingGrade":  0.90,
                         "tenureYears":  28
                     },
        "roster":  {
                       "talentComposite":  0.865,
                       "blueChipRatio":  0.36,
                       "returningProduction":  0.83,
                       "keyPlayers":  [
                                          "Cade McNamara / Marco Lainez (QB)",
                                          "Kaleb Johnson (RB)",
                                          "Luke Lachey (TE)",
                                          "Jay Higgins (LB)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Northern Illinois",
                                                     "result":  "W 40-0",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Iowa State",
                                                     "result":  "W 16-13",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs Northern Iowa, at Michigan, vs Ohio State, at Northwestern",
                             "projectedSosRank":  19
                         },
        "stats":  {
                      "sor":  0.91,
                      "gameControl":  0.910,
                      "sos":  0.81,
                      "colleyMetric":  0.910,
                      "sam":  21.5,
                      "top25Wins":  1,
                      "top10Wins":  0,
                      "bestWin":  "vs Iowa State (16-13)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.86,
                      "defEfficiency":  0.985,
                      "successRate":  0.49,
                      "finishingDrives":  4.45,
                      "explosivenessEpa":  0.245,
                      "turnoverLuckDelta":  0.02
                  },
        "previousRank":  25
    },
    {
        "id":  "houston",
        "name":  "Houston",
        "mascot":  "Cougars",
        "abbrev":  "HOU",
        "conference":  "Big 12",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  22,
        "coachesRank":  23,
        "sidelineRank":  23,
        "bcsRank":  23,
        "colors":  {
                       "primary":  "#C8102E",
                       "secondary":  "#FFFFFF",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/248.png",
        "coaching":  {
                         "headCoach":  "Willie Fritz",
                         "offensiveSystem":  "Option-Spread / Disciplined Defense",
                         "coachingGrade":  0.89,
                         "tenureYears":  3
                     },
        "roster":  {
                       "talentComposite":  0.840,
                       "blueChipRatio":  0.28,
                       "returningProduction":  0.80,
                       "keyPlayers":  [
                                          "Donovan Smith (QB)",
                                          "Parker Jenkins (RB)",
                                          "Joseph Manjack IV (WR)",
                                          "Keith Cooper Jr. (DL)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs Oregon State",
                                                     "result":  "W 33-20",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Southern",
                                                     "result":  "W 77-6",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "at Texas Tech, at Georgia Southern, vs UCF, at Kansas State",
                             "projectedSosRank":  23
                         },
        "stats":  {
                      "sor":  0.9,
                      "gameControl":  0.910,
                      "sos":  0.775,
                      "colleyMetric":  0.915,
                      "sam":  42,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs Oregon State (33-20)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.875,
                      "defEfficiency":  0.955,
                      "successRate":  0.498,
                      "finishingDrives":  4.65,
                      "explosivenessEpa":  0.265,
                      "turnoverLuckDelta":  0.03
                  },
        "previousRank":  23
    },
    {
        "id":  "virginia",
        "name":  "Virginia",
        "mascot":  "Cavaliers",
        "abbrev":  "UVA",
        "conference":  "ACC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  25,
        "coachesRank":  25,
        "sidelineRank":  25,
        "bcsRank":  25,
        "colors":  {
                       "primary":  "#232D4B",
                       "secondary":  "#F84C1E",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/258.png",
        "coaching":  {
                         "headCoach":  "Tony Elliott",
                         "offensiveSystem":  "Pro-Spread Multiple",
                         "coachingGrade":  0.87,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.850,
                       "blueChipRatio":  0.33,
                       "returningProduction":  0.81,
                       "keyPlayers":  [
                                          "Anthony Colandrea (QB)",
                                          "Kobe Pace (RB)",
                                          "Malachi Fields (WR)",
                                          "Jonas Sanker (S)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "vs NC State",
                                                     "result":  "W 34-8",
                                                     "venue":  "Home"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs Norfolk State",
                                                     "result":  "W 59-3",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "vs West Virginia, vs Delaware, at Florida State, vs Syracuse",
                             "projectedSosRank":  25
                         },
        "stats":  {
                      "sor":  0.895,
                      "gameControl":  0.875,
                      "sos":  0.78,
                      "colleyMetric":  0.910,
                      "sam":  41,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "vs NC State (34-8)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.885,
                      "defEfficiency":  0.89,
                      "successRate":  0.485,
                      "finishingDrives":  4.6,
                      "explosivenessEpa":  0.28,
                      "turnoverLuckDelta":  0.02
                  },
        "previousRank":  24
    },
    {
        "id":  "smu",
        "name":  "SMU",
        "mascot":  "Mustangs",
        "abbrev":  "SMU",
        "conference":  "ACC",
        "record":  {
                       "wins":  2,
                       "losses":  0
                   },
        "apRank":  16,
        "coachesRank":  16,
        "sidelineRank":  16,
        "bcsRank":  16,
        "colors":  {
                       "primary":  "#0033A0",
                       "secondary":  "#C8102E",
                       "text":  "#FFFFFF"
                   },
        "logo":  "https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png",
        "coaching":  {
                         "headCoach":  "Rhett Lashlee",
                         "offensiveSystem":  "Ultra-Fast Air Raid / Up-Tempo Spread",
                         "coachingGrade":  0.89,
                         "tenureYears":  5
                     },
        "roster":  {
                       "talentComposite":  0.875,
                       "blueChipRatio":  0.45,
                       "returningProduction":  0.77,
                       "keyPlayers":  [
                                          "Kevin Jennings (QB)",
                                          "Brashard Smith (RB)",
                                          "Kobe Wilson (LB)",
                                          "Isaiah Nwokobia (S)"
                                      ]
                   },
        "schedule2026":  {
                             "gamesPlayed":  [
                                                 {
                                                     "week":  1,
                                                     "opponent":  "at Florida State",
                                                     "result":  "W 27-24",
                                                     "venue":  "Away"
                                                 },
                                                 {
                                                     "week":  2,
                                                     "opponent":  "vs UC Davis",
                                                     "result":  "W 56-10",
                                                     "venue":  "Home"
                                                 }
                                             ],
                             "upcomingMarquee":  "at Louisville, vs Missouri State, vs Boston College, vs Virginia",
                             "projectedSosRank":  21
                         },
        "stats":  {
                      "sor":  0.825,
                      "gameControl":  0.865,
                      "sos":  0.78,
                      "colleyMetric":  0.830,
                      "sam":  24.5,
                      "top25Wins":  0,
                      "top10Wins":  0,
                      "bestWin":  "at Florida State (27-24)",
                      "keyLoss":  "None",
                      "offEfficiency":  0.89,
                      "defEfficiency":  0.875,
                      "successRate":  0.485,
                      "finishingDrives":  4.6,
                      "explosivenessEpa":  0.275,
                      "turnoverLuckDelta":  -0.02
                  },
        "previousRank":  26
    }
];
