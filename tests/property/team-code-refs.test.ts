// Feature: leveled-training-program, Property 3: Team code references use robotConfig and GitHubLink
// **Validates: Requirements 1.5, 5.2, 5.5, 9.9**

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import fc from 'fast-check';

const unitDirs = ['unit-4', 'unit-5', 'unit-6'];
const basePath = 'src/content/docs';

function getContentFiles(): string[] {
  const files: string[] = [];
  for (const unit of unitDirs) {
    const dirPath = path.join(basePath, unit);
    const mdxFiles = readdirSync(dirPath).filter((f) => f.endsWith('.mdx'));
    for (const file of mdxFiles) {
      files.push(path.join(dirPath, file));
    }
  }
  return files;
}

function usesGitHubLink(content: string): boolean {
  return content.includes('<GitHubLink');
}

function importsGitHubLink(content: string): boolean {
  return content.includes("from '../../../components/GitHubLink'") ||
    content.includes('from "../../../components/GitHubLink"');
}

function importsRobotConfig(content: string): boolean {
  return content.includes("from '../../../config/robot-references'") ||
    content.includes('from "../../../config/robot-references"');
}

const contentFiles = getContentFiles();

// Filter to only files that use GitHubLink
const filesUsingGitHubLink = contentFiles.filter((f) => {
  const content = readFileSync(f, 'utf-8');
  return usesGitHubLink(content);
});

describe('Property 3: Team code references use robotConfig and GitHubLink', () => {
  it('should find at least one file using GitHubLink', () => {
    expect(filesUsingGitHubLink.length).toBeGreaterThan(0);
  });

  it('every file using GitHubLink imports it correctly', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...filesUsingGitHubLink),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(importsGitHubLink(content)).toBe(true);
        }
      ),
      { numRuns: filesUsingGitHubLink.length }
    );
  });

  it('every file using GitHubLink also imports robotConfig', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...filesUsingGitHubLink),
        (filePath: string) => {
          const content = readFileSync(filePath, 'utf-8');
          expect(importsRobotConfig(content)).toBe(true);
        }
      ),
      { numRuns: filesUsingGitHubLink.length }
    );
  });
});
