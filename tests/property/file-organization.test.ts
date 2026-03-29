// Feature: leveled-training-program, Property 4: Content files reside in correct unit directories
// Feature: leveled-training-program, Property 6: Sidebar unit groups contain all content entries
// Feature: leveled-training-program, Property 10: Autonomous content spans all units
// **Validates: Requirements 4.6, 1.1, 2.1, 3.1, 4.1, 4.2, 9.1**

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import fc from 'fast-check';

const unitDirs = ['unit-4', 'unit-5', 'unit-6'];
const basePath = 'src/content/docs';

function getMdxFiles(unit: string): string[] {
  const dirPath = path.join(basePath, unit);
  return readdirSync(dirPath).filter(
    (f) => f.endsWith('.mdx') && !f.startsWith('.')
  );
}

function getAllMdxFiles(): { unit: string; file: string }[] {
  const result: { unit: string; file: string }[] = [];
  for (const unit of unitDirs) {
    for (const file of getMdxFiles(unit)) {
      result.push({ unit, file });
    }
  }
  return result;
}

const allFiles = getAllMdxFiles();
const sidebarContent = readFileSync('astro.config.mjs', 'utf-8');

describe('Property 4: Content files reside in correct unit directories', () => {
  it('should find content files across all units', () => {
    expect(allFiles.length).toBeGreaterThan(0);
  });

  it('every MDX file follows the naming pattern {lesson|activity}-{unit}.{seq}-{slug}.mdx', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allFiles),
        ({ unit, file }: { unit: string; file: string }) => {
          const unitNum = unit.replace('unit-', '');
          const pattern = new RegExp(
            `^(lesson|activity)-${unitNum}\\.\\d+-[a-z0-9-]+\\.mdx$`
          );
          expect(file).toMatch(pattern);
        }
      ),
      { numRuns: allFiles.length }
    );
  });

  it('file unit number matches directory unit number', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allFiles),
        ({ unit, file }: { unit: string; file: string }) => {
          const unitNum = unit.replace('unit-', '');
          // Extract unit number from filename (e.g., lesson-4.5 -> 4)
          const match = file.match(/^(?:lesson|activity)-(\d+)\./);
          expect(match).not.toBeNull();
          expect(match![1]).toBe(unitNum);
        }
      ),
      { numRuns: allFiles.length }
    );
  });
});

describe('Property 6: Sidebar unit groups contain all content entries', () => {
  it('every MDX file in unit directories has a sidebar entry in astro.config.mjs', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allFiles),
        ({ unit, file }: { unit: string; file: string }) => {
          // Derive the expected link slug from the filename
          // e.g., lesson-4.1-wpilib-deep-dive.mdx -> /unit-4/lesson-41-wpilib-deep-dive
          const slug = file
            .replace('.mdx', '')
            .replace(/(\d+)\.(\d+)/, '$1$2'); // Remove dot from version number
          const expectedLink = `/${unit}/${slug}`;
          expect(sidebarContent).toContain(expectedLink);
        }
      ),
      { numRuns: allFiles.length }
    );
  });
});

describe('Property 10: Autonomous content spans all units', () => {
  it('each unit has at least one auto/PathPlanner file', () => {
    for (const unit of unitDirs) {
      const files = getMdxFiles(unit);
      const autoFiles = files.filter(
        (f) =>
          f.includes('auto') ||
          f.includes('pathplanner') ||
          f.includes('autonomous')
      );
      expect(
        autoFiles.length,
        `${unit} should have at least one auto/PathPlanner file`
      ).toBeGreaterThanOrEqual(1);
    }
  });
});
