# Show alignment reticle

Role: Player

## User Story
As a Player, I want to see an alignment reticle in alignment view, so that I understand when I can perform scale transfer.

## Context / Notes
- Reticle should be visible only in alignment view.

## Acceptance Criteria (Gherkin-style)
- Given I am in alignment view, when my aim approaches an eligible anchor within tolerance, then the reticle appears centered.
- Given I exit alignment view, when I return to normal mode, then the reticle is hidden.

## Estimation
T-Shirt or points: TBD

## Dependencies
- Alignment view mode.

## Design / Tech References
- PRD Camera & Perspective System.

## QA Notes
- Test on multiple resolutions.

## Tasks (links)
- [Implement reticle rendering](./tasks/implement-reticle-rendering.md)

## Bugs (links)
// Link discovered issues here
