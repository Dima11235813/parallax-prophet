# Define dependency baseline

Role: Engineer

## User Story
As an Engineer, I want a minimal dependency list, so that the project remains lean and maintainable.

## Context / Notes
- Include Vite, TypeScript, ESLint, Prettier, Vitest, Playwright, Husky, Commitlint, lint-staged.

## Acceptance Criteria (Gherkin-style)
- Given package.json, when I inspect dependencies/devDependencies, then baseline packages are present with compatible versions.

## Estimation
TBD

## Dependencies
- Project scaffold.

## Design / Tech References
- Tool docs for minimal versions.

## QA Notes
- Verify `npm ci` works on Windows.

## Tasks (links)
- [Add baseline packages](./tasks/add-baseline-packages.md)

## Bugs (links)
// Link discovered issues here
