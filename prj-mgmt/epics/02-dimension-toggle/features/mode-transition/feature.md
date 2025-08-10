# Mode Transition

Owner: TBD
Status: Planned

## Overview
- Implement 2D↔3D transition with blending, momentum preservation, and rule checks.

## Business Value
- Delivers the core feel of dimension swapping; supports puzzles and combat.

## Non-Goals
- Cinematic VFX beyond MVP.

## Dependencies
- Input; camera; physics/motion components.

## Risks & Assumptions
- Risk: nausea if abrupt; assume easing curves help.

## Acceptance Criteria
- Given allowed context, when toggled, then player preserves sensible momentum and orientation.

## User Stories (links)
- [Preserve momentum](./stories/preserve-momentum/story.md)
- [Enforce designer rules](./stories/enforce-designer-rules/story.md)

## References
- PRD Dimension Toggle section.
