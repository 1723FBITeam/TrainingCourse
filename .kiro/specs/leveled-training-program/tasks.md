# Implementation Plan: Leveled Training Program

## Overview

This plan implements a multi-tier training program expansion for the FRC Programming Training Site. The work is organized infrastructure-first (sidebar, directories, resource page mods, roadmap, glossary), then content tier-by-tier (Tier 1 → Tier 2 → Tier 3), then tests. Each MDX file is an independent sub-task. All content follows the lesson/activity templates defined in the design document.

## Tasks

- [x] 1. Infrastructure setup and sidebar configuration
  - [x] 1.1 Update `astro.config.mjs` sidebar with new tier groups and roadmap link
    - Add the Weekly Roadmap link, 🟢 Tier 1, 🟡 Tier 2, and 🔴 Tier 3 sidebar groups after Unit 3 and before Reference Sheets
    - Include all 49 labeled entries (13 Tier 1 + 15 Tier 2 + 21 Tier 3) with correct link paths
    - Preserve all existing sidebar groups (Units 0–3, Reference Sheets, Resources, Instructors) unchanged
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 1.2 Create tier content directories
    - Create `src/content/docs/tier-1/`, `src/content/docs/tier-2/`, `src/content/docs/tier-3/`
    - _Requirements: 4.6_

  - [x] 1.3 Create the weekly roadmap page `src/content/docs/roadmap.mdx`
    - Include frontmatter with `sidebar.order: 0`, prev/next enabled
    - Sections: How to Use, Pre-Season (Weeks 1–4), Build Season (Weeks 5–10), Competition Prep (Weeks 11–14), Competition Season (Weeks 15+), Off-Season
    - _Requirements: 7.4_

  - [x] 1.4 Modify resource pages to cross-link to tier content
    - Add `:::note[📚 Structured Lessons Available]` callout to `src/content/docs/resources/beginner.mdx` linking to Tier 1
    - Add `:::note[📚 Structured Lessons Available]` callout to `src/content/docs/resources/intermediate.mdx` linking to Tier 2
    - Add `:::note[📚 Structured Lessons Available]` callout to `src/content/docs/resources/advanced.mdx` linking to Tier 3
    - Preserve all existing content on each page without removal or reordering
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 1.5 Extend the glossary with Tier 2 and Tier 3 terms
    - Add new terms to `src/content/docs/reference-sheets/glossary.mdx`: Odometry, Kinematics, Kalman Filter, State Machine, Superstructure Pattern, Field-Relative Control, Module State, Pose Estimator, Standard Deviation, Match Log, Hotfix Branch, NetworkTables, CAN Bus
    - _Requirements: 18.3, 18.4_

- [x] 2. Checkpoint — Verify infrastructure
  - Ensure the site builds successfully with the sidebar changes, new directories, roadmap, resource page mods, and glossary extension. Ask the user if questions arise.

- [x] 3. Tier 1 content — WPILib and code exploration
  - [x] 3.1 Create `src/content/docs/tier-1/lesson-1.1-wpilib-deep-dive.mdx`
    - Lesson: WPILib Documentation Deep Dive — navigating WPILib docs, Zero to Robot, command-based index, API javadocs
    - Include prerequisites callout: "Complete Units 0–3 (Core Curriculum) before starting Tier 1"
    - Include learning objectives, Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 1.1, 1.3, 1.6, 5.1, 5.3, 5.4, 7.1, 18.6_

  - [x] 3.2 Create `src/content/docs/tier-1/activity-1.2-explore-your-code.mdx`
    - Activity: Explore Your Own Robot Code — CodeReading exercises on 3 files students haven't opened
    - Use CodeReading component, GitHubLink, robotConfig
    - _Requirements: 1.2, 1.4, 1.5, 1.6, 5.2, 5.5_

