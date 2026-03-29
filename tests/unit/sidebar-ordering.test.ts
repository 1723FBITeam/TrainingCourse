// Unit test: Sidebar ordering
// Requirements: 4.4, 4.5

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';

const sidebarContent = readFileSync('astro.config.mjs', 'utf-8');

describe('Sidebar ordering', () => {
  it('unit groups appear after Unit 3 and before Reference Sheets', () => {
    const unit3Pos = sidebarContent.indexOf('Unit 3');
    const unit4Pos = sidebarContent.indexOf('Unit 4');
    const unit5Pos = sidebarContent.indexOf('Unit 5');
    const unit6Pos = sidebarContent.indexOf('Unit 6');
    const refSheetsPos = sidebarContent.indexOf('Reference Sheets');

    expect(unit3Pos).toBeGreaterThan(-1);
    expect(unit4Pos).toBeGreaterThan(-1);
    expect(unit5Pos).toBeGreaterThan(-1);
    expect(unit6Pos).toBeGreaterThan(-1);
    expect(refSheetsPos).toBeGreaterThan(-1);

    // Unit groups come after Unit 3
    expect(unit4Pos).toBeGreaterThan(unit3Pos);
    expect(unit5Pos).toBeGreaterThan(unit3Pos);
    expect(unit6Pos).toBeGreaterThan(unit3Pos);

    // Unit groups come before Reference Sheets
    expect(unit4Pos).toBeLessThan(refSheetsPos);
    expect(unit5Pos).toBeLessThan(refSheetsPos);
    expect(unit6Pos).toBeLessThan(refSheetsPos);

    // Units are in order
    expect(unit4Pos).toBeLessThan(unit5Pos);
    expect(unit5Pos).toBeLessThan(unit6Pos);
  });
});
