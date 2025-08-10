# Spawn and possess

Role: Player

## User Story

As a Player, I want to start in control of a character so I can move and test camera modes.

## Acceptance Criteria (Gherkin-style)

- Given the game boots, when the arena loads, then a player pawn spawns at the start marker and is immediately controllable.
- Given I respawn or reload the scene, when the game resumes, then the pawn is re-possessed automatically.

## Dependencies

- Scene spawn point; input system.

## Tasks (links)

- [Implement player spawn](./tasks/implement-player-spawn.md)
