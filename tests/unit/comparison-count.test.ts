// Unit test: Comparison exercise count and coverage
// Requirements: 8.1, 8.3, 8.4

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

const basePath = 'src/content/docs';
const unitDirs = ['unit-5', 'unit-6'];

function findComparisonExercises(): { file: string; content: string }[] {
  const results: { file: string; content: string }[] = [];
  for (const unit of unitDirs) {
    const dirPath = path.join(basePath, unit);
    const files = readdirSync(dirPath).filter(
      (f) => f.startsWith('activity-') && f.endsWith('.mdx')
    );
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const content = readFileSync(filePath, 'utf-8');
      if (content.match(/[Cc]ompar/)) {
        results.push({ file: filePath, content });
      }
    }
  }
  return results;
}

const comparisonExercises = findComparisonExercises();

describe('Comparison exercise count', () => {
  it('at least 3 comparison exercises across Unit 5 and Unit 6', () => {
    expect(comparisonExercises.length).toBeGreaterThanOrEqual(3);
  });

  it('at least one comparison covers drivetrain', () => {
    const drivetrainComparisons = comparisonExercises.filter(
      (ex) => ex.content.match(/[Dd]rivetrain|[Ss]werve/i)
    );
    expect(drivetrainComparisons.length).toBeGreaterThanOrEqual(1);
  });

  it('at least one comparison covers autonomous routines', () => {
    const autoComparisons = comparisonExercises.filter(
      (ex) => ex.content.match(/[Aa]uto|[Aa]utonomous|[Pp]ath[Pp]lanner/i)
    );
    expect(autoComparisons.length).toBeGreaterThanOrEqual(1);
  });
});
