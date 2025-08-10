# Husky setup

Role: Engineer

## User Story

As an Engineer, I want Husky pre-commit hooks, so that lint/format runs automatically on staged files.

## Context / Notes

- Integrate with lint-staged.

## Acceptance Criteria (Gherkin-style)

- Given the repo, when I commit, then pre-commit hook runs lint/format on staged files and blocks on failure.

## Estimation

TBD

## Dependencies

- Lint/format scripts in place.

## Design / Tech References

- Husky docs.

## QA Notes

- Verify on Windows git-bash.

## Tasks (links)

- [Configure Husky and lint-staged](./tasks/configure-husky-lint-staged.md)

## Bugs (links)

// Link discovered issues here
