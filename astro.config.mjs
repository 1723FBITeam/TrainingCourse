import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://1723FBITeam.github.io',
  base: '/TrainingCourse',
  integrations: [
    starlight({
      title: 'FRC Programming 1: Reading Our Robot Code',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Welcome', link: '/' },
        { label: 'Instructor Setup', link: '/instructor-setup' },
        {
          label: 'Layer 0: Prerequisites',
          items: [
            { label: 'Lesson 0: Git & GitHub', link: '/layer-0/lesson-0-git-github' },
          ],
        },
        {
          label: 'Layer 1: Orientation',
          items: [
            { label: 'Lesson 1: Project Structure', link: '/layer-1/lesson-1-project-structure' },
            { label: 'Lesson 2: Robot Lifecycle', link: '/layer-1/lesson-2-robot-lifecycle' },
            { label: 'Unit 1: Open & Build', link: '/layer-1/unit-1-open-and-build' },
          ],
        },
        {
          label: 'Layer 2: Core Flow',
          items: [
            { label: 'Lesson 3: Subsystems', link: '/layer-2/lesson-3-subsystems' },
            { label: 'Lesson 4: Commands', link: '/layer-2/lesson-4-commands' },
            { label: 'Lesson 5: RobotContainer', link: '/layer-2/lesson-5-robotcontainer' },
            { label: 'Unit 2: Trace a Button', link: '/layer-2/unit-2-trace-button' },
            { label: 'Unit 3: Trace a Sensor', link: '/layer-2/unit-3-trace-sensor' },
            { label: 'Unit 6: Autonomous', link: '/layer-2/unit-6-autonomous' },
          ],
        },
        {
          label: 'Layer 3: Safe Contribution',
          items: [
            { label: 'Lesson 6: Constants & Safe Edits', link: '/layer-3/lesson-6-constants-safe-edits' },
            { label: 'Unit 4: Small Change', link: '/layer-3/unit-4-small-change' },
            { label: 'Unit 5: Add a Feature', link: '/layer-3/unit-5-add-feature' },
          ],
        },
        {
          label: 'Deliverables',
          items: [
            { label: 'Code Map', link: '/deliverables/deliverable-code-map' },
            { label: 'Trace Worksheet', link: '/deliverables/deliverable-trace-worksheet' },
            { label: 'Glossary', link: '/deliverables/deliverable-glossary' },
            { label: 'Code Reading Checklist', link: '/deliverables/deliverable-checklist' },
          ],
        },
      ],
    }),
    react(),
  ],
});
