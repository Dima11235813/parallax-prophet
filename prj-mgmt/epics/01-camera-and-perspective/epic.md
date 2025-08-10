# 01 Camera & Perspective System

Owner: TBD
Status: Planned

## Overview

- Implement multi-mode camera (2D side-on, 3D over-shoulder, alignment view) and the perspective-driven scale transfer mechanic.

## Business Value

- Core mechanic that differentiates Parallax Prophet; required for puzzles, boss design, and the vertical slice acceptance criteria.

## Success Metrics (TBD allowed)

- Playable arena where alignment lock snaps an object to a discrete scale tier and persists state. Performance stable at 60fps on mid-range laptop.

## Scope

- Camera modes switching, alignment reticle, tolerance checks, quantized scale tiers, event hooks on successful lock.

## Out of Scope

- Advanced photo-mode hints, cinematic camera rails (stretch goals).

## Dependencies

- Engine/ECS skeleton; input system; minimal UI to surface alignment state.

## Risks & Mitigations

- Risk: Precision/tolerance feel. Mitigation: tunable config + debug overlays and test scene.

## Acceptance Criteria (Definition of Done)

- Toggle among camera modes via input.
- Given alignment within tolerance, when player confirms, then the from-entity scales to tier and onLock events fire.
- State saved and restored (if save system present by sprint).

## Features (links)

- [Alignment View & Reticle](./features/alignment-view-reticle/feature.md)
- [Scale Transfer & Tiers](./features/scale-transfer-tiers/feature.md)

## Milestones / Timeline

- M1: Camera modes + input mapping
- M2: Alignment detection + UI reticle
- M3: Scale transfer commit + events
