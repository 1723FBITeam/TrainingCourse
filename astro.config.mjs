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
        {
          label: 'Unit 0: Prerequisites',
          items: [
            { label: 'Lesson 0.1: Git & GitHub', link: '/unit-0/lesson-01-git-github' },
          ],
        },
        {
          label: 'Unit 1: Orientation',
          items: [
            { label: 'Lesson 1.1: Project Structure', link: '/unit-1/lesson-11-project-structure' },
            { label: 'Lesson 1.2: Robot Lifecycle', link: '/unit-1/lesson-12-robot-lifecycle' },
            { label: 'Activity 1.3: Open & Build', link: '/unit-1/activity-13-open-and-build' },
          ],
        },
        {
          label: 'Unit 2: Core Flow',
          items: [
            { label: 'Lesson 2.1: Subsystems', link: '/unit-2/lesson-21-subsystems' },
            { label: 'Lesson 2.2: Commands', link: '/unit-2/lesson-22-commands' },
            { label: 'Lesson 2.3: RobotContainer', link: '/unit-2/lesson-23-robotcontainer' },
            { label: 'Activity 2.4: Trace a Button', link: '/unit-2/activity-24-trace-button' },
            { label: 'Activity 2.5: Trace a Sensor', link: '/unit-2/activity-25-trace-sensor' },
            { label: 'Activity 2.6: Autonomous', link: '/unit-2/activity-26-autonomous' },
          ],
        },
        {
          label: 'Unit 3: Safe Contribution',
          items: [
            { label: 'Lesson 3.1: Constants & Safe Edits', link: '/unit-3/lesson-31-constants-safe-edits' },
            { label: 'Activity 3.2: Small Change', link: '/unit-3/activity-32-small-change' },
            { label: 'Activity 3.3: Add a Feature', link: '/unit-3/activity-33-add-feature' },
          ],
        },
        {
          label: 'Reference Sheets',
          items: [
            { label: 'Code Map', link: '/reference-sheets/code-map' },
            { label: 'Trace Worksheet', link: '/reference-sheets/trace-worksheet' },
            { label: 'Glossary', link: '/reference-sheets/glossary' },
            { label: 'Code Reading Checklist', link: '/reference-sheets/checklist' },
          ],
        },
        {
          label: 'Instructors',
          collapsed: true,
          items: [
            { label: 'Instructor Setup Guide', link: '/instructor-setup' },
          ],
        },
      ],
    }),
    react(),
  ],
});
