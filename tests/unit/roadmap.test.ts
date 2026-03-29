// Unit test: Roadmap page existence and frontmatter
// Requirements: 7.4

import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import path from 'path';

const roadmapPath = path.join('src/content/docs/roadmap.mdx');

describe('Roadmap page', () => {
  it('roadmap.mdx exists', () => {
    expect(existsSync(roadmapPath)).toBe(true);
  });

  it('roadmap.mdx has expected frontmatter', () => {
    const content = readFileSync(roadmapPath, 'utf-8');
    expect(content).toMatch(/^---\r?\n/);
    const frontmatter = content.split('---')[1];
    expect(frontmatter).toMatch(/title:/);
    expect(frontmatter).toMatch(/description:/);
    expect(frontmatter).toMatch(/sidebar:/);
    expect(frontmatter).toMatch(/prev:/);
    expect(frontmatter).toMatch(/next:/);
  });

  it('roadmap.mdx contains key sections', () => {
    const content = readFileSync(roadmapPath, 'utf-8');
    expect(content).toMatch(/Pre-Season/);
    expect(content).toMatch(/Build Season/);
    expect(content).toMatch(/Competition/);
  });
});
