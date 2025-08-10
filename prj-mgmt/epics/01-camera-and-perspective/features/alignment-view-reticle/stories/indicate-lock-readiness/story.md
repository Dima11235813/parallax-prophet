# Indicate lock readiness

Role: Player

## User Story
As a Player, I want the reticle to indicate when I am within lock tolerance, so that I can confirm scale transfer confidently.

## Context / Notes
- Use color/state change or subtle animation.

## Acceptance Criteria (Gherkin-style)
- Given I am in alignment view and within tolerance, when my aim is steady for X ms, then the reticle changes to a "ready" state.
- Given I drift outside tolerance, when the angle/FOV delta exceeds thresholds, then the reticle returns to a "not ready" state.

## Estimation
T-Shirt or points: TBD

## Dependencies
- Reticle rendering.

## Design / Tech References
- PRD tolerance thresholds.

## QA Notes
- Verify thresholds edge cases.

## Tasks (links)
- [Add ready/not-ready state logic](./tasks/add-ready-state-logic.md)

## Bugs (links)
// Link discovered issues here
