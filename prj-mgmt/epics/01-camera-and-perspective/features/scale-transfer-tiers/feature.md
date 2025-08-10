# Scale Transfer & Tiers

Owner: TBD
Status: Planned

## Overview

- Commit an object's perceived size to discrete tiers when alignment criteria are met and confirmed.

## Business Value

- Enables core puzzle mechanic and boss designs leveraging forced perspective and quantized scale states.

## Non-Goals

- Physics scaling of complex rigs; photo-mode trick shots.

## Dependencies

- Alignment view signals; ECS components for scale state; event bus.

## Risks & Assumptions

- Risk: Numerical instability or popping; assume quantized tiers mitigate jitter.

## Acceptance Criteria

- Given alignment within tolerance and confirm, then object snaps to tier S/M/L/XL and persists state.
- Emitted events expose onLock payload for downstream logic.

## Metrics / Telemetry (optional)

- Count of successful locks; distribution across tiers.

## User Stories (links)

- [Commit scale on lock](./stories/commit-scale-on-lock/story.md)
- [Fire onLock events](./stories/fire-onlock-events/story.md)

## References

- PRD Perspective Lock type and acceptance criteria.
