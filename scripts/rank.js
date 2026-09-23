#!/usr/bin/env node
// Print the current ACFC rankings to the terminal:  node scripts/rank.js
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(ROOT, 'algorithm.js'), 'utf8');
const ACFC = new Function(src + '\nreturn ACFCAlgorithmEngine;')();
const ranked = new ACFC().calculateRankings();
const pad = (v, n) => String(v ?? '-').padEnd(n);
console.log(pad('Rk', 4) + pad('Team', 13) + pad('Rec', 6) + pad('ACFC', 7) + pad('RMS', 7) + pad('PES', 7) + pad('Prev', 6) + pad('AP', 4) + 'Move');
for (const t of ranked) {
  console.log(pad(t.rank, 4) + pad(t.name, 13) + pad(`${t.record.wins}-${t.record.losses}`, 6) + pad(t.acfcIndexFormatted, 7) +
    pad(t.rms.score.toFixed(3), 7) + pad(t.pes.score.toFixed(3), 7) + pad(t.previousRank, 6) + pad(t.apRank, 4) +
    (t.rankDelta > 0 ? '+' : '') + t.rankDelta);
}
