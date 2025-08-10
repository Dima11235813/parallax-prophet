# Camera follow hooks

Role: Developer

## User Story

As a Developer, I need the player pawn to expose camera follow and aim anchors so camera modes can attach consistently.

## Context / Notes

- Provide stable transform outputs and smoothing to avoid camera pops.

## Acceptance Criteria (Gherkin-style)

- Given the pawn is active, when a camera mode queries follow data, then it receives a stable transform (position + forward).
- Given I switch between 2D and 3D modes, when the camera rebinds, then follow anchor continuity prevents jarring pops (within a small tolerance).

## Estimation

T-Shirt or points: TBD

## Dependencies

- Player pawn; camera controller.

## Design / Tech References

- PRD Camera & Perspective System; alignment view constraints.

## QA Notes

- Validate anchor jitter stays below tolerance across 60s capture.

## Tasks (links)

- [Expose camera target components](./tasks/expose-camera-target-components.md)

## Bugs (links)

// Link discovered issues here
