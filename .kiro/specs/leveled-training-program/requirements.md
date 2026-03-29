# Requirements Document

## Introduction

The FRC Programming Training Site currently provides a solid core curriculum (Units 0–3) that teaches students to read and contribute to their team's robot code, plus three resource pages (beginner, intermediate, advanced) that curate external links. This feature expands the site into a full multi-level training program with real lessons and hands-on activities at each tier — Beginner (Tier 1), Intermediate (Tier 2), and Advanced (Tier 3). The new content follows the same pedagogical patterns as the existing units (learning objectives, interactive components, code reading exercises, checkpoints) and emphasizes reading real robot code over abstract tutorials.

## Glossary

- **Training_Site**: The Astro Starlight documentation site that hosts the FRC programming curriculum
- **Lesson**: An MDX content page that teaches a concept through explanation, code examples, quizzes, and checkpoints
- **Activity**: An MDX content page that provides hands-on, step-by-step exercises requiring students to interact with real code
- **Tier**: A difficulty level grouping of lessons and activities (Tier 1 = Beginner, Tier 2 = Intermediate, Tier 3 = Advanced)
- **Sidebar**: The Starlight navigation sidebar configured in `astro.config.mjs` that organizes all site content
- **Interactive_Component**: A React component (Quiz, Checkpoint, AnswerReveal, CodeReading, CodeTrace, GitHubLink) embedded in MDX content for active learning
- **Robot_Config**: The `robotConfig` object from `src/config/robot-references.ts` that provides references to the team's actual robot code
- **Code_Reading_Exercise**: A structured exercise where students apply the five-question Code Reading Framework to a real code file
- **Comparison_Exercise**: An exercise where students compare their team's code structure or patterns against code from a top FRC team
- **Resource_Page**: An existing curated link list page (beginner.mdx, intermediate.mdx, advanced.mdx) in `src/content/docs/resources/`
- **Core_Curriculum**: The existing Units 0–3 content that teaches foundational robot code reading and contribution skills
- **PathPlanner**: The path planning tool (pathplanner.dev) used by the team to visually design autonomous paths and compose auto routines as JSON files
- **Named_Command**: A Java command registered via `NamedCommands.registerCommand()` that PathPlanner auto routines reference by string name
- **Event_Marker**: A PathPlanner feature that triggers a Named_Command at a specific point along a path segment
- **Auto_Builder**: A PathPlanner utility (`AutoBuilder`) that composes complex autonomous routines from reusable path segments and provides the auto chooser
- **Java_Pattern**: A specific Java language construct (lambda, method reference, enum, static final, inheritance, interface) as it appears in FRC robot code
- **NetworkTables**: The WPILib publish/subscribe communication system that connects robot code, dashboards (SmartDashboard, Shuffleboard), and coprocessors (Limelight) over the network
- **Driver_Station**: The FRC software application that connects to the robot, enables/disables operation modes, displays console output, and manages joystick input
- **roboRIO**: The National Instruments controller that runs the robot code on the physical robot
- **CAN_Bus**: The Controller Area Network communication bus connecting the roboRIO to motor controllers, sensors, and other devices on the robot
- **Phoenix_Tuner_X**: CTRE's diagnostic tool for identifying, configuring, and testing CTRE motor controllers and sensors on the CAN_Bus
- **REV_Hardware_Client**: REV Robotics' diagnostic tool for identifying, configuring, and testing REV motor controllers and sensors on the CAN_Bus
- **Swerve_Drive**: A drivetrain where each wheel module independently controls both drive speed and steering angle, enabling omnidirectional movement
- **Module_State**: The combination of drive speed and steering angle for a single swerve drive module
- **Field_Relative_Control**: A control mode where joystick inputs are interpreted relative to the field orientation rather than the robot's heading, using gyro data
- **Odometry**: The process of tracking the robot's position on the field using wheel encoder and gyro measurements
- **Kinematics**: The mathematical transformation that converts desired robot motion (translation + rotation) into individual Module_States
- **Pose_Estimator**: A WPILib component that fuses Odometry data with vision measurements using a Kalman filter to produce a more accurate robot position estimate
- **Kalman_Filter**: A mathematical algorithm that optimally blends two noisy measurements (e.g., Odometry and vision) based on their respective uncertainty levels (standard deviations)
- **Standard_Deviation**: A measure of measurement uncertainty used by the Pose_Estimator to determine how much to trust Odometry vs vision data
- **State_Machine**: A design pattern where a system is modeled as a set of discrete states with defined transitions and guard conditions controlling movement between states
- **Superstructure_Pattern**: An architecture pattern used by top FRC teams (254, 1678) where a single coordinating class manages all non-drivetrain subsystem interactions using a State_Machine
- **Match_Log**: Data recorded during a robot match (via Driver_Station logs or AdvantageScope) used for post-match analysis and debugging
- **Hotfix_Branch**: A short-lived Git branch created at competition to make targeted code fixes without disrupting the stable main branch

