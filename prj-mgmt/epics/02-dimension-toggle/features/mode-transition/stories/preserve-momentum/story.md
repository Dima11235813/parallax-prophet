# Preserve momentum

Role: Player

## User Story
As a Player, I want momentum to be preserved sensibly when switching dimensions, so that movement feels consistent and fair.

## Context / Notes
- Mapping rules from 3D velocity to 2D and back.

## Acceptance Criteria (Gherkin-style)
- Given I am moving in 3D, when I toggle to 2D, then my horizontal momentum maps to side-scroll velocity within tolerance and does not spike.
- Given I am moving in 2D, when I toggle to 3D, then my velocity and facing map consistently without unintended acceleration.

## Estimation
T-Shirt or points: TBD

## Dependencies
- Physics/motion component.

## Design / Tech References
- PRD Dimension Toggle System.

## QA Notes
- Verify edge cases: jumps, dashes, slopes.

## Tasks (links)
- [Implement momentum mapping](./tasks/implement-momentum-mapping.md)

## Bugs (links)
// Link discovered issues here
