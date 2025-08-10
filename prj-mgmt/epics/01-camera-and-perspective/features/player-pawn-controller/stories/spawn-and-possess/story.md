# Spawn and possess

Role: Player

## User Story

As a Player, I want to start in control of a character so I can move and test camera modes.

## Context / Notes

- Spawn at a named start marker; ensure possession occurs before first frame.

## Acceptance Criteria (Gherkin-style)

- Given the game boots, when the arena loads, then a player pawn spawns at the start marker and is immediately controllable.
- Given I respawn or reload the scene, when the game resumes, then the pawn is re-possessed automatically.

## Estimation

T-Shirt or points: TBD

## Dependencies

- Scene spawn point; input system.

## Design / Tech References

- PRD Dimension Toggle; Input Mapping.

## QA Notes

- Confirm no input lag on spawn; test re-possession on scene reload.

## Tasks (links)

- [Implement player spawn](./tasks/implement-player-spawn.md)

## Bugs (links)

// Link discovered issues here