## Requirements

### Requirement 1: Tier 1 (Beginner) Lesson and Activity Content

**User Story:** As a new FRC programmer who has completed the core curriculum, I want structured beginner lessons and activities that deepen my understanding of WPILib, my own robot code, constants, subsystems, commands, the FRC game manual, and Git workflow, so that I build a strong foundation beyond the introductory units.

#### Acceptance Criteria

1. WHEN a student navigates to the Tier 1 section, THE Training_Site SHALL display a set of lessons and activities covering: WPILib documentation deep dive, understanding your own robot code, constants and subsystems and commands basics, FRC game manual for programmers, and Git & GitHub workflow.
2. THE Training_Site SHALL provide at least one Lesson and one Activity for each Tier 1 topic area.
3. WHEN a Tier 1 Lesson is rendered, THE Training_Site SHALL include learning objectives, explanatory content with code examples from the team's robot code, at least one Quiz Interactive_Component, and at least one Checkpoint Interactive_Component.
4. WHEN a Tier 1 Activity is rendered, THE Training_Site SHALL include step-by-step instructions that require the student to interact with real code files from the team's repository.
5. THE Training_Site SHALL use Robot_Config references in Tier 1 content to link to the team's actual robot code on GitHub via the GitHubLink Interactive_Component.
6. THE Training_Site SHALL structure Tier 1 content to reinforce the pedagogical principle that reading your own robot code is prioritized over generic tutorials.

### Requirement 2: Tier 2 (Intermediate) Lesson and Activity Content

**User Story:** As an FRC programmer comfortable with the basics, I want intermediate lessons and activities that teach me to learn from the FRC community, read top team code, debug with data tools, and use vendor documentation effectively, so that I can contribute more complex code and debug faster.

#### Acceptance Criteria

1. WHEN a student navigates to the Tier 2 section, THE Training_Site SHALL display a set of lessons and activities covering: Chief Delphi as a learning resource, reading GitHub code from top teams (254, 6328, 971, 1678), debugging with Shuffleboard and AdvantageScope, vendor documentation deeper dive (REV, CTRE Phoenix 6), and vendor example code usage.
2. THE Training_Site SHALL provide at least one Lesson and one Activity for each Tier 2 topic area.
3. WHEN a Tier 2 Lesson is rendered, THE Training_Site SHALL include learning objectives, explanatory content, at least one Interactive_Component, and references to real external resources with valid URLs.
4. WHEN a Tier 2 Activity is rendered, THE Training_Site SHALL include a Comparison_Exercise or Code_Reading_Exercise that requires the student to examine code from a top FRC team's GitHub repository and compare patterns or structures to the team's own code.
5. THE Training_Site SHALL include at least one Activity where students locate a specific subsystem in a top team's repository, analyze its structure, and explain differences compared to their own team's equivalent subsystem.
6. THE Training_Site SHALL structure Tier 2 content to reinforce the pedagogical principle that examining top team code is prioritized over generic examples.

### Requirement 3: Tier 3 (Advanced) Lesson and Activity Content

**User Story:** As an experienced FRC programmer, I want advanced lessons and activities covering AdvantageKit logging, simulation, path planning, control theory, vision processing, unit testing, and architecture patterns, so that I can tackle complex engineering challenges and elevate my team's technical capabilities.

#### Acceptance Criteria

