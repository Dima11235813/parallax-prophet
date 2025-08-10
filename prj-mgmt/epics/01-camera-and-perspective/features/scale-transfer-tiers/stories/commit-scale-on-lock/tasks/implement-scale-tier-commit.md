# Implement scale tier commit

Date: YYYY-MM-DD
Status: Todo
Assignee: TBD
Related Story: ../story.md
Estimate: TBD
Priority: P1

## Description
- Quantize perceived scale to tier and set transform; persist state.

## Checklist
- [ ] Compute perceived scale and map to tier
- [ ] Apply transform atomically
- [ ] Persist scaled state

## Links
- Designs/specs: TBD

## Notes
- Consider easing to reduce popping.

## Success Criteria
- Object snaps to correct tier and persists on reload.
