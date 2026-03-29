import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://1723FBITeam.github.io',
  base: '/TrainingCourse',
  integrations: [
    starlight({
      title: 'Team 1723 FBI — FRC Programming Training',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/1723FBITeam/Drive2026FBI',
        youtube: 'https://www.youtube.com/@firstbotsofindependence2193',
        instagram: 'https://www.instagram.com/frc1723/',
      },
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
          label: '📅 Weekly Roadmap',
          link: '/roadmap',
        },
        {
          label: 'Unit 4: Going Deeper',
          items: [
            { label: 'Lesson 4.1: WPILib Deep Dive', link: '/unit-4/lesson-41-wpilib-deep-dive' },
            { label: 'Lesson 4.2: Git Workflow', link: '/unit-4/lesson-42-git-workflow' },
            { label: 'Activity 4.3: Create a Pull Request', link: '/unit-4/activity-43-git-pr-exercise' },
            { label: 'Activity 4.4: Explore Your Code', link: '/unit-4/activity-44-explore-your-code' },
            { label: 'Lesson 4.5: Java Patterns in FRC', link: '/unit-4/lesson-45-java-patterns-frc' },
            { label: 'Activity 4.6: Find Java Patterns', link: '/unit-4/activity-46-find-java-patterns' },
            { label: 'Lesson 4.7: Constants, Subsystems & Commands', link: '/unit-4/lesson-47-constants-subsystems-commands' },
            { label: 'Activity 4.8: Trace a New Button', link: '/unit-4/activity-48-trace-a-new-button' },
            { label: 'Lesson 4.9: NetworkTables Basics', link: '/unit-4/lesson-49-networktables' },
            { label: 'Activity 4.10: Explore NetworkTables', link: '/unit-4/activity-410-explore-networktables' },
            { label: 'Lesson 4.11: Game Manual for Programmers', link: '/unit-4/lesson-411-game-manual-for-programmers' },
            { label: 'Lesson 4.12: Reading Auto Routines', link: '/unit-4/lesson-412-auto-reading' },
            { label: 'Activity 4.13: Read an Auto', link: '/unit-4/activity-413-read-an-auto' },
          ],
        },
        {
          label: 'Unit 5: Community & Tools',
          items: [
            { label: 'Lesson 5.1: Deploy, Test, Debug', link: '/unit-5/lesson-51-deploy-test-debug' },
            { label: 'Activity 5.2: Deploy-Test-Fix Cycle', link: '/unit-5/activity-52-deploy-test-fix' },
            { label: 'Lesson 5.3: CAN Bus & Hardware Debugging', link: '/unit-5/lesson-53-can-bus-debugging' },
            { label: 'Activity 5.4: Inspect CAN Devices', link: '/unit-5/activity-54-inspect-can-devices' },
            { label: 'Lesson 5.5: Chief Delphi', link: '/unit-5/lesson-55-chief-delphi' },
            { label: 'Lesson 5.6: Reading Top Team Code', link: '/unit-5/lesson-56-reading-top-team-code' },
            { label: 'Activity 5.7: Compare a Subsystem', link: '/unit-5/activity-57-compare-subsystem' },
            { label: 'Lesson 5.8: Debugging with Data', link: '/unit-5/lesson-58-debugging-with-data' },
            { label: 'Lesson 5.9: Vendor Docs Deep Dive', link: '/unit-5/lesson-59-vendor-docs-deep-dive' },
            { label: 'Activity 5.10: Use a Vendor Example', link: '/unit-5/activity-510-vendor-example' },
            { label: 'Lesson 5.11: Swerve Drive Concepts', link: '/unit-5/lesson-511-swerve-concepts' },
            { label: 'Activity 5.12: Trace Swerve Input', link: '/unit-5/activity-512-trace-swerve-input' },
            { label: 'Lesson 5.13: Creating Paths & Named Commands', link: '/unit-5/lesson-513-pathplanner-create' },
            { label: 'Activity 5.14: Build an Auto Routine', link: '/unit-5/activity-514-build-an-auto' },
            { label: 'Activity 5.15: Compare Auto Routines', link: '/unit-5/activity-515-compare-auto-routines' },
          ],
        },
        {
          label: 'Unit 6: Advanced Engineering',
          items: [
            { label: 'Lesson 6.1: AdvantageKit', link: '/unit-6/lesson-61-advantagekit' },
            { label: 'Activity 6.2: Replay a Match', link: '/unit-6/activity-62-replay-a-match' },
            { label: 'Lesson 6.3: Simulation', link: '/unit-6/lesson-63-simulation' },
            { label: 'Activity 6.4: Simulate an Auto', link: '/unit-6/activity-64-simulate-an-auto' },
            { label: 'Lesson 6.5: Control Theory', link: '/unit-6/lesson-65-control-theory' },
            { label: 'Activity 6.6: Tune a PID Loop', link: '/unit-6/activity-66-tune-a-pid' },
            { label: 'Lesson 6.7: Vision Processing', link: '/unit-6/lesson-67-vision-processing' },
            { label: 'Lesson 6.8: Pose Estimation', link: '/unit-6/lesson-68-pose-estimation' },
            { label: 'Activity 6.9: Analyze Pose Data', link: '/unit-6/activity-69-analyze-pose-data' },
            { label: 'Lesson 6.10: State Machines', link: '/unit-6/lesson-610-state-machines' },
            { label: 'Activity 6.11: Design a State Machine', link: '/unit-6/activity-611-design-state-machine' },
            { label: 'Activity 6.12: Compare State Machines', link: '/unit-6/activity-612-compare-state-machines' },
            { label: 'Lesson 6.13: Unit Testing', link: '/unit-6/lesson-613-unit-testing' },
            { label: 'Activity 6.14: Write a Test', link: '/unit-6/activity-614-write-a-test' },
            { label: 'Lesson 6.15: Architecture Patterns', link: '/unit-6/lesson-615-architecture-patterns' },
            { label: 'Lesson 6.16: Advanced PathPlanner', link: '/unit-6/lesson-616-pathplanner-advanced' },
            { label: 'Activity 6.17: Advanced Auto Feature', link: '/unit-6/activity-617-advanced-auto' },
            { label: 'Activity 6.18: Iterate an Auto', link: '/unit-6/activity-618-iterate-auto' },
            { label: 'Lesson 6.19: Competition Readiness', link: '/unit-6/lesson-619-competition-readiness' },
            { label: 'Activity 6.20: Competition Debug Sim', link: '/unit-6/activity-620-competition-debug-sim' },
            { label: 'Activity 6.21: Compare Drivetrains', link: '/unit-6/activity-621-compare-drivetrain' },
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
