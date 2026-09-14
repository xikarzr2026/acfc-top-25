# ACFC Top 25 (Advanced College Football Composite) — 2026-27 Season Edition

![Version](https://img.shields.io/badge/version-v0.3.0-cyan?style=for-the-badge&logo=github)
![Season](https://img.shields.io/badge/Season-2026--27_Week_3-amber?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-emerald?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

An advanced, responsive, client-side analytical ranking engine for College Football that decouples **Predictive Power** from **Resume Merit**, calibrated with **Bayesian Prior Blending** and benchmarking against the **Top 10 College Football Ranking Systems**.

---

## 1. Top 10 College Football Ranking Systems Compendium & Live Emulation

College football ranking systems divide into two distinct categories: **Human Consensus Polls** (measuring subjective merit/résumé) and **Algorithmic/Computer Models** (measuring predictive power or mathematically balanced schedules).

In ACFC v0.3.0, users can click **"⚡ Emulate"** directly inside the Compendium modal to test each system live against the 2026 FBS dataset:

| # | System / Site | Type | Transparency Level | How It Is Calculated / Methodology Availability | ACFC Live Emulation Settings |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | **College Football Playoff (CFP)** | Human Committee | Principles Published, Math N/A | Multi-round secret balloting by 13-member committee evaluating head-to-head, SOS, and championships without fixed formulas. | 70% RMS, 30% PES, $1.6\times$ SOS, 25% Prior |
| **2** | **Associated Press (AP) Top 25** | Human Media Poll | Public Voter Ballots | 60+ sports journalists submit 1–25 ballots weekly (25 pts to 1 pt). Fully public voter ballots published weekly. | 80% RMS, 20% PES, $1.1\times$ SOS, 30% Prior |
| **3** | **US LBM Coaches Poll (USA Today)** | Human Coaches Poll | Public Voter Ballots | Active FBS head coaches submit weekly 1–25 ballots (25 pts to 1 pt). Published with individual final ballots disclosed. | 75% RMS, 25% PES, $1.0\times$ SOS, 45% Prior |
| **4** | **ESPN Football Power Index (FPI)** | Predictive Computer | Concepts Explained, Code Proprietary | Evaluates EPA per play, returning production, recruiting ratings, and component efficiencies. | 75% PES, 25% RMS, 55% Prior, +35 Cap |
| **5** | **SP+ (Bill Connelly / ESPN)** | Predictive Computer | Full Conceptual Breakdown | Three pillars: Play-by-play Success Rate (30%), Explosiveness (35%), and Finishing Drives (35%). | 80% PES, 20% RMS, 65% Prior, 90% MOV |
| **6** | **Sagarin Ratings (Jeff Sagarin)** | Computer (Predictive & Elo) | Fully Explained Principles | Linear algebra & network theory with diminishing-returns point margins. Publishes Elo-Chess vs Predictor. | 60% PES, 40% RMS, 95% SAM MOV, $1.3\times$ SOS |
| **7** | **TeamRankings Predictive Ratings** | Predictive Computer | Inputs & Mechanics Published | Point differential adjusted for opponent strength, venue, and game state representing expected point spreads. | 75% PES, 25% RMS, 100% MOV Cap, $1.0\times$ SOS |
| **8** | **Colley’s Bias-Free Matrix** | Résumé Computer | Fully Open Source Math | Solves linear equation system ($r = M^{-1} b$). Completely ignores point margins, assessing purely wins and schedule. | 95% RMS, 5% PES, 0% Margin (Off), $1.5\times$ SOS |
| **9** | **CFB Graphs / CFBD (PPA / EPA)** | Analytical Metric Site | Open Methodology & Public API | Down, distance, and field-position Predicted Points Added open API metrics. | 85% PES, 15% RMS, 50% Prior, Net EPA Mode |
| **10** | **Massey Ratings (Kenneth Massey)** | Composite / Computer | Mathematical Formulation Published | Least-squares linear model balancing scoring differential and game outcomes against strength of schedule. | 50% RMS, 50% PES, 70% MOV, $1.2\times$ SOS |

---

## 2. The ACFC Synthesis: Unifying Predictive & Résumé

$$\text{ACFC Index} = w_{\text{resume}} \cdot \text{RMS} + (1 - w_{\text{resume}}) \cdot \text{PES}$$

* **Resume Merit Score (RMS):** 35% Strength of Record (SOR), 25% Game Control & Top-10/25 wins, 20% Colley Bias-Free Matrix, 20% Schedule-Adjusted Margin (SAM) with logistic diminishing-returns curve, scaled dynamically by Schedule Difficulty ($SOS$).
* **Predictive Efficiency Score (PES):** 30% SP+ Down-to-Down Success Rate, 35% Finishing Drives (Inside-40), 35% Net EPA/PPA per play with turnover luck neutralization.
* **Bayesian Prior Calibration:** 50% Roster Talent Index (247 Composite / Blue-Chip Ratio), 25% Returning Production (TAR), and 25% Coaching Staff Grade.
* **2026 Schedule Reconciliation:** Fully aligned with genuine 2026 marquee matchups: Ohio State at Texas (Week 2), Clemson at LSU (Week 1), Wisconsin vs. Notre Dame at Lambeau Field (Week 1), Florida State at Alabama (Week 1), Oklahoma at Michigan (Week 2), and Boise State at Oregon (Week 2).

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
      │ • Game Control & Wins (25%) │                 │ • Drive Finishing (35%)     │
      │ • Colley W-L Iteration (20%)│                 │ • Explosiveness & EPA (35%) │
      │ • Schedule Margin SAM (20%) │                 │ • Roster/Coach Prior Blend  │
      │ • Scaled by SOS Multiplier  │                 │ • Neutralized Turnover Luck │
      └─────────────────────────────┘                 └─────────────────────────────┘
```

---

## 3. Official Model Calibration & Fixed Parameters

To maintain objective, tamper-proof ranking integrity, the ACFC ranking algorithm operates on fixed, scientifically calibrated parameters:
1. **Bayesian Prior Weight (40% Fixed):** Blends 247 Talent Composite (50%), Returning Production (25%), and Coaching Pedigree (25%) to neutralize early-season sample bias.
2. **Dual-Engine Equilibrium (50% RMS / 50% PES):** Equal weighting between earned on-field merit and neutral-field predictive efficiency.
3. **SAM S-Curve Blowout Ceiling (+24.0 Pt Cap):** Sigmoid curve prevents blowout stat-padding from distorting top-tier ranks.
4. **Dynamic Schedule Scaling (1.0x Baseline):** Directly rewards teams with elite Top-25 marquee gauntlets relative to a 0.78 national SOS baseline.

---

## 4. Local Setup & Deployment

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or run via Python local server:
```bash
python -m http.server 8000
```

---

## 5. License
Distributed under the MIT License.
