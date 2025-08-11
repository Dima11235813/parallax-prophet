# Test Arena & World Baseline

Owner: TBD
Status: Planned

## Overview

- Provide a lightweight boot scene (“Alignment Test Arena”) with ground, walls, and a few props.
- Place perspective “anchor sockets” and at least one targetable object to test reticle and scale transfer.

## Business Value

- Enables fast iteration on camera modes, alignment reticle, and scale transfer in a controlled space.

## Non-Goals

- Full level art; advanced lighting; streaming; navmesh.

## Dependencies

- ECS skeleton; content/scene loader; minimal renderer; input to enter alignment view.

## Risks & Assumptions

- Assume placeholders (primitives) are acceptable initially.

## Acceptance Criteria

- On boot, the test arena scene loads deterministically.
- At least 3 anchor sockets are present with clear markers.
- At least 1 targetable object can be aligned and later scaled via the other features.
- Scene restart returns anchors/targets to default state.

## User Stories (links)

- [Build alignment test arena](./stories/build-alignment-test-arena/story.md)
- [Define anchor sockets & targets](./stories/anchor-socket-targets/story.md)
- [Fast iteration on camera modes](./stories/fast-iterate-camera/story.md)

## References

- PRD “Content Pipeline”; PRD “Camera & Perspective System” (PerspectiveLock).