- [x] 4. Tier 1 content — Java patterns
  - [x] 4.1 Create `src/content/docs/tier-1/lesson-1.3-java-patterns-frc.mdx`
    - Lesson: Java Patterns in FRC Code — lambdas, method references, enums, static final, inheritance, interfaces
    - Use real examples from team code via GitHubLink and robotConfig
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.6, 18.6_

  - [x] 4.2 Create `src/content/docs/tier-1/activity-1.4-find-java-patterns.mdx`
    - Activity: Find Java Patterns in Your Code — students locate one example of each pattern in team repo
    - _Requirements: 10.5, 1.4_

- [x] 5. Tier 1 content — Constants, subsystems, commands revisited
  - [x] 5.1 Create `src/content/docs/tier-1/lesson-1.5-constants-subsystems-commands.mdx`
    - Lesson: Constants, Subsystems & Commands Revisited — deeper dive building on Units 2–3
    - Use GitHubLink and robotConfig for team code references
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 1.1, 1.3, 1.5, 5.2, 18.6_

  - [x] 5.2 Create `src/content/docs/tier-1/activity-1.6-trace-a-new-button.mdx`
    - Activity: Trace a New Button — students pick an untraced button binding and produce a full CodeTrace
    - Use CodeTrace component, GitHubLink, robotConfig
    - _Requirements: 1.2, 1.4, 1.5_

- [x] 6. Tier 1 content — NetworkTables
  - [x] 6.1 Create `src/content/docs/tier-1/lesson-1.7-networktables.mdx`
    - Lesson: NetworkTables Basics — publish/subscribe model, SmartDashboard methods, Limelight data flow, auto chooser
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.6, 18.6_

  - [x] 6.2 Create `src/content/docs/tier-1/activity-1.8-explore-networktables.mdx`
    - Activity: Explore Live NetworkTables — use OutlineViewer or AdvantageScope NT viewer to document live entries
    - _Requirements: 11.5_

- [x] 7. Tier 1 content — Game manual, Git workflow, autonomous
  - [x] 7.1 Create `src/content/docs/tier-1/lesson-1.9-game-manual-for-programmers.mdx`
    - Lesson: FRC Game Manual for Programmers — control system rules, autonomous constraints, safety rules
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 1.1, 1.3, 18.6_

  - [x] 7.2 Create `src/content/docs/tier-1/lesson-1.10-git-workflow.mdx`
    - Lesson: Git & GitHub Team Workflow — branching strategy, pull requests, code review, merge conflicts
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 1.1, 1.3, 18.6_

  - [x] 7.3 Create `src/content/docs/tier-1/activity-1.11-git-pr-exercise.mdx`
    - Activity: Create a Pull Request — students create a branch, make a safe edit, open a PR, request review
    - _Requirements: 1.2, 1.4_

  - [x] 7.4 Create `src/content/docs/tier-1/lesson-1.12-auto-reading.mdx`
    - Lesson: Reading Autonomous Routines — read PathPlanner JSON files, identify paths and Named_Commands
    - Link to pathplanner.dev, use GitHubLink and robotConfig for team PathPlanner files
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 9.1, 9.2, 9.9, 9.10, 18.6_

  - [x] 7.5 Create `src/content/docs/tier-1/activity-1.13-read-an-auto.mdx`
    - Activity: Read an Auto Routine — open PathPlanner GUI, load team project, trace an existing auto routine
    - _Requirements: 9.3_

- [x] 8. Checkpoint — Verify Tier 1 content
  - Ensure all 13 Tier 1 MDX files exist, build successfully, and render in the sidebar. Ask the user if questions arise.

