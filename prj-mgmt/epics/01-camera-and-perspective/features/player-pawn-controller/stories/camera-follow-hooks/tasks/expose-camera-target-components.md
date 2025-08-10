# Expose camera target components

Date: YYYY-MM-DD
Status: Todo
Assignee: TBD
Related Story: ../story.md
Estimate: TBD
Priority: P2
GUID: TBD
Branch: feature/player/camera-target-components-<GUID>

## Description

- Add ECS components `CameraFollowTarget` and `CameraAimTarget` to player.
- Provide stable getter or query for camera systems to consume.

## Checklist

- [ ] Components defined and unit-tested
- [ ] Player entity tagged with components
- [ ] Public query/getter returns stable transforms

## Git Linking

- Branch naming: `feature/player/camera-target-components-<GUID>`
- Commit footer: `task: <GUID>`

## Lifecycle

- Rename file to `done-expose-camera-target-components-<GUID>.md` when complete.

## Links

- Reference: PRD Camera & Perspective System

## Notes

- Ensure smoothing or temporal stability to limit jitter.

## Success Criteria

- Camera modes consume anchors without visible pops.
