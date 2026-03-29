// Feature: leveled-training-program, Property 1: Lesson structural completeness
// Feature: leveled-training-program, Property 12: Lessons include Key Terms section
// **Validates: Requirements 1.3, 2.3, 3.3, 5.1, 5.3, 5.4, 18.6**

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import fc from 'fast-check';

const unitDirs = ['unit-4', 'unit-5', 'unit-6'];
const basePath = 'src/content/docs';

function getLessonFiles(): string[] {
  const lessons: string[] = [];
  for (const unit of unitDirs) {
    const dirPath = path.join(basePath, unit);
    const files = readdirSync(dirPath).filter(
      (f) => f.startsWith('lesson-') && f.endsWith('.mdx')
    );
    for (const file of files) {
      lessons.push(path.join(dirPath, file));
    }
  }
  return lessons;
}

const lessonFiles = getLessonFiles();

describe('Property 1: Lesson structural completeness', () => {
  it('should find at least one lesson file', () => {
    expect(lessonFiles.length).toBeGreaterThan(0);
  });

  it('every lesson has required frontmatter fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...lessonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          // Check frontmatter block exists
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
      { numRuns: lessonFiles.length }
    );
  });

  it('every lesson has a "What You\'ll Learn" section', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...lessonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/What You'll Learn/);
        }
      ),
      { numRuns: lessonFiles.length }
    );
  });

  it('every lesson has at least one Quiz or Checkpoint component', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...lessonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          const hasQuiz = content.includes('<Quiz');
          const hasCheckpoint = content.includes('<Checkpoint');
          expect(hasQuiz || hasCheckpoint).toBe(true);
        }
      ),
      { numRuns: lessonFiles.length }
    );
  });

  it('every lesson has a "What\'s Next" section', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...lessonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/What's Next/);
        }
      ),
      { numRuns: lessonFiles.length }
    );
  });
});

describe('Property 12: Lessons include Key Terms section', () => {
  it('every lesson has a Key Terms section', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...lessonFiles),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toMatch(/Key Terms/);
        }
      ),
      { numRuns: lessonFiles.length }
    );
  });
});
