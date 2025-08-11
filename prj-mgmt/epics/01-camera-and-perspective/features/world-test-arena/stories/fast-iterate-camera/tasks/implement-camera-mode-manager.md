# Implement minimal camera mode manager

```yaml
Date: 2025-08-10
Status: Planned
Assignee: TBD
Related Story: ../story.md
Estimate: TBD
Priority: P2
GUID: 8139f02f-7c2e-4919-b491-fd3dc6648170
Branch: feature/camera/fast-iterate-8139f02f-7c2e-4919-b491-fd3dc6648170
```

## Description

- Implement a minimal, testable camera mode manager in domain (pure logic, state machine-like).
- Expose `getCurrentMode`, `toggleMode`, and `reset` methods (or equivalent pure functions).
- Ensure infra/Three layer reads camera parameters from the manager.

## Checklist

- [ ] Domain mode manager implemented (pure)
- [ ] Basic unit tests for state transitions
- [ ] Wiring from app shell to mode manager

## Git Linking

- Branch naming: `feature/camera/fast-iterate-<GUID>`
- Commit footer: `task: <GUID>`

## Lifecycle

- Rename file to `done-implement-camera-mode-manager-<GUID>.md` when complete.
