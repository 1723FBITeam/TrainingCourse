# Team 1723 FBI — FRC Programming Training

An interactive training course built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) that teaches FRC students to navigate, read, and contribute to a real robot codebase.

**Live site:** [1723fbiteam.github.io/TrainingCourse](https://1723fbiteam.github.io/TrainingCourse/)

## Course Structure

The course has 7 units with 62 lessons and activities, progressing from zero to competition-ready:

| Unit | Title | What Students Learn |
|------|-------|-------------------|
| **0** | Prerequisites | Git & GitHub setup |
| **1** | Orientation | Project structure, robot lifecycle, build the project |
| **2** | Core Flow | Subsystems, commands, RobotContainer, tracing buttons and sensors |
| **3** | Safe Contribution | Constants, safe edits, creating a simple command |
| **4** | Going Deeper | WPILib docs, Git workflow, Java patterns, NetworkTables, auto routines |
| **5** | Community & Tools | Deploy/test, CAN bus, Chief Delphi, top team code, swerve, PathPlanner |
| **6** | Advanced Engineering | AdvantageKit, simulation, PID, vision, state machines, competition prep |

Plus a weekly roadmap, glossary, code map, trace worksheet, and code reading checklist.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (comes with Node.js)

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321/TrainingCourse/`.

## Building

```bash
npm run build     # Generate static site to dist/
npm run preview   # Preview the built site locally
```

## Running Tests

```bash
npm test
```

Runs 12 test files (property-based + unit tests) covering lesson structure, activity structure, sidebar integrity, file organization, and more.

## Project Structure

```
├── src/
│   ├── components/              # React interactive components
│   │   ├── Quiz.tsx             # Multiple-choice quiz
│   │   ├── Checkpoint.tsx       # Self-check card
│   │   ├── AnswerReveal.tsx     # Click-to-expand answer
│   │   ├── CodeTrace.tsx        # Execution trace timeline
│   │   ├── CodeReading.tsx      # 5-question Code Reading Framework
│   │   └── GitHubLink.tsx       # Link to file/line on GitHub
│   ├── config/
│   │   └── robot-references.ts  # Robot-specific values (CAN IDs, repo URL, etc.)
│   ├── content/docs/
│   │   ├── unit-0/ through unit-6/  # Course content (MDX)
│   │   ├── reference-sheets/       # Glossary, code map, trace worksheet, checklist
│   │   ├── index.mdx               # Homepage
│   │   ├── roadmap.mdx             # Week-by-week pacing guide
│   │   └── instructor-setup.mdx    # Instructor configuration guide
│   └── styles/
│       └── custom.css           # Team 1723 green theme
├── tests/
│   ├── property/                # Property-based content tests
│   └── unit/                    # Unit tests
├── astro.config.mjs             # Astro + Starlight config (sidebar, social links)
├── vitest.config.ts             # Test runner config
└── package.json
```

## Adapting for a New Season

1. Update `src/config/robot-references.ts` with the new robot's metadata (repo URL, subsystems, CAN IDs, commands)
2. Update inline Java code snippets in lesson MDX files to match the new robot code
3. Update CodeTrace steps in activity files to match new execution paths
4. Run `npm run build` to verify everything compiles
5. See the Instructor Setup Guide page for a full checklist

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to `main`.

To configure for your repo, update `site` and `base` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://your-org.github.io',
  base: '/your-repo-name',
});
```
