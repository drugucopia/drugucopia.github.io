#!/usr/bin/env node

/**
 * Fix common data-quality issues in data/substances/*.json so they pass
 * validation against data/schemas/substance.schema.json.
 *
 * Fixes applied:
 *   - null / undefined history  →  ""  (schema requires string)
 *   - null afterEffects         →  ""
 *   - Non-standard route keys   →  mapped to valid enum values
 *     (e.g. "smoked" → "inhaled", "snorted" → "insufflated")
 *   - routes array entries      →  same mapping + dedup
 *   - Underscored ids           →  "magnesium-glycinate" (hyphens, not underscores)
 *   - Invalid riskLevel values  →  mapped to nearest valid enum
 *   - Empty descriptions        →  placeholder text (schema requires minLength 1)
 *
 * Usage:
 *   node scripts/fix-substance-data.mjs
 */

import { readFileSync, writeFileSync, readdirSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const DIR = join(ROOT, 'data', 'substances');

const VALID_ROUTES = [
  'oral', 'sublingual', 'buccal', 'insufflated', 'inhaled',
  'intravenous', 'intramuscular', 'subcutaneous', 'rectal', 'transdermal',
];

const ROUTE_MAP = {
  smoked: 'inhaled',
  snorted: 'insufflated',
  vaped: 'inhaled',
  nasal: 'insufflated',
  iv: 'intravenous',
  im: 'intramuscular',
};

const VALID_RISK_LEVELS = ['low', 'moderate', 'high', 'very-high'];

const RISK_LEVEL_MAP = {
  none: 'low',
  'low-risk': 'low',
  'no-risk': 'low',
  minimal: 'low',
  medium: 'moderate',
  dangerous: 'high',
  extreme: 'very-high',
};

const files = readdirSync(DIR).filter(f => f.endsWith('.json'));
let fixed = 0;

for (const file of files) {
  const fpath = join(DIR, file);
  const data = JSON.parse(readFileSync(fpath, 'utf-8'));
  let changed = false;

  // ── Fix null / missing string fields ──────────────────────────────────
  if (data.history === null || data.history === undefined) {
    data.history = '';
    changed = true;
  }

  if (data.afterEffects === null) {
    data.afterEffects = '';
    changed = true;
  }

  if (data.description === '') {
    data.description = `${data.name} is a substance. Further information is pending.`;
    changed = true;
  }

  // ── Fix id format (must match ^[a-z0-9]+(-[a-z0-9]+)*$) ─────────────
  if (data.id && data.id.includes('_')) {
    const fixedId = data.id.replace(/_/g, '-');
    console.log(`  Fixing id: "${data.id}" → "${fixedId}"`);
    data.id = fixedId;
    changed = true;
  }

  // ── Fix riskLevel ────────────────────────────────────────────────────
  if (!VALID_RISK_LEVELS.includes(data.riskLevel)) {
    const mapped = RISK_LEVEL_MAP[data.riskLevel] || 'low';
    console.log(`  Fixing riskLevel: "${data.riskLevel}" → "${mapped}" (${data.id})`);
    data.riskLevel = mapped;
    changed = true;
  }

  // ── Fix routeData keys ───────────────────────────────────────────────
  if (data.routeData) {
    const routeKeys = Object.keys(data.routeData);
    for (const key of routeKeys) {
      if (!VALID_ROUTES.includes(key)) {
        const mapped = ROUTE_MAP[key];
        if (mapped) {
          data.routeData[mapped] = data.routeData[key];
          delete data.routeData[key];
          changed = true;
        } else {
          console.log(`  Unknown route "${key}" in ${data.id} — removing`);
          delete data.routeData[key];
          changed = true;
        }
      }
    }
  }

  // ── Fix routes array ─────────────────────────────────────────────────
  if (data.routes) {
    data.routes = data.routes
      .map(r => ROUTE_MAP[r] || r)
      .filter(r => VALID_ROUTES.includes(r));
    data.routes = [...new Set(data.routes)];
    changed = true;
  }

  // ── Write back ───────────────────────────────────────────────────────
  if (changed) {
    const outPath = join(DIR, data.id + '.json');
    writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n');

    // If the filename doesn't match the (possibly fixed) id, remove the old file
    const oldPath = join(DIR, file);
    if (oldPath !== outPath && existsSync(oldPath)) {
      unlinkSync(oldPath);
    }

    fixed++;
  }
}

console.log(`Fixed ${fixed} / ${files.length} files`);

