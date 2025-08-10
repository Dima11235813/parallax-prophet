# Define anchor/socket types

Date: YYYY-MM-DD
Status: Todo
Assignee: TBD
Related Story: ../story.md
Estimate: TBD
Priority: P1
GUID: TBD
Branch: feature/world/anchor-socket-types-<GUID>

## Description

- Define `AnchorSocket` and `Targetable` types/interfaces in engine/game layer.
- Add authoring IDs to scene; optionally include simple debug gizmos in dev.

## Checklist

- [ ] Types/interfaces compiled with strict TS
- [ ] Authoring IDs present in scene
- [ ] Debug markers toggleable

## Git Linking

- Branch naming: `feature/world/anchor-socket-types-<GUID>`
- Commit footer: `task: <GUID>`

## Lifecycle

- Rename file to `done-define-anchor-socket-types-<GUID>.md` when complete.

## Links

- Reference: PRD PerspectiveLock type.

## Notes

- Coordinate tolerances should be specified in meters; keep IDs stable.

## Success Criteria

- Reticle and scale features can detect sockets and targets by ID in the arena.
