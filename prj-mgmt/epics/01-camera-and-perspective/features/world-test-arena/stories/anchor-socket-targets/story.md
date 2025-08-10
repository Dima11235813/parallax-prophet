# Define anchor sockets & targets

Role: Designer/Engineer

## User Story

As a Developer, I need well-defined anchor sockets and targetable objects so alignment reticle and scale transfer can function.

## Context / Notes

- Socket definitions should match the PerspectiveLock schema in PRD.

## Acceptance Criteria (Gherkin-style)

- Given the arena is loaded, when I enter alignment view and aim near a socket within tolerance, then the socket is recognized as eligible.
- Given I have a targetable object, when aligned to a socket and confirmed, then downstream features can read onLock payloads.

## Estimation

T-Shirt or points: TBD

## Dependencies

- PerspectiveLock spec; ECS components for tags/ids.

## Design / Tech References

- PRD Camera & Perspective System; initial-prompt PerspectiveLock type.

## QA Notes

- Validate tolerances with debug overlay; verify IDs are unique and persisted.

## Tasks (links)

- [Define anchor/socket types](./tasks/define-anchor-socket-types.md)

## Bugs (links)

// Link discovered issues here
