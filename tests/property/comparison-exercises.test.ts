// Feature: leveled-training-program, Property 9: Comparison exercises include required structure
// **Validates: Requirements 8.2**

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import fc from 'fast-check';

const comparisonFiles = [
  path.join('src/content/docs/unit-5/activity-5.7-compare-subsystem.mdx'),
  path.join('src/content/docs/unit-5/activity-5.15-compare-auto-routines.mdx'),
  path.join('src/content/docs/unit-6/activity-6.12-compare-state-machines.mdx'),
  path.join('src/content/docs/unit-6/activity-6.21-compare-drivetrain.mdx'),
];

describe('Property 9: Comparison exercises include required structure', () => {
  it('should have at least 3 comparison exercise files', () => {
    expect(comparisonFiles.length).toBeGreaterThanOrEqual(3);
  });

  it('every comparison exercise includes a GitHub repository URL', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...comparisonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/github\.com/i);
        }
      ),
      { numRuns: comparisonFiles.length }
    );
  });

  it('every comparison exercise includes a file path to examine', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...comparisonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          // Should reference a file/folder to examine
          expect(content).toMatch(/[Ff]ile|[Ff]older|path/);
        }
      ),
      { numRuns: comparisonFiles.length }
    );
  });

  it('every comparison exercise includes guiding questions', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...comparisonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/[Gg]uiding [Qq]uestions/);
        }
      ),
      { numRuns: comparisonFiles.length }
    );
  });

  it('every comparison exercise includes a findings table', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...comparisonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          // Check for markdown table with comparison columns
          expect(content).toMatch(/Their Team.*Our Team|Our Team.*Their Team/);
        }
      ),
      { numRuns: comparisonFiles.length }
    );
  });
});
