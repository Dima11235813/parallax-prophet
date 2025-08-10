# Git Hooks & Commit Style

Owner: TBD
Status: Planned

## Overview

- Add Husky for pre-commit hooks and Commitlint for conventional commits.

## Business Value

- Automates quality checks and standardizes commit messages.

## Non-Goals

- Release automation.

## Dependencies

- Project scaffold; lint/format available.

## Risks & Assumptions

- Git hooks function on Windows and macOS.

## Acceptance Criteria

- Pre-commit runs lint/format on staged files; commit messages validated per config.

## User Stories (links)

- [Husky setup](./stories/husky-setup/story.md)
- [Commitlint setup](./stories/commitlint-setup/story.md)

## References

- Conventional Commits.
