# Branching Strategy

This repo uses a lightweight GitFlow-inspired model optimized for small, parallel feature work with explicit links to project tasks via GUIDs.

## Branch Types

- feature: `feature/<area-or-scope>/<short-slug>-<GUID>`
  - Example: `feature/camera/reticle-ready-6f2a5d9b`
- fix: `fix/<scope>/<short-slug>-<GUID>`
  - Example: `fix/build/eslint-config-1a2b3c4d`
- chore/docs/refactor: same pattern as above
- release: `release/<version>` (cut from `main` when preparing a tagged release)
- hotfix: `hotfix/<version>` (branched from `main`)

GUIDs come from the task documents in `prj-mgmt/`.

## Main Branches

- `main`: always green; protected; PRs only; tagged releases are cut from here.

## Commit Message Linking

- Include the task GUID in commit footers:
  - `task: <GUID>`
  - Optional: `Refs: <URL to task doc>`
  - Example conventional commit with footer:

    ```
    feat(camera): show alignment reticle when ready

    Implements ready-state logic and rendering.

    task: 6f2a5d9b-9c24-4d67-8b7e-2a5fcd1ab4e3
    ```

## PR Conventions

- Title follows conventional commits style when possible.
- PR description includes:
  - Task GUID(s)
  - Links to the task file(s) in `prj-mgmt/`
  - Summary of scope and acceptance criteria

## Workflow

1. Create or open a task doc; generate a `GUID`.
2. Create a branch using the task’s `GUID`.
3. Commit with conventional commits and add `task: <GUID>` in the footer.
4. Open a PR to `main`. Reference the task.
5. Merge after CI is green.

## Generating GUIDs

- Use UUID v4. On most systems:
  - macOS/Linux: `uuidgen`
  - Node: `node -e "console.log(crypto.randomUUID())"`
  - Windows PowerShell: `[guid]::NewGuid()`

Store the GUID in the task doc and reuse it across branch names, commit footers, and PRs.
See also: `dev-ops/cursor-rules.md` for file rename conventions when tasks are Done.