- [x] 9. Tier 2 content — Community learning and top team code
  - [x] 9.1 Create `src/content/docs/tier-2/lesson-2.1-chief-delphi.mdx`
    - Lesson: Chief Delphi as a Learning Resource — how to search, read build threads, find programming discussions
    - Include prerequisites callout: "Complete Units 0–3 and Tier 1 before starting Tier 2"
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 2.1, 2.3, 5.1, 5.3, 5.4, 7.2, 18.6_

  - [x] 9.2 Create `src/content/docs/tier-2/lesson-2.2-reading-top-team-code.mdx`
    - Lesson: Reading Top Team Code — navigating 254, 6328, 971, 1678 repos; what to look for
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 2.1, 2.3, 2.6, 18.6_

  - [x] 9.3 Create `src/content/docs/tier-2/activity-2.3-compare-subsystem.mdx`
    - Activity: Compare a Subsystem — Comparison_Exercise: pick a subsystem in a top team repo, compare to team's equivalent
    - Include GitHub repo URL, file path, guiding questions, findings table
    - _Requirements: 2.4, 2.5, 8.1, 8.2_

- [x] 10. Tier 2 content — Debugging and vendor docs
  - [x] 10.1 Create `src/content/docs/tier-2/lesson-2.4-debugging-with-data.mdx`
    - Lesson: Debugging with Shuffleboard & AdvantageScope — logging values, reading graphs, replaying matches
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 2.1, 2.3, 18.6_

  - [x] 10.2 Create `src/content/docs/tier-2/lesson-2.5-vendor-docs-deep-dive.mdx`
    - Lesson: Vendor Documentation Deep Dive — Phoenix 6 and REV deeper features, reading API docs, finding examples
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 2.1, 2.3, 18.6_

  - [x] 10.3 Create `src/content/docs/tier-2/activity-2.6-vendor-example.mdx`
    - Activity: Use a Vendor Example — students find and adapt a vendor example project for a team mechanism
    - _Requirements: 2.2, 2.4_

- [x] 11. Tier 2 content — Deploy, test, debug cycle
  - [x] 11.1 Create `src/content/docs/tier-2/lesson-2.7-deploy-test-debug.mdx`
    - Lesson: Deploying and Testing on the Robot — gradlew deploy, Driver_Station, enabling, troubleshooting
    - Include competition-day deployment scenarios guidance
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.6, 18.6_

  - [x] 11.2 Create `src/content/docs/tier-2/activity-2.8-deploy-test-fix.mdx`
    - Activity: Deploy-Test-Fix Cycle — practice deploying with an intentional issue, diagnose via DS output, fix
    - _Requirements: 12.5_

- [x] 12. Tier 2 content — CAN bus and hardware debugging
  - [x] 12.1 Create `src/content/docs/tier-2/lesson-2.9-can-bus-debugging.mdx`
    - Lesson: CAN Bus and Hardware Debugging — CAN architecture, Phoenix Tuner X, REV Hardware Client, DS error messages
    - Include troubleshooting flowchart for common hardware communication failures
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.7, 18.6_

  - [x] 12.2 Create `src/content/docs/tier-2/activity-2.10-inspect-can-devices.mdx`
    - Activity: Inspect CAN Devices — use diagnostic tools to document status of each CAN device on the robot
    - _Requirements: 13.6_

- [x] 13. Tier 2 content — Swerve drive concepts
  - [x] 13.1 Create `src/content/docs/tier-2/lesson-2.11-swerve-concepts.mdx`
    - Lesson: Swerve Drive Concepts — module states, field-relative vs robot-relative, odometry, kinematics, gyro
    - Use GitHubLink and robotConfig for CommandSwerveDrivetrain and TunerConstants references
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.7, 18.6_

  - [x] 13.2 Create `src/content/docs/tier-2/activity-2.12-trace-swerve-input.mdx`
    - Activity: Trace a Joystick Through Swerve Math — trace joystick input → kinematics → module states
    - Use GitHubLink and robotConfig for team's drivetrain code
    - _Requirements: 14.6_