1. WHEN a student navigates to the Tier 3 section, THE Training_Site SHALL display a set of lessons and activities covering: AdvantageKit logging and replay, simulation tools, path planning libraries (PathPlanner deep dive), control theory (PID, feedforward, motion profiling), vision processing, unit testing robot code, and architecture patterns from top teams.
2. THE Training_Site SHALL provide at least one Lesson and one Activity for each Tier 3 topic area.
3. WHEN a Tier 3 Lesson is rendered, THE Training_Site SHALL include learning objectives, explanatory content with concrete code examples, at least one Interactive_Component, and links to authoritative external documentation.
4. WHEN a Tier 3 Activity is rendered, THE Training_Site SHALL include a hands-on exercise that requires the student to apply the lesson concept to real code (team code, simulation environment, or top team repository).
5. THE Training_Site SHALL structure Tier 3 content to reinforce the pedagogical principle that using logs to debug is prioritized over guessing, and making small changes is prioritized over large projects.

### Requirement 4: Content Structure and Sidebar Navigation

**User Story:** As a student using the training site, I want the new tiered content organized clearly in the sidebar alongside the existing units, so that I can find my current level and navigate between lessons and activities without confusion.

#### Acceptance Criteria

1. THE Training_Site SHALL organize the new content into three sidebar groups: one for Tier 1 (Beginner), one for Tier 2 (Intermediate), and one for Tier 3 (Advanced).
2. THE Training_Site SHALL update the sidebar configuration in `astro.config.mjs` to include the three new tier groups with labeled entries for each lesson and activity.
3. THE Training_Site SHALL preserve the existing Units 0–3, Reference Sheets, Resources, and Instructors sidebar groups without modification to their content or ordering.
4. THE Training_Site SHALL place the new tier groups in the sidebar after the existing Units 0–3 section and before the Reference Sheets section.
5. WHEN a student views the sidebar, THE Training_Site SHALL display each tier group with a visual level indicator (emoji or label) matching the existing resource page convention (🟢 Beginner, 🟡 Intermediate, 🔴 Advanced).
6. THE Training_Site SHALL place new content files in dedicated directories under `src/content/docs/` using the naming pattern `tier-1/`, `tier-2/`, `tier-3/`.

### Requirement 5: Consistent Pedagogical Patterns

**User Story:** As a student progressing through the training program, I want all new lessons and activities to follow the same interactive teaching patterns as the existing units, so that the learning experience is consistent and familiar.

#### Acceptance Criteria

1. THE Training_Site SHALL use the same MDX frontmatter structure (title, description, sidebar order, prev/next) in all new lesson and activity files as used in the existing Core_Curriculum.
2. THE Training_Site SHALL import and use Interactive_Components (Quiz, Checkpoint, AnswerReveal, CodeReading, CodeTrace, GitHubLink) from the existing `src/components/` directory in new content files following the same import path pattern as existing lessons.
3. THE Training_Site SHALL include a "What You'll Learn" or "Goal" section at the top of each new lesson or activity, consistent with the existing content pattern.
4. THE Training_Site SHALL include a "What's Next" section at the bottom of each new lesson or activity that links to the next content page in the tier sequence.
5. WHEN a new lesson references the team's robot code, THE Training_Site SHALL use the Robot_Config object and GitHubLink component to generate links, consistent with existing lessons.

### Requirement 6: Existing Resource Pages Enhancement

**User Story:** As a student, I want the existing resource pages (beginner, intermediate, advanced) to link to the corresponding new tier lessons and activities, so that the curated link lists and the new structured content are connected.

#### Acceptance Criteria

1. WHEN a student views an existing Resource_Page, THE Training_Site SHALL display a prominent link or callout at the top directing the student to the corresponding tier's lessons and activities.
2. THE Training_Site SHALL preserve all existing content on the Resource_Pages (curated links, challenges, tips) without removal or reordering.
3. THE Training_Site SHALL add a brief description on each Resource_Page explaining the relationship between the curated resource links and the new structured tier content.

### Requirement 7: Progressive Difficulty and Prerequisites

**User Story:** As a student, I want clear prerequisite guidance at each tier so that I know when I am ready to advance and do not skip foundational material.

#### Acceptance Criteria

1. THE Training_Site SHALL display a prerequisites section at the beginning of each tier's first lesson, listing the specific units, lessons, or tiers that the student should complete before starting.
2. WHEN a Tier 2 lesson or activity is rendered, THE Training_Site SHALL state that completion of the Core_Curriculum (Units 0–3) and Tier 1 content is recommended.
3. WHEN a Tier 3 lesson or activity is rendered, THE Training_Site SHALL state that completion of Tier 2 content is recommended.
4. THE Training_Site SHALL include a "weekly roadmap" or suggested pacing guide that recommends which tier content to focus on each week of the FRC season.

