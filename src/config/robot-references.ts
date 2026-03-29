export const robotConfig = {
  repoUrl: "https://github.com/1723FBITeam/Drive2026FBI",
  repoName: "Drive2026FBI",
  defaultBranch: "main",
  projectRoot: "src/main/java/frc/robot",
  coreFiles: {
    main: "Main.java",
    robot: "Robot.java",
    robotContainer: "RobotContainer.java",
    constants: "Constants.java",
  },
  subsystems: [
    { name: "IntakeSubsystem", file: "subsystems/IntakeSubsystem.java", description: "Picks up game pieces from the ground using rollers and a deploy mechanism" },
    { name: "ShooterSubsystem", file: "subsystems/ShooterSubsystem.java", description: "Launches notes using dual flywheels, a feeder, indexer, and adjustable hood" },
    { name: "TurretSubsystem", file: "subsystems/TurretSubsystem.java", description: "Rotates the shooter left/right to aim at the hub" },
    { name: "ClimberSubsystem", file: "subsystems/ClimberSubsystem.java", description: "Handles endgame climbing with elevator and servos" },
    { name: "CommandSwerveDrivetrain", file: "subsystems/CommandSwerveDrivetrain.java", description: "Swerve drive system for omnidirectional movement" },
  ],
  commands: [
    { name: "AutoShootCommand", file: "commands/AutoShootCommand.java", description: "Coordinates turret aiming, flywheel spin-up, and note feeding" },
  ],
  generatedFiles: [
    { file: "generated/TunerConstants.java", description: "Auto-generated swerve configuration from CTRE Tuner X — read but don't edit" },
  ],
  bindings: {
    intake: { button: "X", controller: "driver", type: "toggleOnTrue" },
    shoot: { button: "Y", controller: "driver", type: "toggleOnTrue" },
    jostle: { button: "A", controller: "driver", type: "whileTrue" },
    elevator: { button: "B", controller: "driver", type: "onTrue" },
  },
  canIds: {
    shooterLeft: 21, shooterRight: 22, turret: 23, feeder: 24, spinner: 25,
    intakeLeft: 31, intakeRight: 32, deployLeft: 33, deployRight: 34,
    climbLeft: 41, climbRight: 42, elevator: 43,
  },
  season: "2026 REBUILT",
  teamNumber: 1723,
};
