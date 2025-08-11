# Add HUD placeholder and camera mode UI

```yaml
Date: 2025-08-10
Status: Planned
Assignee: TBD
Related Story: ../story.md
Estimate: TBD
Priority: P3
GUID: 6a1ed6cf-bdad-46ac-9f75-23db15ba0d9e
Branch: feature/ui/hud-camera-toggle-6a1ed6cf-bdad-46ac-9f75-23db15ba0d9e
```

## Description

- Add a minimal Heads-Up Display (HUD) overlay in the Test Arena with a button (or key hint) to switch camera mode.
- The HUD will display current camera mode and basic orbit values for QA (azimuth, elevation, radius).
- Wire the HUD to the domain camera mode manager through the app shell.

## Checklist

- [ ] HUD overlay container rendered in `#app` on boot
- [ ] Shows current camera mode text
- [ ] Button or keyboard shortcut toggles mode via domain manager
- [ ] QA instructions added to story or QA checklist

## Git Linking

- Branch naming: `feature/ui/hud-camera-toggle-<GUID>`
- Commit footer: `task: <GUID>`

## Lifecycle

- Rename file to `done-add-hud-placeholder-and-camera-ui-<GUID>.md` when complete.
