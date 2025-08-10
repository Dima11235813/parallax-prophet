# Commit scale on lock

Role: Player

## User Story

As a Player, I want an object to snap to a discrete scale tier when I confirm while aligned, so that I can solve perspective puzzles.

## Context / Notes

- Tiers: S | M | L | XL; tunable.

## Acceptance Criteria (Gherkin-style)

- Given I am within angle/FOV tolerance and press confirm, when the system validates alignment, then the target object scale is set to the configured tier and persists.
- Given the object was previously scaled, when I save/load or leave/return, then the scaled state is retained.

## Estimation

T-Shirt or points: TBD

## Dependencies

- Alignment readiness signal.

## Design / Tech References

- PRD PerspectiveLock type.

## QA Notes

- Validate tier quantization and persistence.

## Tasks (links)

- [Implement scale tier commit](./tasks/implement-scale-tier-commit.md)

## Bugs (links)

// Link discovered issues here
