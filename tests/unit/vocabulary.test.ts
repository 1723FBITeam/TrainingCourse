// Unit test: Vocabulary quiz/checkpoint per unit
// Requirements: 18.2

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

const basePath = 'src/content/docs';
const unitDirs = ['unit-4', 'unit-5', 'unit-6'];

describe('Vocabulary reinforcement per unit', () => {
  for (const unit of unitDirs) {
    it(`${unit} has at least one Quiz or Checkpoint testing vocabulary`, () => {
      const dirPath = path.join(basePath, unit);
      const files = readdirSync(dirPath).filter((f) => f.endsWith('.mdx'));

      let hasVocabQuiz = false;
      for (const file of files) {
        const content = readFileSync(path.join(dirPath, file), 'utf-8');
        if (content.includes('<Quiz') || content.includes('<Checkpoint')) {
          hasVocabQuiz = true;
          break;
        }
      }

      expect(hasVocabQuiz).toBe(true);
    });
  }
});