### Requirement 8: Code Comparison and Cross-Team Exercises

**User Story:** As a student, I want structured exercises that guide me through comparing my team's code with code from top FRC teams, so that I learn to recognize patterns, evaluate design decisions, and improve our codebase.

#### Acceptance Criteria

1. THE Training_Site SHALL include at least three Comparison_Exercises across Tier 2 and Tier 3 content that require students to examine a specific subsystem or pattern in a top team's GitHub repository.
2. WHEN a Comparison_Exercise is rendered, THE Training_Site SHALL provide the specific GitHub repository URL, the file or folder to examine, guiding questions for analysis, and a structured format for documenting findings.
3. THE Training_Site SHALL include at least one Comparison_Exercise where students compare drivetrain implementations between their team's CommandSwerveDrivetrain and a top team's equivalent.
4. THE Training_Site SHALL include at least one Comparison_Exercise where students compare autonomous routine structure between their team's code and a top team's code.

### Requirement 9: Autonomous Programming with PathPlanner

**User Story:** As an FRC programmer, I want a progressive set of lessons and activities that teach me to understand, create, edit, test, and optimize autonomous routines using PathPlanner, so that I can contribute to my team's autonomous performance from basic comprehension through advanced path generation.

#### Acceptance Criteria

1. THE Training_Site SHALL include autonomous programming content that spans all three tiers: foundational concepts in Tier 1, path creation and named commands in Tier 2, and advanced PathPlanner features in Tier 3.
2. WHEN a Tier 1 autonomous Lesson is rendered, THE Training_Site SHALL teach students to read existing auto routines by examining the team's `deploy/pathplanner/autos/` and `deploy/pathplanner/paths/` JSON files, building on the concepts introduced in Activity 2.6 of the Core_Curriculum.
3. WHEN a Tier 1 autonomous Activity is rendered, THE Training_Site SHALL guide students through opening the PathPlanner GUI, loading the team's project, and reading an existing auto routine to identify which paths and Named_Commands it uses.
4. WHEN a Tier 2 autonomous Lesson is rendered, THE Training_Site SHALL teach students to create and edit paths in the PathPlanner GUI, register Named_Commands in RobotContainer, use Event_Markers to trigger commands at specific points along a path, and understand path constraints (velocity limits and acceleration curves).
5. WHEN a Tier 2 autonomous Activity is rendered, THE Training_Site SHALL require students to create a new path in PathPlanner, register a new Named_Command in the team's RobotContainer, compose a new auto routine that chains the path with the Named_Command, and verify the routine loads in the auto chooser.
6. WHEN a Tier 3 autonomous Lesson is rendered, THE Training_Site SHALL teach advanced PathPlanner features including on-the-fly path generation based on game state, path constraints and zone-specific behavior, and the Auto_Builder pattern for composing reusable autonomous routine segments.
7. WHEN a Tier 3 autonomous Activity is rendered, THE Training_Site SHALL require students to implement or modify an advanced autonomous feature (on-the-fly path generation, custom path constraints, or Auto_Builder composition) in the team's robot code and verify the result in simulation or on the robot.
8. THE Training_Site SHALL include at least one Activity where students test and iterate on an autonomous routine by running the routine, observing the result (in simulation or on the robot), adjusting path waypoints or timing, and re-testing.
9. THE Training_Site SHALL use the GitHubLink Interactive_Component and Robot_Config references to link to the team's actual PathPlanner files and RobotContainer Named_Command registrations in all autonomous programming content.
10. THE Training_Site SHALL reference the PathPlanner documentation at pathplanner.dev as the authoritative external resource in autonomous programming lessons.

### Requirement 10: Java Fundamentals for FRC (Tier 1)