- [x] 14. Tier 2 content — PathPlanner creation and auto routines
  - [x] 14.1 Create `src/content/docs/tier-2/lesson-2.13-pathplanner-create.mdx`
    - Lesson: Creating Paths and Named Commands — PathPlanner GUI path creation, registering Named_Commands, event markers, constraints
    - Link to pathplanner.dev, use GitHubLink and robotConfig
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 9.1, 9.4, 9.9, 9.10, 18.6_

  - [x] 14.2 Create `src/content/docs/tier-2/activity-2.14-build-an-auto.mdx`
    - Activity: Build an Auto Routine — create a path, register a Named_Command, compose an auto, verify in chooser
    - _Requirements: 9.5_

  - [x] 14.3 Create `src/content/docs/tier-2/activity-2.15-compare-auto-routines.mdx`
    - Activity: Compare Auto Routines — Comparison_Exercise: compare team's auto structure to a top team's approach
    - Include GitHub repo URL, file path, guiding questions, findings table
    - _Requirements: 8.1, 8.2, 8.4, 9.1_

- [x] 15. Checkpoint — Verify Tier 2 content
  - Ensure all 15 Tier 2 MDX files exist, build successfully, and render in the sidebar. Ask the user if questions arise.

- [x] 16. Tier 3 content — AdvantageKit and simulation
  - [x] 16.1 Create `src/content/docs/tier-3/lesson-3.1-advantagekit.mdx`
    - Lesson: AdvantageKit Logging and Replay — IO abstraction, structured logging, replay debugging
    - Include prerequisites callout: "Complete Tier 2 before starting Tier 3"
    - Link to docs.advantagekit.org
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 3.1, 3.3, 5.1, 5.3, 5.4, 7.3, 18.6_

  - [x] 16.2 Create `src/content/docs/tier-3/activity-3.2-replay-a-match.mdx`
    - Activity: Replay a Match — add logging to one subsystem, replay match data in AdvantageScope
    - _Requirements: 3.2, 3.4_

  - [x] 16.3 Create `src/content/docs/tier-3/lesson-3.3-simulation.mdx`
    - Lesson: Simulation Tools — WPILib simulation, physics sim, Glass/Shuffleboard in sim mode
    - Link to WPILib simulation docs
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 3.1, 3.3, 18.6_

  - [x] 16.4 Create `src/content/docs/tier-3/activity-3.4-simulate-an-auto.mdx`
    - Activity: Simulate an Auto Routine — run a PathPlanner auto in simulation without a physical robot
    - _Requirements: 3.2, 3.4_

- [x] 17. Tier 3 content — Control theory and vision
  - [x] 17.1 Create `src/content/docs/tier-3/lesson-3.5-control-theory.mdx`
    - Lesson: Control Theory: PID, Feedforward, Motion Profiling — PID terms, feedforward, TrapezoidProfile, Motion Magic
    - Link to Tyler Veness's textbook and WPILib PID docs
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 3.1, 3.3, 18.6_

  - [x] 17.2 Create `src/content/docs/tier-3/activity-3.6-tune-a-pid.mdx`
    - Activity: Tune a PID Loop — pick a mechanism, tune PID using AdvantageScope data
    - _Requirements: 3.2, 3.4_

  - [x] 17.3 Create `src/content/docs/tier-3/lesson-3.7-vision-processing.mdx`
    - Lesson: Vision Processing — AprilTag pose estimation, multi-camera fusion, latency compensation
    - Link to Limelight and PhotonVision docs
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 3.1, 3.3, 18.6_

- [x] 18. Tier 3 content — Pose estimation
  - [x] 18.1 Create `src/content/docs/tier-3/lesson-3.8-pose-estimation.mdx`
    - Lesson: Pose Estimation and Localization — odometry drift, Kalman filter intuition, standard deviations, vision fusion
    - Use GitHubLink and robotConfig for team's fuseCameraEstimate code
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5, 15.7, 18.6_

  - [x] 18.2 Create `src/content/docs/tier-3/activity-3.9-analyze-pose-data.mdx`
    - Activity: Analyze Pose Estimator Data — review match logs, evaluate pose accuracy, suggest SD tuning changes
    - _Requirements: 15.6_

