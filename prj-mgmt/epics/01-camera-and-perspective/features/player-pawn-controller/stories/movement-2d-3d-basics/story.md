# Movement basics (2D/3D)

Role: Player

## User Story

As a Player, I want basic movement in both 2D and 3D modes to navigate the arena and test perspective mechanics.

## Acceptance Criteria (Gherkin-style)

- Given I am in 2D mode, when I press left/right and jump, then the pawn moves on a constrained plane and respects gravity and collisions.
- Given I am in 3D mode, when I use WASD and look input, then the pawn moves freely on the ground plane with collision.

## Dependencies

- Physics/collision; input mapping; dimension toggle rules.

## Tasks (links)

- [Implement walk/run/jump basics](./tasks/implement-walk-run-jump-basic.md)
