# Parallax Prophet

A browser-based TypeScript game exploring 2D↔3D interplay, perspective, and scale as core mechanics. This repo is the foundation for a vertical slice with strict TypeScript, automated tests, and modern tooling.

- Vision, pillars, and acceptance criteria originated in `initial-prompt.md` and are expanded in the PRD.
- Project management lives in `prj-mgmt/` with epics, features, stories, and tasks.

## Quick Start

Prerequisites:

- Node.js 20+ (LTS recommended)
- npm 10+

Setup:

```bash
# install dependencies
npm ci

# install Playwright browsers (first time only)
npx playwright install chromium firefox webkit

# start dev server (http://localhost:5173)
npm run dev
```

## Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview built app
- `npm run lint`: ESLint (flat config)
- `npm run format`: Prettier write
- `npm run typecheck`: TypeScript noEmit
- `npm test`: Vitest run (jsdom)
- `npm run test:watch`: Vitest in watch mode
- `npm run test:coverage`: Vitest coverage
- `npm run e2e`: Playwright tests

## Tooling

- Vite + TypeScript (strict)
- ESLint v9 flat config + Prettier (pre-commit via Husky + lint-staged)
- Vitest (jsdom) for unit tests
- Playwright for e2e (auto-runs dev server)
- Commitlint (conventional commits)

Conventional commits (examples):

- `feat: add alignment view reticle`
- `fix: correct scale transfer rounding`
- `chore: configure eslint flat config`

## Project Structure

Current scaffold:

```
index.html
src/
  main.ts
  sum.ts
  __tests__/sum.test.ts
e2e/
  example.spec.ts
```

Planned structure (per PRD):

```
engine/   # ECS, render, input, camera, puzzle systems
game/     # scenes, quests, entities, assets
ui/       # HUD, menus, inventory, dialogue
```

## Testing

- Unit tests: `npm test` (jsdom environment)
- E2E tests: `npm run e2e` (launches web server at `http://localhost:5173`)
- First-time setup: `npx playwright install chromium firefox webkit`

## Code Quality & Git Hooks

- Pre-commit runs ESLint + Prettier via lint-staged
- Commit messages are checked by Commitlint (`@commitlint/config-conventional`)
- If hooks don’t run, ensure `npm run prepare` has been executed

## Docs & Links

- Origin and vision: `initial-prompt.md`
- Product Requirements: `prd.md`
- PRD → Project Management mapping: `prd-to-prj-mgmt.md`
- Epics index: `prj-mgmt/epics/epics.md`
- Current sprint: `prj-mgmt/sprints/sprint-1.md`
- Style Guide: `STYLEGUIDE.md`
- Branching Strategy: `dev-ops/branching-strategy.md`

## Linking Tasks to Commits

- Each task in `prj-mgmt/` includes a `GUID`. Use it to tie work together:
  - Branch: `feature/<area>/<slug>-<GUID>`
  - Commit footer: add `task: <GUID>`
  - PR description: include `task: <GUID>` and a link to the task doc

## Troubleshooting

- ESLint v9 flat config requires `eslint.config.js`. If ESLint can’t find config, ensure you’re on Node 20+.
- If Vitest prompts to install `jsdom`, run `npm i -D jsdom` (already included here).
- If Playwright can’t find browsers, run `npx playwright install`.

## License

ISC (see `package.json`).
