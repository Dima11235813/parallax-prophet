# Enforce designer rules

Role: Designer

## User Story

As a Designer, I want to define rules that allow or block dimension toggles, so that players cannot break puzzles or exploits.

## Context / Notes

- Rules could include cooldowns, no-toggle zones, or alignment-only toggles.

## Acceptance Criteria (Gherkin-style)

- Given I am in a no-toggle zone, when I attempt to toggle, then the toggle is blocked and feedback is shown.
- Given a cooldown is active, when I attempt to toggle, then the toggle is denied until cooldown expires.

## Estimation

T-Shirt or points: TBD

## Dependencies

- Mode transition implementation.

## Design / Tech References

- PRD designer rules.

## QA Notes

- Verify rule combinations and edge priorities.

## Tasks (links)

- [Implement rule checks and feedback](./tasks/implement-rule-checks.md)

## Bugs (links)

// Link discovered issues here
