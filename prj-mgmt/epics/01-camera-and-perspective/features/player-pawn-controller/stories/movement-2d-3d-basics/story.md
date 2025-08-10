# Movement basics (2D/3D)

Role: Player

## User Story

As a Player, I want basic movement in both 2D and 3D modes to navigate the arena and test perspective mechanics.

## Context / Notes

- 2D: constrain to plane; 3D: ground stick with simple kinematic controller.

## Acceptance Criteria (Gherkin-style)

- Given I am in 2D mode, when I press left/right and jump, then the pawn moves on a constrained plane and respects gravity and collisions.
- Given I am in 3D mode, when I use WASD and look input, then the pawn moves freely on the ground plane with collision.

## Estimation

T-Shirt or points: TBD

## Dependencies

- Physics/collision; input mapping; dimension toggle rules.

## Design / Tech References

- PRD Movement & Toggle rules; Physics baseline.

## QA Notes

- Verify consistent speed/acceleration; test collision edges and jump apex.

## Tasks (links)

- [Implement walk/run/jump basics](./tasks/implement-walk-run-jump-basic.md)

## Bugs (links)

// Link discovered issues here
