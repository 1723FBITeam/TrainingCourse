# FRC Programming 1: Reading Our Robot Code

An interactive training course built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) that teaches FRC students to navigate, read, and safely contribute to a real robot codebase.

The course covers 7 lessons (Lesson 0–6), 6 hands-on units, and 4 team deliverables organized across four progressive layers:

- **Layer 0** — Git & GitHub prerequisites
- **Layer 1** — Project orientation (structure, lifecycle)
- **Layer 2** — Reading core robot flow (subsystems, commands, bindings)
- **Layer 3** — Safe contribution (constants, dashboard outputs, simple commands)

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (comes with Node.js)

## Getting Started

```bash
cd training-course
npm install
```

## Local Development

Start the dev server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/training-course/`. Changes to MDX content and React components will hot-reload in the browser.

## Building

Generate the production static site:

```bash
npm run build
```

Output goes to `dist/`. To preview the built site locally:

```bash
npm run preview
```

## Running Tests

```bash
npm test
```

This runs Vitest in single-run mode. The test framework is configured with jsdom and React Testing Library for component tests, plus fast-check for property-based tests.

## Project Structure

```
training-course/
├── src/
│   ├── components/          # React interactive components
│   │   ├── Quiz.tsx         # Multiple-choice quiz with feedback
│   │   ├── AnswerReveal.tsx # Click-to-expand answer block
│   │   ├── Checkpoint.tsx   # Self-check card with embedded reveal
│   │   ├── CodeTrace.tsx    # Step-by-step execution trace timeline
│   │   ├── CodeReading.tsx  # 5-question Code Reading Framework
│   │   └── GitHubLink.tsx   # Styled link to file/line on GitHub
│   ├── config/
│   │   └── robot-references.ts  # All robot-specific values (single source of truth)
│   ├── content/
│   │   └── docs/            # MDX lesson, unit, and deliverable pages
│   │       ├── index.mdx
│   │       ├── instructor-setup.mdx
│   │       ├── layer-0/     # Lesson 0
│   │       ├── layer-1/     # Lessons 1–2, Unit 1
│   │       ├── layer-2/     # Lessons 3–5, Units 2, 3, 6
│   │       ├── layer-3/     # Lesson 6, Units 4–5
│   │       └── deliverables/
│   └── styles/
│       └── custom.css       # Theme overrides
├── tests/
│   ├── unit/                # Component unit tests
│   └── property/            # Property-based tests
├── public/images/           # Static images
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages deployment
├── astro.config.mjs         # Astro + Starlight + React config
├── vitest.config.ts         # Test runner config
├── tsconfig.json
└── package.json
```

## Editing Content

All course content lives in `src/content/docs/` as `.mdx` files. Each file has YAML frontmatter (title, description, sidebar order) followed by Markdown with embedded React components.

### Adding or editing a lesson

1. Open the relevant `.mdx` file in `src/content/docs/`
2. Edit the Markdown content or React component usage
3. The dev server hot-reloads — check your changes in the browser
4. Run `npm run build` to verify the full site compiles

### Using interactive components in MDX

Import components at the top of the file (after frontmatter) and use them with `client:load`:

```mdx
import { Quiz } from '../../../components/Quiz';
import { Checkpoint } from '../../../components/Checkpoint';

<Quiz
  client:load
  question="Which file starts the robot program?"
  options={["Robot.java", "Main.java", "RobotContainer.java"]}
  correctIndex={1}
  explanation="Main.java contains the main() method."
/>

<Checkpoint client:load title="Check Your Understanding" prompt="What does RobotContainer do?">
  It creates subsystems and wires buttons to commands.
</Checkpoint>
```

### Updating robot-specific references

All robot-specific values (file paths, subsystem names, CAN IDs, GitHub repo URL) are centralized in `src/config/robot-references.ts`. When adapting the course for a new season:

1. Update `robot-references.ts` with the new robot's metadata
2. Review and update inline Java code snippets in lesson MDX files
3. Update CodeTrace steps in unit files to match new execution paths
4. Run `npm run build` to verify everything compiles

See the Instructor Setup Guide page in the course for a full checklist.

## Deployment

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to `main`.

To configure for your repo, update `site` and `base` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://your-org.github.io',
  base: '/your-repo-name',
  // ...
});
```

## Relationship to Robot Code

This project is completely independent from the robot code in `2026code/`. It has no build-time dependency on the robot project. All robot code references use:

- **GitHub links** via the `GitHubLink` component (configured in `robot-references.ts`)
- **Inline code snippets** copied into MDX as static fenced code blocks
