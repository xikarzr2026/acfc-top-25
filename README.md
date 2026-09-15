# ACFC Top 25 (Advanced College Football Composite) — 2026-27 Season Edition

![Version](https://img.shields.io/badge/version-v0.4.0-cyan?style=for-the-badge&logo=github)
![Live App](https://img.shields.io/badge/Live_App-GitHub_Pages-brightgreen?style=for-the-badge&logo=githubpages)
![Season](https://img.shields.io/badge/Season-2026--27_Week_3_Calibrated-amber?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-emerald?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**🚀 Live Web Application:** [https://xikarzr2026.github.io/cfb-top-25-ai/](https://xikarzr2026.github.io/cfb-top-25-ai/)

An advanced, responsive, client-side analytical ranking engine for College Football that decouples **Predictive Power** from **Resume Merit**, calibrated with **Bayesian Prior Blending**, **SP+/FEI Opponent-Adjusted Predictive Efficiency Normalization**, and benchmarking against the **Top 10 College Football Ranking Systems** and the **8 Premier College Football Analytics Hubs**.

---

## 1. Top 10 College Football Ranking Systems Compendium

College football ranking systems divide into two distinct categories: **Human Consensus Polls** (measuring subjective merit/résumé) and **Algorithmic/Computer Models** (measuring predictive power or mathematically balanced schedules).

In ACFC v0.4.0, users can review the methodologies of each benchmark system inside the Compendium modal:

| # | System / Site | Type | Transparency Level | How It Is Calculated / Methodology Availability | Primary Analytical Focus |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | **College Football Playoff (CFP)** | Human Committee | Principles Published, Math N/A | Multi-round secret balloting by 13-member committee evaluating head-to-head, SOS, and championships without fixed formulas. | Pure Résumé & Schedule Gauntlet |
| **2** | **Associated Press (AP) Top 25** | Human Media Poll | Public Voter Ballots | 60+ sports journalists submit 1–25 ballots weekly (25 pts to 1 pt). Fully public voter ballots published weekly. | Voter Consensus & Traditional Record |
| **3** | **US LBM Coaches Poll (USA Today)** | Human Coaches Poll | Public Voter Ballots | Active FBS head coaches submit weekly 1–25 ballots (25 pts to 1 pt). Individual ballots disclosed for the final regular-season poll. | Head Coach Merit Assessment |
| **4** | **ESPN Football Power Index (FPI)** | Predictive Computer | Concepts Explained, Code Proprietary | Evaluates EPA per play, returning production, recruiting ratings, and component efficiencies. | Predictive Down-to-Down Efficiency |
| **5** | **SP+ (Bill Connelly / ESPN)** | Predictive Computer | Full Conceptual Breakdown | Five factors: efficiency (success rate), explosiveness, field position, finishing drives, and turnovers — built from opponent-adjusted play-by-play data. | Drive Quality & Explosive Plays |
| **6** | **Sagarin Ratings (Jeff Sagarin)** | Computer (Predictive & Elo) | Fully Explained Principles | Linear algebra & network theory with diminishing-returns point margins. Publishes Elo-Chess vs Predictor. | Pure Spreads & Diminishing Margins |
| **7** | **TeamRankings Predictive Ratings** | Predictive Computer | Inputs & Mechanics Published | Point differential adjusted for opponent strength, venue, and game state representing expected point spreads. | Neutral-Field Vegas Lines |
| **8** | **Colley's Bias-Free Matrix** | Résumé Computer | Fully Open Source Math | Solves linear equation system ($r = M^{-1} b$). Completely ignores point margins, assessing purely wins and schedule. | Margin-Free Mathematical W-L |
| **9** | **CFB Graphs / CFBD (PPA / EPA)** | Analytical Metric Site | Open Methodology & Public API | Down, distance, and field-position Predicted Points Added open API metrics. | Play-by-Play EPA Metrics |
| **10** | **Massey Ratings (Kenneth Massey)** | Composite / Computer | Mathematical Formulation Published | Least-squares linear model balancing scoring differential and game outcomes against strength of schedule. | Least-Squares Balanced Composite |

---

## 2. Premier College Football Analytics Hubs & Advanced Data Sources

The ACFC engine synthesizes metrics, distributions, and foundational data structures pioneered across the **8 premier analytics platforms** in modern college football:

| # | Platform | URL | Primary Strength ("Best For") | Key Metrics & Concepts | ACFC Engine Synthesis |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | **CollegeFootballData (CFBD)** | [collegefootballdata.com](https://collegefootballdata.com) | Foundational Open-Data Hub & APIs | Play-by-play EPA, Success Rate, Havoc Rate, Finishing Drives, Post-Game Win Probabilities, Python/R API. | Supplies the foundational data baseline for down-to-down success rates, Net EPA, and predictive metric models. |
| **2** | **Game on Paper** | [gameonpaper.com/cfb](https://gameonpaper.com/cfb) | Post-Game Visual Profiles & EPA Flows | EPA per dropback/rush, cumulative EPA charts, success rate distributions, and in-game win probability flows. | Calibrates rush vs. pass efficiency weighting and game control curve dampening. |
| **3** | **BCF Toys (Brian Fremeau)** | [bcftoys.com](https://www.bcftoys.com) | Drive-Efficiency Ratings & Possession Stats | FEI (Fremeau Efficiency Index), available drive rate, value drives, first down rate, garbage-time filtering. | Serves as the architectural standard for ACFC drive finishing, garbage-time filtering, and possession value modeling. |
| **4** | **ESPN SP+ & FPI** | [espn.com/college-football](https://www.espn.com/college-football/) | Industry-Standard Predictive Power Models | Connelly's 5 Factors (efficiency, explosiveness, field position, finishing drives, turnovers), FPI ratings, SOS. | Primary benchmark for our 50% PES predictive engine and tempo/opponent strength adjustments. |
| **5** | **CFB-Graphs (Parker Fleming)** | [cfb-graphs.com](https://cfb-graphs.com) | Interactive Dashboards & Efficiency Tiers | EPA/play vs. Success Rate scatterplots, early-down vs. late-down efficiency, explosive play rates, schedule tiers. | Informs the 5-axis radar polygon charts and down-and-distance situational weights in team deep dives. |
| **6** | **Beta_Rank (Rob Henderson)** | [betarank-cfb.com](https://www.betarank-cfb.com) | Drive-Level State Simulation & Spreads | Model-based drive simulation, offensive/defensive state transitions, explosive drive likelihood, Vegas line projections. | Drives score projection algorithms and expected spread distributions in the ACFC Matchup Arena. |
| **7** | **cfbstats** | [cfbstats.com](http://www.cfbstats.com) | Situational Splits & Down-and-Distance Filters | Third-down conversions by yardage bucket (short/med/long), red zone TD %, half/quarter splits, raw situations. | Provides foundational baselines for red zone conversion thresholds and situational execution indicators. |
| **8** | **Pro Football Focus (PFF College)** | [pff.com/college](https://pff.com/college) | Film-Graded Charting & Player Execution | Adjusted completion rate, turnover-worthy plays (TWP), pressure rate, pass-rush win rate, tackle breaking. | Informs Bayesian talent priors, blue-chip ratio weights, and QB turnover-luck normalization. |

---

## 3. The ACFC Synthesis: Unifying Predictive & Résumé

$$\text{ACFC Index} = w_{\text{resume}} \cdot \text{RMS} + (1 - w_{\text{resume}}) \cdot \text{PES}$$

* **Resume Merit Score (RMS):** 35% Strength of Record (SOR), 25% Game Control & Top-10/25 wins, 20% Merit Index (stabilised, margin-free), 20% Schedule-Adjusted Margin (SAM) with a logistic diminishing-returns curve, scaled dynamically by Schedule Difficulty ($SOS$).
* **Predictive Efficiency Score (PES):** 30% SP+ Down-to-Down Success Rate, 14% Finishing Drives (Inside-40), 21% Net Off/Def Drive Efficiency, 35% Net EPA/PPA per play, with turnover-luck neutralisation.
* **Bayesian Prior Calibration:** 50% Roster Talent Index (itself 70% 247 composite / 30% blue-chip ratio), 25% Returning Production (TAR), 25% Coaching Staff Grade. The prior enters the two engines at **different strengths** — 16% of RMS and 40% of PES. Both figures are rendered into the UI directly from `engine.getEffectiveWeights()`.
* **Verified 2026 early-season results:** the engine ingests the real weeks 0-2 score log — including Ohio State at Texas (Week 2, 24-23), Clemson at LSU (Week 1, 51-10), Wisconsin vs Notre Dame at Lambeau Field (Week 1, 41-13), Ole Miss vs Louisville (Week 1, 41-38), Oklahoma at Michigan (Week 2, 17-10) and Boise State at Oregon (Week 1, 27-34). All 53 team-games were checked against ESPN and official athletic-department box scores.

The **real Colley bias-free rating** is solved at runtime from the game log and shown in every team deep dive as "Colley (computed)". It is deliberately *not* the RMS merit component: at a 2-3 game sample a true Colley matrix is near-degenerate (almost every undefeated team collapses to 0.500), so RMS uses a stabilised merit index instead.

```
                     ┌───────────────────────────────────────────────┐
                     │          ACFC Composite Index Score           │
                     └───────────────────────┬───────────────────────┘
                                             │
                     ┌───────────────────────┴───────────────────────┐
                     ▼                                               ▼
      ┌─────────────────────────────┐                 ┌─────────────────────────────┐
      │   Resume Merit Score (RMS)  │                 │  Predictive Efficiency (PES)│
      │        Weight: 50%          │                 │         Weight: 50%         │
      └──────────────┬──────────────┘                 └──────────────┬──────────────┘
                     │                                               │
      ┌──────────────┴──────────────┐                 ┌──────────────┴──────────────┐
      │ • Strength of Record (35%)  │                 │ • Play Success Rate (30%)   │
      │ • Game Control & Wins (25%) │                 │ • Finishing Drives (14%)    │
      │ • Merit Index (20%)         │                 │ • Net Off/Def Eff. (21%)    │
      │ • Schedule Margin SAM (20%) │                 │ • Explosiveness & EPA (35%) │
      │ • Scaled by SOS Multiplier  │                 │ • Neutralized Turnover Luck │
      └─────────────────────────────┘                 └─────────────────────────────┘
```

---

## 4. On-Demand Algorithm Execution & Live Recalculation Engine

In ACFC v0.4.0, users have a dedicated **Execution Dock** directly above the Top 25 rankings table:
* **`⚡ Run Algorithm & Update Rankings`**: Triggers real-time computation of the full ACFC composite matrix across all 26 tracked teams.
* **Live Calculation Telemetry**: Instant millisecond feedback badge (e.g. `⚡ Recalculated in 1.1ms`) confirming on-the-fly execution.
* **Tamper-Proof Integrity**: Operates on fixed mathematical weights (50% RMS / 50% PES, with the prior blended at 16% into RMS and 40% into PES), ensuring objective rankings without subjective voter bias or arbitrary tampering.
* **Matchup Arena**: Interactive head-to-head simulator comparing any two of the 26 tracked teams on neutral or home fields using component ratings, roster talent, and coach grades. The projected score difference *is* the displayed spread, and the home-field control is worth the 2.5 points it advertises.

---

## 5. Official Model Calibration & Fixed Parameters

To maintain objective, tamper-proof ranking integrity, the ACFC ranking algorithm operates on fixed, scientifically calibrated parameters:
1. **Bayesian Prior Blend:** 247 Talent Composite and Blue-Chip Ratio (50%), Returning Production (25%), and Coaching Pedigree (25%) — applied at **16% strength inside RMS and 40% inside PES** to neutralise early-season sample bias.
2. **Dual-Engine Equilibrium (50% RMS / 50% PES):** Equal weighting between earned on-field merit and neutral-field predictive efficiency.
3. **SAM S-Curve Blowout Ceiling (±24.0 Pt Cap):** Sigmoid curve prevents blowout stat-padding from distorting top-tier ranks.
4. **Dynamic Schedule Scaling (1.0x Baseline):** Scales merit by schedule difficulty relative to a fixed 0.78 SOS anchor. Note the dataset's own mean SOS is 0.815, so every tracked team receives a small positive uplift from this anchor.

---

## 6. Data & Rank Conventions

Enforced by `audit/verify.js`; violating any of these fails CI.

| Convention | Rule |
| :--- | :--- |
| **Poll ranks** | `apRank` / `coachesRank` are the real published polls. A team outside a 25-team poll is `null` and renders as **NR**. A rank greater than 25 is a bug, never data. |
| **Opponent rank tags** | The `#N` on an opponent uses the poll **in effect at kickoff**: the preseason poll for weeks 0-1, the Sep 8 poll for week 2. One snapshot per game — both sides of a fixture must agree. |
| **`top25Wins` / `top10Wins`** | Count only **wins over opponents ranked at kickoff**. Texas (#1 Ohio State), Michigan (#11 Oklahoma) and Ole Miss (#24 Louisville) qualify; nothing else does. The harness derives these from the game log and fails if the declared value disagrees. |
| **`stats.sam`** | The mean scoring margin of `gamesPlayed`, recomputed from the score strings. |
| **`projectedSosRank`** | A strict `1..N` permutation; ties are broken by current `stats.sos` descending. |
| **`stats.meritIndex`** | A stabilised, margin-free consensus merit index. **Not** a Colley Matrix output — the real Colley rating is computed at runtime. |
| **Weeks** | Week 0 is week 0. Two games were played on Aug 29, 2026 and both are logged as week 0. |

---

## 7. Verification & CI

```bash
node audit/verify.js     # 357 assertions, exits non-zero on any failure
```

A dependency-free harness that checks schema completeness, record↔log agreement, `sam` derivation, poll membership (including the "no rank > 25" rule), kickoff-tag consistency, derived `top25Wins`, the SOS permutation, the Colley claim, matchup-engine self-consistency, documented-vs-implemented weights, and the specific UI regressions that have shipped before (the 26-row Top 25, the hard-coded KPI cards, the `+-0.5` sign, the 390px header overflow, the `═ 0` glyph, the `version.json` CORS fetch).

**CI:** the GitHub Actions workflow lives at `audit/gh-actions-verify.yml` rather than in `.github/workflows/` because the `gh` CLI token on this machine lacks the `workflow` scope — GitHub rejects any push containing a workflow file without it. Activate it with:

```bash
gh auth refresh -s workflow
mkdir -p .github/workflows && mv audit/gh-actions-verify.yml .github/workflows/verify.yml
git add .github && git commit -m "ci: enable the verification workflow" && git push
```

Until then the harness runs locally and can be wired into a `pre-push` hook.

---

## 8. Known Limitations

* **Rank precision exceeds input precision.** The hand-set rating fields carry roughly ±0.02 of genuine uncertainty. Under a 1,000-trial Monte Carlo at that noise level, 25 of 26 teams fail to hold their exact rank in more than half of runs, and the gap between #6 and #7 is 0.0003. Adjacent ranks should be read as tier-equivalent, not as a strict ordering. Treat the three-decimal index as a display convenience.
* **The displayed index is a min-max remap** to a fixed 0.580-0.985 band, so its absolute value carries no cross-week information.
* **Game-control saturation.** `controlComponent` is clamped at 1.0 *after* the ranked-win bonus is added, so Texas — the one team with a top-10 win — has that bonus fully absorbed. Fixing it re-tunes the published calibration and was therefore left as a deliberate choice.
* **Coaches poll coverage.** The dataset tracks 26 teams; the published Coaches poll's #24 (Washington) is outside that universe, so that slot renders unfilled. The harness reports it as a warning rather than fabricating a row.
* **`sidelineRank` / `bcsRank`** are internal composites that track the AP ballot very closely (Spearman 0.996 against AP; 17 of 26 ranks identical). They are not independent signals.
* **"Analytics Darling"** currently matches no team, because every team with a PES ≥ 0.88 sits within two spots of its AP rank. The filter pill is retained because the condition is meaningful, but expect an empty result.
* **Tailwind is loaded from the Play CDN** (now version-pinned). A prebuilt stylesheet would be the production-grade step; the CDN still prints a console advice notice.

---

## 9. Local Setup & Deployment

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or run via a local server (**recommended** — some browsers restrict local file access):
```bash
python -m http.server 8000
```

---

## 10. Changelog

### v0.4.0 — verification release
Everything below is backed by `audit/verify.js`.

**Data corrections**
* Fixed `top25Wins` on seven teams that claimed a Top-25 victory over an opponent that was unranked at kickoff (Notre Dame, LSU, Alabama, Texas A&M, BYU, Boise State, Iowa) — and restored Ole Miss's genuine win over #24 Louisville, which had been missing.
* Removed Boise State's fabricated poll ranks (AP "26", Coaches 24); both polls are 25 teams, and Boise State is unranked in each. Louisville's out-of-range Coaches rank 26 removed too.
* Normalised all opponent rank tags to the kickoff snapshot: Ohio State at "#4 Texas" (not #1), Oklahoma "at Michigan" (Michigan was unranked, not #19), Ole Miss "vs #24 Louisville", Boise State "at #2 Oregon".
* Corrected Virginia's NC State game to week 0 (played Aug 29, same day as USC–San Jose State, which was already labelled week 0).
* `projectedSosRank` made a strict 1-26 permutation (it had two tied pairs and no #13).
* Renamed `stats.colleyMetric` → `stats.meritIndex`, since it was never a Colley Matrix output.

**Model**
* `computeColley()` — a genuine Colley bias-free matrix solved at runtime and displayed in the deep dive.
* `getEffectiveWeights()` — every weight the UI displays is now read from the engine, so documented and implemented weights can never diverge again (they previously differed by 2.5x on the prior and omitted a 21% PES component entirely).
* Matchup engine rebuilt: the projected score difference *is* the displayed spread, home field is worth the advertised 2.5 points, and win probability is derived from the spread with a calibrated logistic instead of a far-too-steep independent curve (a 9-point favourite showed 94%; it now shows 80%).
* `assignBadges()` is null-safe: no poll-comparison badge can fire for an unranked team.

**Interface**
* The table now renders exactly 25 rows with rank 26 in a "First Team Out" strip; the impossible "AP POLL #26" display is gone.
* KPI cards 2-4 are computed instead of hard-coded (they had been claiming a stale "Tennessee Vols, SOR 0.935" as the best resume, and mislabelling Georgia's talent composite as its blue-chip ratio).
* Negative SAM renders as "−0.5 pts" instead of "+-0.5 pts"; meter widths are clamped.
* Fixed a 390px viewport overflow caused by the header row.
* Favicon added (was a 404 on every load); Tailwind CDN pinned; the runtime `version.json` fetch removed (it threw CORS errors when the app was opened directly from disk).
* Modals announce `role="dialog"`/`aria-modal` and close on Escape; `═ 0` replaced with a readable "— same".

**Tooling**
* `audit/verify.js` + GitHub Actions workflow.

---

## 11. License
Distributed under the MIT License.
