# Fast iteration on camera modes in Test Arena

Role: Designer, Engineer, QA

## User Story

As a designer/engineer, I want to rapidly switch and validate camera modes inside the Alignment Test Arena, so that I can iterate on behavior and UX without full game scenes.

## Context / Notes

- Builds upon the World Test Arena baseline. Uses placeholders and deterministic boot.
- Camera modes include: follow, free-orbit, alignment/lock preview. Start with two modes and a toggle.
- Inputs should be minimal and discoverable for QA (keyboard only OK initially).

## Acceptance Criteria (Gherkin-style)

- Given the app boots to the Test Arena, when I press the camera toggle input, then the camera switches between available modes and the view updates accordingly.
- Given the camera is in a mode, when I restart the scene, then the default mode is restored.
- Given QA uses the readme hints, when they follow the steps, then they can verify mode switching and baseline behavior.

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