- [x] 19. Tier 3 content — State machines
  - [x] 19.1 Create `src/content/docs/tier-3/lesson-3.10-state-machines.mdx`
    - Lesson: State Machines — states, transitions, guards; AutoShootCommand as implicit SM; enum+switch pattern; superstructure
    - Use GitHubLink and robotConfig for AutoShootCommand reference
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5, 18.6_

  - [x] 19.2 Create `src/content/docs/tier-3/activity-3.11-design-state-machine.mdx`
    - Activity: Design a State Machine — refactor a command sequence into an explicit state machine or design a new one
    - _Requirements: 16.6_

  - [x] 19.3 Create `src/content/docs/tier-3/activity-3.12-compare-state-machines.mdx`
    - Activity: Compare State Machine Implementations — Comparison_Exercise: examine a top team's SM and compare to team's command structure
    - Include GitHub repo URL, file path, guiding questions, findings table
    - _Requirements: 8.1, 8.2, 16.7_

- [x] 20. Tier 3 content — Unit testing and architecture
  - [x] 20.1 Create `src/content/docs/tier-3/lesson-3.13-unit-testing.mdx`
    - Lesson: Unit Testing Robot Code — JUnit with WPILib sim harness, testing commands, math utilities, state machines
    - Link to WPILib testing docs
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 3.1, 3.3, 18.6_

  - [x] 20.2 Create `src/content/docs/tier-3/activity-3.14-write-a-test.mdx`
    - Activity: Write a Unit Test — write a JUnit test for a command or utility in the team's code
    - _Requirements: 3.2, 3.4_

  - [x] 20.3 Create `src/content/docs/tier-3/lesson-3.15-architecture-patterns.mdx`
    - Lesson: Architecture Patterns from Top Teams — IO layers, superstructure, trigger-based, singleton patterns
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 3.1, 3.3, 18.6_

- [x] 21. Tier 3 content — Advanced PathPlanner
  - [x] 21.1 Create `src/content/docs/tier-3/lesson-3.16-pathplanner-advanced.mdx`
    - Lesson: Advanced PathPlanner — on-the-fly generation, path constraints, zone behavior, AutoBuilder composition
    - Link to pathplanner.dev, use GitHubLink and robotConfig
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 9.1, 9.6, 9.9, 9.10, 18.6_

  - [x] 21.2 Create `src/content/docs/tier-3/activity-3.17-advanced-auto.mdx`
    - Activity: Implement an Advanced Auto Feature — on-the-fly path gen, custom constraints, or AutoBuilder composition
    - _Requirements: 9.7_

  - [x] 21.3 Create `src/content/docs/tier-3/activity-3.18-iterate-auto.mdx`
    - Activity: Test and Iterate an Auto — run, observe, adjust waypoints/timing, re-test cycle
    - _Requirements: 9.8_

- [x] 22. Tier 3 content — Competition readiness and comparisons
  - [x] 22.1 Create `src/content/docs/tier-3/lesson-3.19-competition-readiness.mdx`
    - Lesson: Competition Readiness — pre-match checklist, pit debugging flowchart, match log analysis, hotfix branches
    - Include five-minute debugging flowchart, post-match review process guidance
    - Include Quiz, Checkpoint, Key Terms, What's Next
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 17.7, 18.6_

  - [x] 22.2 Create `src/content/docs/tier-3/activity-3.20-competition-debug-sim.mdx`
    - Activity: Simulated Competition Debugging — time-pressured debugging scenario: diagnose and fix within a fixed time limit
    - _Requirements: 17.6_

  - [x] 22.3 Create `src/content/docs/tier-3/activity-3.21-compare-drivetrain.mdx`
    - Activity: Compare Drivetrain Implementations — Comparison_Exercise: compare team's CommandSwerveDrivetrain to a top team's
    - Include GitHub repo URL, file path, guiding questions, findings table
    - _Requirements: 8.1, 8.2, 8.3_

- [x] 23. Checkpoint — Verify Tier 3 content
  - Ensure all 21 Tier 3 MDX files exist, build successfully, and render in the sidebar. Ask the user if questions arise.

