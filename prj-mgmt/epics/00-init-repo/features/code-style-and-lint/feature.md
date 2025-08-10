# Code Style & Lint

Owner: TBD
Status: Planned

## Overview
- Establish ESLint, Prettier, and EditorConfig to enforce code style and quality.

## Business Value
- Consistent, readable codebase with automated checks.

## Non-Goals
- Enforcing commit message style (covered elsewhere).

## Dependencies
- Project scaffold.

## Risks & Assumptions
- Ensure compatibility on Windows paths.

## Acceptance Criteria
- `npm run lint` runs ESLint with TS rules; `npm run format:check` validates Prettier; `.editorconfig` present.

## User Stories (links)
- [ESLint + Prettier setup](./stories/eslint-prettier-setup/story.md)
- [EditorConfig file](./stories/editorconfig/story.md)

## References
- PRD Tooling.
