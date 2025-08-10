# ESLint + Prettier setup

Role: Engineer

## User Story

As an Engineer, I want ESLint and Prettier configured, so that code quality and formatting are enforced automatically.

## Context / Notes

- Use eslint-config for TS and prettier integration.

## Acceptance Criteria (Gherkin-style)

- Given the repo, when I run `npm run lint` and `npm run format:check`, then both complete with no errors on a clean scaffold.
- Given staged files exist, when I commit, then lint-staged/pre-commit runs and blocks on errors (hooks added in separate story).

## Estimation

TBD

## Dependencies

- Project scaffold.

## Design / Tech References

- ESLint/Prettier docs.

## QA Notes

- Ensure Windows path rules.

## Tasks (links)

- [Add ESLint/Prettier configs](./tasks/add-eslint-prettier-configs.md)

## Bugs (links)

// Link discovered issues here