**User Story:** As a new FRC programmer reading robot code, I want lessons that explain the specific Java language patterns I encounter (lambdas, method references, enums, static final constants, inheritance, interfaces), so that I can understand the syntax I see in subsystems, commands, and RobotContainer without needing a separate Java course.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 1 Lesson teaching Java_Patterns specifically as they appear in FRC robot code, covering lambdas, method references, enums, static final constants, inheritance, and interfaces.
2. WHEN the Java_Pattern Lesson covers lambdas and method references, THE Training_Site SHALL use real examples from the team's robot code (e.g., `() -> intakeSubsystem.deployOut()` and `this::getSmartTarget`) via the GitHubLink Interactive_Component and Robot_Config references.
3. WHEN the Java_Pattern Lesson covers enums and static final constants, THE Training_Site SHALL explain how Constants.java uses these constructs, linking to the team's Constants file via the GitHubLink Interactive_Component.
4. WHEN the Java_Pattern Lesson covers inheritance and interfaces, THE Training_Site SHALL explain patterns such as `extends SubsystemBase` and `implements Subsystem` using the team's subsystem files as examples.
5. THE Training_Site SHALL include a Tier 1 Activity where students identify and explain Java_Patterns found in their own team's robot code, documenting at least one example of each pattern (lambda, method reference, enum, static final, inheritance, interface).
6. THE Training_Site SHALL teach each Java_Pattern concept using real examples from the team's robot code rather than abstract or generic examples.

### Requirement 11: NetworkTables Basics (Tier 1)

**User Story:** As an FRC programmer, I want to understand how NetworkTables works as the communication layer between robot code, dashboards, and coprocessors, so that I can effectively use SmartDashboard, understand Limelight data flow, and debug communication issues.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 1 Lesson explaining NetworkTables as the publish/subscribe system that connects robot code to dashboards and coprocessors.
2. WHEN the NetworkTables Lesson covers dashboard integration, THE Training_Site SHALL explain how SmartDashboard.putNumber, SmartDashboard.putBoolean, and SmartDashboard.putString map to NetworkTables entries.
3. WHEN the NetworkTables Lesson covers coprocessor communication, THE Training_Site SHALL explain how Limelight cameras publish data via NetworkTables, connecting to the sensor trace concepts introduced in Activity 2.5 of the Core_Curriculum.
4. WHEN the NetworkTables Lesson covers autonomous integration, THE Training_Site SHALL explain how PathPlanner's auto chooser uses NetworkTables to communicate the selected routine, connecting to the concepts introduced in Activity 2.6 of the Core_Curriculum.
5. THE Training_Site SHALL include a Tier 1 Activity where students explore live NetworkTables entries using OutlineViewer or AdvantageScope's NetworkTables viewer and document the entries they find.
6. THE Training_Site SHALL use real examples from the team's robot code showing NetworkTables usage via the GitHubLink Interactive_Component and Robot_Config references.

### Requirement 12: Deploying and Testing on the Robot (Tier 2)

**User Story:** As an FRC programmer preparing for competition, I want a comprehensive lesson on the deploy-test-debug cycle including Driver_Station operation, robot enabling procedures, and field troubleshooting, so that I can confidently deploy code and diagnose issues under time pressure.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 2 Lesson covering the full deploy-test-debug workflow from code compilation to robot operation.
2. WHEN the deployment Lesson covers the build process, THE Training_Site SHALL explain the gradlew deploy process, what files are uploaded to the roboRIO, and common deploy failures (network issues, build errors, roboRIO not found).
3. WHEN the deployment Lesson covers Driver_Station operation, THE Training_Site SHALL explain enabling and disabling the robot, mode selection (teleop, autonomous, test), joystick configuration, and reading console output.
4. WHEN the deployment Lesson covers troubleshooting, THE Training_Site SHALL explain what to check when the robot does not respond after deploying, including CAN_Bus errors, null commands, and missing subsystem registrations.
5. THE Training_Site SHALL include a Tier 2 Activity where students practice a deploy-test-fix cycle by deploying code with an intentional issue, diagnosing the problem using Driver_Station output, and applying a fix.
6. THE Training_Site SHALL include guidance on common competition-day deployment scenarios (last-minute code changes, switching between auto routines, recovering from a failed deploy) and how to handle each scenario.

### Requirement 13: CAN Bus and Hardware Debugging (Tier 2)

