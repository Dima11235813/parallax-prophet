# Emit onLock event with payload

Date: YYYY-MM-DD
Status: Todo
Assignee: TBD
Related Story: ../story.md
Estimate: TBD
Priority: P2

## Description

- Emit event on successful scale commit including fromEntity, toAnchor, scaleTier.

## Checklist

- [ ] Define event schema
- [ ] Publish event on commit
- [ ] Add simple listener example (doc)

## Links

- Designs/specs: PRD PerspectiveLock

## Notes

- Ensure idempotency if commit retried.

## Success Criteria

- Event captured by a test listener with correct payload.
