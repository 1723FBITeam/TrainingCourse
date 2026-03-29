// Feature: leveled-training-program, Property 2: Activity structural completeness
// **Validates: Requirements 1.4, 2.4, 3.4, 5.1, 5.3, 5.4**

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import fc from 'fast-check';

const unitDirs = ['unit-4', 'unit-5', 'unit-6'];
const basePath = 'src/content/docs';

function getActivityFiles(): string[] {
  const activities: string[] = [];
  for (const unit of unitDirs) {
    const dirPath = path.join(basePath, unit);
    const files = readdirSync(dirPath).filter(
      (f) => f.startsWith('activity-') && f.endsWith('.mdx')
    );
    for (const file of files) {
      activities.push(path.join(dirPath, file));
    }
  }
  return activities;
}

const activityFiles = getActivityFiles();

describe('Property 2: Activity structural completeness', () => {
  it('should find at least one activity file', () => {
    expect(activityFiles.length).toBeGreaterThan(0);
  });

  it('every activity has required frontmatter fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...activityFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/^---\r?\n/);
          const frontmatter = content.split('---')[1];
          expect(frontmatter).toMatch(/title:/);
          expect(frontmatter).toMatch(/description:/);
          expect(frontmatter).toMatch(/sidebar:/);
          expect(frontmatter).toMatch(/order:/);
          expect(frontmatter).toMatch(/prev:/);
          expect(frontmatter).toMatch(/next:/);
        }
      ),
      { numRuns: activityFiles.length }
    );
  });

  it('every activity has a "Goal" section', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...activityFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/Goal/);
        }
      ),
      { numRuns: activityFiles.length }
    );
  });

  it('every activity has a "What\'s Next" section', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...activityFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/What's Next/);
        }
      ),
      { numRuns: activityFiles.length }
    );
  });
});
