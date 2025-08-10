# Build alignment test arena

Role: Designer/Engineer

## User Story

As a Developer, I want a simple boot scene with flat ground, walls, and markers, so I can validate camera modes and alignment UI quickly.

## Context / Notes

- Use placeholder primitives; prioritize readability and stable camera testing.

## Acceptance Criteria (Gherkin-style)

- Given I run the game, when it boots, then the “Alignment Test Arena” scene loads with ground and 4 enclosing walls.
- Given the scene is loaded, when I toggle camera modes, then no geometry culling or clipping breaks readability.

## Estimation

T-Shirt or points: TBD

## Dependencies

- Scene loader; basic primitives/materials.

## Design / Tech References

- PRD Content Pipeline; initial-prompt arena notes.

## QA Notes

- Verify scene loads consistently across Chrome/Edge/Firefox. Check camera near/far clipping.

## Tasks (links)

- [Author flat 3D room with markers](./tasks/author-flat-3d-room-with-markers.md)

## Bugs (links)

// Link discovered issues here
