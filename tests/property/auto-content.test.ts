// Feature: leveled-training-program, Property 11: Autonomous lessons reference PathPlanner documentation
// **Validates: Requirements 9.10**

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import fc from 'fast-check';

const autoLessonFiles = [
  path.join('src/content/docs/unit-4/lesson-4.12-auto-reading.mdx'),
  path.join('src/content/docs/unit-5/lesson-5.13-pathplanner-create.mdx'),
  path.join('src/content/docs/unit-6/lesson-6.16-pathplanner-advanced.mdx'),
];

describe('Property 11: Autonomous lessons reference PathPlanner documentation', () => {
  it('should have auto lessons across all units', () => {
    expect(autoLessonFiles.length).toBe(3);
  });

  it('every auto lesson links to pathplanner.dev', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...autoLessonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toContain('pathplanner.dev');
        }
      ),
      { numRuns: autoLessonFiles.length }
    );
  });
});
