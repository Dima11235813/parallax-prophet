# Fire onLock events

Role: Designer

## User Story
As a Designer, I want an onLock event emitted when a scale lock is committed, so that I can trigger puzzle state changes declaratively.

## Context / Notes
- Event payload should include ids and tier.

## Acceptance Criteria (Gherkin-style)
- Given a successful lock, when the tier is committed, then an onLock event is emitted with fromEntity, toAnchor, and scaleTier.
- Given downstream listeners exist, when they receive onLock, then they can perform configured actions (e.g., open door, spawn platform).

## Estimation
T-Shirt or points: TBD

## Dependencies
- Scale commit.

## Design / Tech References
- PRD PerspectiveLock.onLock.

## QA Notes
- Verify payload schema and multiple listeners.

## Tasks (links)
- [Emit onLock event with payload](./tasks/emit-onlock-event.md)

## Bugs (links)
// Link discovered issues here