**User Story:** As an FRC programmer, I want to understand the CAN_Bus communication system, how to use vendor diagnostic tools (Phoenix_Tuner_X, REV_Hardware_Client), and how to interpret Driver_Station error messages, so that I can quickly diagnose and fix hardware communication issues.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 2 Lesson explaining CAN_Bus architecture: how motor controllers, sensors, and the roboRIO communicate over the CAN_Bus.
2. WHEN the CAN_Bus Lesson covers error conditions, THE Training_Site SHALL explain common CAN_Bus errors and their meanings, including device not found, CAN utilization too high, and firmware mismatch.
3. WHEN the CAN_Bus Lesson covers CTRE diagnostics, THE Training_Site SHALL explain how to use Phoenix_Tuner_X to identify, configure, and test CTRE devices on the CAN_Bus.
4. WHEN the CAN_Bus Lesson covers REV diagnostics, THE Training_Site SHALL explain how to use REV_Hardware_Client to identify, configure, and test REV devices on the CAN_Bus.
5. WHEN the CAN_Bus Lesson covers error interpretation, THE Training_Site SHALL explain how to read and interpret Driver_Station error console messages related to hardware communication.
6. THE Training_Site SHALL include a Tier 2 Activity where students use Phoenix_Tuner_X and REV_Hardware_Client to inspect the team's robot hardware and document the status of each CAN_Bus device.
7. THE Training_Site SHALL include a troubleshooting flowchart for common hardware communication failures that students can reference during debugging.

### Requirement 14: Swerve Drive Concepts (Tier 2)

**User Story:** As an FRC programmer on a swerve drive team, I want to understand the concepts behind Swerve_Drive (Module_States, Field_Relative_Control vs robot-relative control, Odometry, Kinematics), so that I can understand our drivetrain code, debug driving issues, and contribute to drivetrain improvements.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 2 Lesson explaining Swerve_Drive concepts: what each module does (drive motor + steer motor), and how Module_States (speed + angle) define module behavior.
2. WHEN the Swerve_Drive Lesson covers control modes, THE Training_Site SHALL explain Field_Relative_Control vs robot-relative control and why Field_Relative_Control is preferred for driver operation.
3. WHEN the Swerve_Drive Lesson covers position tracking, THE Training_Site SHALL explain Odometry: how the robot tracks its field position using wheel encoder measurements and gyro heading data.
4. WHEN the Swerve_Drive Lesson covers the team's implementation, THE Training_Site SHALL explain how the team's CommandSwerveDrivetrain and TunerConstants files implement Swerve_Drive concepts, linking to the team's code via the GitHubLink Interactive_Component and Robot_Config references.
5. WHEN the Swerve_Drive Lesson covers motion translation, THE Training_Site SHALL explain Kinematics: how desired robot motion (translation + rotation) is transformed into individual Module_States.
6. THE Training_Site SHALL include a Tier 2 Activity where students trace a joystick input through the swerve math to individual module outputs using the team's CommandSwerveDrivetrain code.
7. WHEN the Swerve_Drive Lesson covers heading management, THE Training_Site SHALL explain the role of the Pigeon gyro and how heading data affects Field_Relative_Control.

### Requirement 15: Pose Estimation and Localization (Tier 3)

**User Story:** As an advanced FRC programmer, I want to understand the concepts behind robot localization (Odometry, Kalman filtering, vision fusion, measurement uncertainty), so that I can tune the Pose_Estimator, improve autonomous accuracy, and debug localization issues.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 3 Lesson explaining pose estimation concepts: why wheel Odometry drifts over time and why vision correction is needed for accurate localization.
2. WHEN the pose estimation Lesson covers sensor fusion, THE Training_Site SHALL explain Kalman_Filter intuition: how the algorithm blends two noisy measurements (Odometry + vision) based on their respective confidence levels.
3. WHEN the pose estimation Lesson covers measurement trust, THE Training_Site SHALL explain Standard_Deviations and their role in the Pose_Estimator, connecting to the team's fuseCameraEstimate code via the GitHubLink Interactive_Component.
4. WHEN the pose estimation Lesson covers the team's implementation, THE Training_Site SHALL explain how the team's vision pipeline works end-to-end, building on Activity 2.5's sensor trace with deeper conceptual understanding of the underlying math.
5. WHEN the pose estimation Lesson covers tuning, THE Training_Site SHALL explain how to adjust Standard_Deviations to control when the Pose_Estimator trusts vision data more vs Odometry data more.
6. THE Training_Site SHALL include a Tier 3 Activity where students analyze match log data to evaluate Pose_Estimator accuracy and suggest Standard_Deviation tuning changes based on observed drift or jumps.
7. THE Training_Site SHALL explain the connection between localization quality and autonomous path-following accuracy in the pose estimation content.

### Requirement 16: State Machines (Tier 3)

