# Camera follow hooks

Role: Developer

## User Story

As a Developer, I need the player pawn to expose camera follow and aim anchors so camera modes can attach consistently.

## Acceptance Criteria (Gherkin-style)

- Given the pawn is active, when a camera mode queries follow data, then it receives a stable transform (position + forward).
- Given I switch between 2D and 3D modes, when the camera rebinds, then follow anchor continuity prevents jarring pops (within a small tolerance).

## Dependencies

- Player pawn; camera controller.

## Tasks (links)

- [Expose camera target components](./tasks/expose-camera-target-components.md)
