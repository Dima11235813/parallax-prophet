# Define anchor sockets & targets

Role: Designer/Engineer

## User Story

As a Developer, I need well-defined anchor sockets and targetable objects so alignment reticle and scale transfer can function.

## Acceptance Criteria (Gherkin-style)

- Given the arena is loaded, when I enter alignment view and aim near a socket within tolerance, then the socket is recognized as eligible.
- Given I have a targetable object, when aligned to a socket and confirmed, then downstream features can read onLock payloads.

## Dependencies

- PerspectiveLock spec; ECS components for tags/ids.

## Tasks (links)

- [Define anchor/socket types](./tasks/define-anchor-socket-types.md)