**User Story:** As an advanced FRC programmer, I want to understand the State_Machine pattern for coordinating complex robot behaviors, so that I can design cleaner multi-step sequences, reduce bugs in complex commands, and understand how top teams structure their code.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 3 Lesson explaining the State_Machine pattern: states, transitions, and guard conditions that control movement between states.
2. WHEN the State_Machine Lesson covers the team's code, THE Training_Site SHALL explain how the team's AutoShootCommand is essentially a State_Machine (AIMING → SPINNING_UP → READY → FEEDING) even though the code does not explicitly implement the pattern, linking to the team's AutoShootCommand via the GitHubLink Interactive_Component.
3. WHEN the State_Machine Lesson covers explicit implementation, THE Training_Site SHALL teach how to implement a State_Machine using enums for states and switch statements for transition logic.
4. WHEN the State_Machine Lesson covers design decisions, THE Training_Site SHALL explain when to use a State_Machine vs sequential command groups vs trigger-based composition for coordinating multi-step robot behaviors.
5. WHEN the State_Machine Lesson covers top team patterns, THE Training_Site SHALL explain how teams 254 and 1678 use State_Machines and the Superstructure_Pattern to coordinate complex robot behaviors.
6. THE Training_Site SHALL include a Tier 3 Activity where students either refactor an existing complex command sequence into an explicit State_Machine or design a State_Machine for a new multi-step robot behavior.
7. THE Training_Site SHALL include a Comparison_Exercise where students examine a top team's State_Machine implementation and compare the approach to the team's current command structure.

### Requirement 17: Competition Readiness (Tier 3)

**User Story:** As an FRC programmer preparing for competition, I want structured guidance on pre-match procedures, rapid debugging techniques, Match_Log analysis, and competition-day code management, so that my team can perform reliably under the time pressure of a tournament.

#### Acceptance Criteria

1. THE Training_Site SHALL include a Tier 3 Lesson covering competition readiness: pre-match software checklist, pit debugging workflow, and Match_Log analysis.
2. WHEN the competition readiness Lesson covers pre-match procedures, THE Training_Site SHALL provide a checklist of items to verify before every match, including auto routine selection, dashboard values, camera status, CAN_Bus health, and battery voltage.
3. WHEN the competition readiness Lesson covers rapid debugging, THE Training_Site SHALL provide a systematic approach to diagnosing issues between matches, structured as a five-minute debugging flowchart.
4. WHEN the competition readiness Lesson covers Match_Log analysis, THE Training_Site SHALL explain how to use AdvantageScope or Driver_Station logs to review what happened during a match and identify root causes of issues.
5. WHEN the competition readiness Lesson covers code management, THE Training_Site SHALL explain when to deploy new code vs retain the current working version, and how to use a Hotfix_Branch strategy for targeted fixes at competition.
6. THE Training_Site SHALL include a Tier 3 Activity where students practice a simulated competition debugging scenario under time pressure, diagnosing and resolving an issue within a fixed time limit.
7. THE Training_Site SHALL include guidance on a post-match review process: what data to collect, what questions to ask the drive team, and how to prioritize fixes between matches.

### Requirement 18: Vocabulary Reinforcement in Lessons and Activities

**User Story:** As a student learning FRC programming, I want key vocabulary terms defined in context when they first appear in lessons and reinforced through quizzes and checkpoints, so that I build technical vocabulary naturally as I learn rather than having to memorize a separate glossary.

#### Acceptance Criteria

1. WHEN a glossary term is first used in a Lesson or Activity, THE Training_Site SHALL define the term inline using bold formatting and a brief definition so that students can understand the term without navigating away from the page.
2. THE Training_Site SHALL include at least one Quiz or Checkpoint Interactive_Component per Tier that tests vocabulary understanding by asking students to define or identify key terms (e.g., "What is a subsystem?", "What does field-relative mean?").
3. WHEN a Lesson or Activity references a glossary term, THE Training_Site SHALL link the term to the existing glossary reference sheet at `src/content/docs/reference-sheets/glossary.mdx` so that students can review all terms in one place.
4. WHEN Tier 2 or Tier 3 content introduces a new term, THE Training_Site SHALL build on vocabulary established in earlier tiers by referencing the previously defined term before extending the concept.
5. THE Training_Site SHALL use correct technical vocabulary consistently in all Activity instructions and expect students to use the defined terms in their responses and written explanations.
6. THE Training_Site SHALL include a "Key Terms" summary section at the end of each Lesson listing the vocabulary terms introduced in that Lesson with their definitions.
