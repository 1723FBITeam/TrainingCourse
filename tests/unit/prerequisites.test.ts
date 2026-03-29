// Unit test: Prerequisites callout in first lesson of each unit
// Requirements: 7.1, 7.2, 7.3

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';

const basePath = 'src/content/docs';

describe('Prerequisites in first lessons', () => {
  it('Unit 4 first lesson contains prerequisites referencing Units 0–3', () => {
    const content = readFileSync(
      path.join(basePath, 'unit-4/lesson-4.1-wpilib-deep-dive.mdx'),
      'utf-8'
    );
    expect(content).toMatch(/[Cc]omplete.*Units?\s*0/i);
  });

  it('Unit 5 first lesson contains prerequisites referencing Units 0–4', () => {
    const content = readFileSync(
      path.join(basePath, 'unit-5/lesson-5.1-deploy-test-debug.mdx'),
      'utf-8'
    );
    expect(content).toMatch(/[Cc]omplete.*Units?\s*0/i);
  });

  it('Unit 6 first lesson contains prerequisites referencing Unit 5', () => {
    const content = readFileSync(
      path.join(basePath, 'unit-6/lesson-6.1-advantagekit.mdx'),
      'utf-8'
    );
    expect(content).toMatch(/[Cc]omplete.*Unit\s*5/i);
  });
});
