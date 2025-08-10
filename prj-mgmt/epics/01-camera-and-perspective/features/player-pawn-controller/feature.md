# Player Pawn & Controller

Owner: TBD
Status: Planned

## Overview

- Spawn a controllable player pawn with basic movement in 2D side-on and 3D modes.
- Expose camera follow/aim hooks (position, forward) for camera modes and alignment view.

## Business Value

- Required to evaluate camera behavior, alignment UX, and scale puzzles in a realistic loop.

## Non-Goals

- Combat; full animation set; advanced locomotion.

## Dependencies

- ECS skeleton; input mapping; physics/collision primitives.

## Risks & Assumptions

- Assume capsule collider + simple kinematic controller is sufficient for vertical slice.

## Acceptance Criteria

- Player spawns at arena start and is possessed by input.
- 2D mode: left/right + jump on a side-on plane; 3D mode: WASD + mouse/analog look.
- Emits camera target data each frame (follow anchor, aim forward).

## User Stories (links)

- [Spawn and possess](./stories/spawn-and-possess/story.md)
- [Movement basics (2D/3D)](./stories/movement-2d-3d-basics/story.md)
- [Camera follow hooks](./stories/camera-follow-hooks/story.md)

## References

- PRD “Dimension Toggle System”; PRD “Camera & Perspective System”.
