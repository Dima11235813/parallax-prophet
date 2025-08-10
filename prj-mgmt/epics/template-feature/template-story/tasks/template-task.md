# Template Task

```yaml
Date: YYYY-MM-DD
Status: Todo | In Progress | Blocked | In Review | Done
Assignee: TBD
Related Story: ../story.md (or link)
Estimate: TBD
Priority: P1 | P2 | P3
GUID: TBD
Branch: feature/<short-slug>-<GUID>
```

## Description

- Clear, actionable work item. Prefer verbs and concrete outcomes.
- Include the task `GUID` in the feature branch name and in commit message footers using `task: <GUID>`.

## Checklist

- [ ] Subtask 1
- [ ] Subtask 2

## Git Linking

- Branch naming: `feature/<area-or-scope>/<short-slug>-<GUID>` (examples in `dev-ops/branching-strategy.md`).
- Commit footer: add `task: <GUID>` to connect commits to this task. Add multiple `task:` lines if needed.

## Lifecycle

- When status changes to `Done`, rename the file to `done-<short-slug>-<GUID>.md` (see `dev-ops/.cursorrules`).

## Links

- PRs, issues, designs, specs

## Notes

- Edge cases, constraints, or follow-ups.

## Success Criteria

- Conditions to mark this task complete.
- At least one merged PR includes commits that reference `task: <GUID>`.
