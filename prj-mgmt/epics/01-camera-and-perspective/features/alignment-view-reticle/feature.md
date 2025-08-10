# Alignment View & Reticle

Owner: TBD
Status: Planned

## Overview

- Provide an alignment camera mode with visual reticle and tolerance feedback to enable perspective-based interactions.

## Business Value

- Teaches and supports the signature mechanic; improves readability and usability.

## Non-Goals

- Photo mode; advanced hinting systems.

## Dependencies

- Input mapping; camera controller; minimal UI layer.

## Risks & Assumptions

- Assumes ECS available; risk of UX confusion mitigated by on-screen guides.

## Acceptance Criteria

- Enter/exit alignment view via input.
- Reticle shows within tolerance; color or state indicates lock readiness.

## Metrics / Telemetry (optional)

- Track attempts vs. successful locks; average time-to-lock.

## User Stories (links)

- [Show alignment reticle](./stories/show-alignment-reticle/story.md)
- [Indicate lock readiness](./stories/indicate-lock-readiness/story.md)

## References

- See PRD Camera & Perspective System section.