- [x] 24. Property-based tests
  - [x] 24.1 Create `tests/property/lesson-structure.test.ts`
    - **Property 1: Lesson structural completeness** — every lesson has frontmatter, learning objectives, interactive component, What's Next
    - **Property 12: Lessons include Key Terms section** — every lesson has a Key Terms section
    - **Validates: Requirements 1.3, 2.3, 3.3, 5.1, 5.3, 5.4, 18.6**

  - [x] 24.2 Create `tests/property/activity-structure.test.ts`
    - **Property 2: Activity structural completeness** — every activity has frontmatter, Goal section, numbered steps, What's Next
    - **Validates: Requirements 1.4, 2.4, 3.4, 5.1, 5.3, 5.4**

  - [x] 24.3 Create `tests/property/team-code-refs.test.ts`
    - **Property 3: Team code references use robotConfig and GitHubLink** — every file referencing team code uses correct imports
    - **Validates: Requirements 1.5, 5.2, 5.5, 9.9**

  - [x] 24.4 Create `tests/property/file-organization.test.ts`
    - **Property 4: Content files reside in correct tier directories** — correct naming pattern
    - **Property 6: Sidebar tier groups contain all content entries** — every MDX file has a sidebar entry
    - **Property 10: Autonomous content spans all tiers** — each tier has at least one auto/PathPlanner file
    - **Validates: Requirements 4.6, 1.1, 2.1, 3.1, 4.1, 4.2, 9.1**

  - [x] 24.5 Create `tests/property/sidebar-integrity.test.ts`
    - **Property 5: Sidebar preserves existing groups** — all original sidebar groups remain unchanged
    - **Validates: Requirements 4.3**

  - [x] 24.6 Create `tests/property/resource-pages.test.ts`
    - **Property 8: Resource pages cross-link to tiers and preserve existing content** — callout present, original content preserved
    - **Validates: Requirements 6.1, 6.2, 6.3**

  - [x] 24.7 Create `tests/property/comparison-exercises.test.ts`
    - **Property 9: Comparison exercises include required structure** — GitHub URL, file path, guiding questions, findings table
    - **Validates: Requirements 8.2**

  - [x] 24.8 Create `tests/property/auto-content.test.ts`
    - **Property 11: Autonomous lessons reference PathPlanner documentation** — auto lessons link to pathplanner.dev
    - **Validates: Requirements 9.10**

- [x] 25. Unit tests
  - [x] 25.1 Create `tests/unit/sidebar-ordering.test.ts`
    - Test tier groups appear after Unit 3 and before Reference Sheets
    - Test sidebar labels contain 🟢, 🟡, 🔴 respectively
    - _Requirements: 4.4, 4.5_

  - [x] 25.2 Create `tests/unit/roadmap.test.ts`
    - Test `roadmap.mdx` exists with expected frontmatter
    - _Requirements: 7.4_

  - [x] 25.3 Create `tests/unit/comparison-count.test.ts`
    - Test at least 3 comparison exercises across Tier 2 and Tier 3
    - Test at least one comparison covers drivetrain
    - Test at least one comparison covers autonomous routines
    - _Requirements: 8.1, 8.3, 8.4_

  - [x] 25.4 Create `tests/unit/prerequisites.test.ts`
    - Test first lesson of each tier contains prerequisites callout
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 25.5 Create `tests/unit/vocabulary.test.ts`
    - Test each tier has at least one Quiz or Checkpoint testing vocabulary
    - _Requirements: 18.2_

- [x] 26. Final checkpoint — Ensure all tests pass
  - Ensure all property and unit tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP — no tasks in this plan are marked optional since all content files are required by the requirements
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation after infrastructure and each tier
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All MDX files follow the lesson/activity templates defined in the design document
- All content uses existing components (Quiz, Checkpoint, AnswerReveal, CodeReading, CodeTrace, GitHubLink) — no new components needed
