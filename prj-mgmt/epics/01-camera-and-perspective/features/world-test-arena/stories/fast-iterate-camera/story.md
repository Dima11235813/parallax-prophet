# Fast iteration on camera modes in Test Arena

Role: Designer, Engineer, QA

## User Story

As a designer/engineer, I want to rapidly switch and validate camera modes inside the Alignment Test Arena, so that I can iterate on behavior and UX without full game scenes.

## Context / Notes

- Builds upon the World Test Arena baseline. Uses placeholders and deterministic boot.
- Camera modes include: follow, free-orbit, alignment/lock preview. Start with two modes and a toggle.
- Inputs should be minimal and discoverable for QA (keyboard only OK initially).

## Acceptance Criteria (Gherkin-style)

- Given the app boots to the Test Arena in a dev build, when the scene loads, then a HUD overlay is visible in the top-left of `#app`.
- Given the HUD is visible, then it shows the current camera mode as text in the form `Mode: <mode>`.
- Given the HUD is visible and the camera is in orbit mode, then it displays orbit readouts in the form `orbit: az=<number> el=<number> r=<number>` with values updating in real time as the camera is manipulated.
- Given the camera is in orbit mode, when I drag with the mouse or use the mouse wheel, then the orbit values in the HUD update immediately and the view changes accordingly.
- Given the HUD shows a control labeled `Toggle Camera (C)`, when I click the button or press the `C` key, then the camera toggles between `orbit` and `free`, and the HUD `Mode:` label updates to reflect the new mode.
- Given the camera is in any mode, when I restart the scene, then the default mode `orbit` is restored.
- Given QA follows the on-screen hint (`Toggle Camera (C)`), when they use the control, then they can validate mode switching without consulting external docs.

## Estimation

T-Shirt or points: M

## Dependencies

- Feature: Test Arena & World Baseline (`features/world-test-arena/feature.md`)

## Design / Tech References

- `dev-ops/arch.md` sections on camera, DDD structure

## QA Notes

- Focus on deterministic boot and repeatable mode toggles. Verify no runtime errors.

## Tasks (links)

- [Plan camera mode toggles and inputs](./tasks/plan-camera-toggle.md)
- [Implement minimal camera mode manager](./tasks/implement-camera-mode-manager.md)
- [Wire toggle input in Test Arena](./tasks/wire-toggle-input.md)
- [Author QA checklist for camera modes](./tasks/author-qa-checklist.md)
- [Add HUD placeholder and camera mode UI](./tasks/add-hud-placeholder-and-camera-ui.md)

## Bugs (links)

- N/A
