# Show alignment state HUD

Role: Player

## User Story
As a Player, I want the HUD to show when alignment is ready, so that I know when I can commit a scale transfer.

## Context / Notes
- Simple icon or text state.

## Acceptance Criteria (Gherkin-style)
- Given I am in alignment view and within tolerance, when readiness is achieved, then the HUD shows a "ready" indicator.
- Given I leave alignment view, when returning to normal mode, then the indicator hides.

## Estimation
T-Shirt or points: TBD

## Dependencies
- Alignment readiness signal.

## Design / Tech References
- PRD UI/HUD.

## QA Notes
- Verify accessibility contrast.

## Tasks (links)
- [Implement HUD readiness indicator](./tasks/implement-hud-readiness-indicator.md)

## Bugs (links)
// Link discovered issues here
