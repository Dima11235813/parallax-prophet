# 00 Init Repo & Developer Experience

Owner: TBD
Status: Planned

## Overview

- Initialize repository with strict TypeScript Vite scaffold, code style, unit and e2e tests, commit hooks, and developer documentation.

## Business Value

- Establishes a reliable foundation and shared conventions to accelerate future work and maintain quality.

## Success Metrics (TBD allowed)

- Fresh clone can: install deps, run dev server, run unit and e2e tests, and pass lint/format checks on CI.

## Scope

- Project scaffold, strict TS config, ESLint/Prettier, EditorConfig, Vitest setup, Playwright setup, Husky + Commitlint, baseline npm scripts, CONTRIBUTING.md and Style Guide.

## Out of Scope

- Production CI/CD pipelines; advanced monorepo tooling.

## Dependencies

- None.

## Risks & Mitigations

- Risk: Windows path issues; Mitigation: test on Windows/macOS and document.

## Acceptance Criteria (Definition of Done)

- `npm ci && npm run dev` serves at localhost:5173.
- `npm run test` executes unit tests via Vitest and passes a sample test.
- `npm run test:e2e` runs Playwright and passes a sample e2e.
- `npm run lint` and `npm run format:check` pass on clean repo.
- Commit hooks run lint/format on staged files.
- CONTRIBUTING.md and STYLEGUIDE.md exist and reflect decisions.

## Features (links)

- [Project Scaffold](./features/project-scaffold/feature.md)
- [Code Style & Lint](./features/code-style-and-lint/feature.md)
- [Unit Testing](./features/unit-testing/feature.md)
- [E2E Testing](./features/e2e-testing/feature.md)
- [Git Hooks & Commit Style](./features/git-hooks-and-commit-style/feature.md)
- [NPM Dependencies & Scripts](./features/npm-dependencies/feature.md)
- [Developer Docs](./features/developer-docs/feature.md)

## Milestones / Timeline

- M1: Scaffold + strict TS
- M2: Lint/format + EditorConfig
- M3: Vitest + Playwright
- M4: Hooks + Commit style
- M5: Docs
