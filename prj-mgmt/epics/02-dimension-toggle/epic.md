# 02 Dimension Toggle System

Owner: TBD
Status: Planned

## Overview

- Smooth, readable transitions between 2D and 3D while preserving sensible momentum and enforcing designer rules.

## Business Value

- Core identity mechanic enabling interplay of dimensions; required for all exploration and puzzle flows.

## Success Metrics (TBD allowed)

- Transition latency within target; no motion sickness spikes in tests; preserves intent.

## Scope

- Transition triggers, blending parameters, momentum mapping, rule checks to allow/deny toggles.

## Out of Scope

- Cinematic transitions and VFX polish beyond MVP.

## Dependencies

- Engine/ECS skeleton; input; basic UI cues.

## Risks & Mitigations

- Risk: Jarring feel; Mitigation: tune blend curves, add camera easing.

## Acceptance Criteria (Definition of Done)

- Given allowed context, when player toggles, then mode switches with preserved momentum and rule enforcement.

## Features (links)

- [Mode Transition](./features/mode-transition/feature.md)

## Milestones / Timeline

- M1: Basic toggle + input
- M2: Momentum preservation
- M3: Rule enforcement
