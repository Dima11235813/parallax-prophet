# Commitlint setup

Role: Engineer

## User Story

As an Engineer, I want commit messages validated, so that our history follows Conventional Commits.

## Context / Notes

- Configure @commitlint/config-conventional.

## Acceptance Criteria (Gherkin-style)

- Given the repo, when I commit with an invalid message, then the commit is rejected with guidance.

## Estimation

TBD

## Dependencies

- Husky setup.

## Design / Tech References

- Commitlint docs.

## QA Notes

- Test various invalid/valid messages.

## Tasks (links)

- [Configure Commitlint](./tasks/configure-commitlint.md)

## Bugs (links)

// Link discovered issues here
