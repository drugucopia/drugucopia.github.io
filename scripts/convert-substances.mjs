import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const SUBDIR = 'src/lib/substances';
const OUTDIR = 'data/substances';

mkdirSync(OUTDIR, { recursive: true });

const files = readdirSync(SUBDIR).filter(f => 
  f.endsWith('.ts') && 
  !f.startsWith('_') && 
  f !== 'index.ts' && 
  f !== 'types.ts' && 
  f !== 'substances.ts'
);

let converted = 0;
let failed = 0;

for (const file of files) {
  try {
    let content = readFileSync(join(SUBDIR, file), 'utf-8');
    
    // Extract the object portion: everything from the first { after = to the matching }
    const eqIdx = content.indexOf('=');
    if (eqIdx === -1) throw new Error('No = found');
    
    const afterEq = content.substring(eqIdx + 1);
    const braceStart = afterEq.indexOf('{');
    if (braceStart === -1) throw new Error('No { found');
    
    // Find the matching closing brace
    let depth = 0;
    let inString = false;
    let escape = false;
    let braceEnd = -1;
    
    for (let i = braceStart; i < afterEq.length; i++) {
      const ch = afterEq[i];
      
      if (escape) {
        escape = false;
        continue;
      }
      
      if (ch === '\\' && inString) {
        escape = true;
        continue;
      }
      
      if (ch === '"') {
        inString = !inString;
        continue;
      }
      
      if (inString) continue;
      
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          braceEnd = i;
          break;
        }
      }
    }
    
    if (braceEnd === -1) throw new Error('No matching } found');
    
    let objStr = afterEq.substring(braceStart, braceEnd + 1);
    
    // Remove JS inline comments that aren't in strings
    // Strategy: process char by char, skip // comments outside strings
    let cleaned = '';
    let inStr = false;
    let esc = false;
    for (let i = 0; i < objStr.length; i++) {
      const ch = objStr[i];
      
      if (esc) {
        cleaned += ch;
        esc = false;
        continue;
      }
      
      if (ch === '\\' && inStr) {
        cleaned += ch;
        esc = true;
        continue;
      }
      
      if (ch === '"') {
        inStr = !inStr;
        cleaned += ch;
        continue;
      }
      
      if (inStr) {
        cleaned += ch;
        continue;
      }
      
      // Outside string: check for // comment
      if (ch === '/' && i + 1 < objStr.length && objStr[i + 1] === '/') {
        // Skip until end of line
        while (i < objStr.length && objStr[i] !== '\n') i++;
        // Add the newline
        if (i < objStr.length) cleaned += '\n';
        continue;
      }
      
      cleaned += ch;
    }
    
    // Remove trailing commas before } or ]
    cleaned = cleaned.replace(/,\s*([}\]])/g, '$1');
    
    // Parse as JSON
    const data = JSON.parse(cleaned);
    
    // Write as JSON
    const outPath = join(OUTDIR, data.id + '.json');
    writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n');
    converted++;
  } catch (err) {
    console.error('Failed on ' + file + ': ' + err.message);
    failed++;
  }
}

console.log('\nConverted: ' + converted + ', Failed: ' + failed);
