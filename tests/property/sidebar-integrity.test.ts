// Feature: leveled-training-program, Property 5: Sidebar preserves existing groups
// **Validates: Requirements 4.3**

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';

const sidebarContent = readFileSync('astro.config.mjs', 'utf-8');

describe('Property 5: Sidebar preserves existing groups', () => {
  const requiredGroups = [
    'Unit 0: Prerequisites',
    'Unit 1: Orientation',
    'Unit 2: Core Flow',
    'Unit 3: Safe Contribution',
    'Reference Sheets',
    'Instructors',
  ];

  it('all original sidebar groups remain present', () => {
    for (const group of requiredGroups) {
      expect(
        sidebarContent,
        `Sidebar should contain group "${group}"`
      ).toContain(group);
    }
  });

  it('sidebar contains the new unit groups', () => {
    expect(sidebarContent).toContain('Unit 4');
    expect(sidebarContent).toContain('Unit 5');
    expect(sidebarContent).toContain('Unit 6');
  });

  it('sidebar contains the Weekly Roadmap link', () => {
    expect(sidebarContent).toMatch(/Roadmap/);
  });
});
