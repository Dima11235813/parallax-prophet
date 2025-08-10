# Implement player spawn

Date: YYYY-MM-DD
Status: Todo
Assignee: TBD
Related Story: ../story.md
Estimate: TBD
Priority: P1
GUID: TBD
Branch: feature/player/spawn-possess-<GUID>

## Description

- Create spawn system to place a player pawn at a named start marker.
- Ensure possession binds input before first update tick after scene load.

## Checklist

- [ ] Start marker recognized and validated
- [ ] Pawn instanced and registered in ECS
- [ ] Input possession confirmed immediately on load

## Git Linking

- Branch naming: `feature/player/spawn-possess-<GUID>`
- Commit footer: `task: <GUID>`

## Lifecycle

- Rename file to `done-implement-player-spawn-<GUID>.md` when complete.

## Links

- N/A

## Notes

- Handle re-spawn and scene reload path.

## Success Criteria

- QA confirms control available within first frame post-load; re-possession works after reload.
