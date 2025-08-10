# 03 Engine/ECS & Project Skeleton

Owner: TBD
Status: Planned

## Overview
- Establish strict TypeScript project, ECS baseline, rendering/input/audio plumbing, and testing harness.

## Business Value
- Provides foundation to build all systems quickly and safely; satisfies acceptance criteria for strict TS and tests.

## Success Metrics (TBD allowed)
- Repo boots with Vite; ESLint/Prettier configured; unit test passes; ECS loop renders placeholder.

## Scope
- Vite scaffolding, TS config (strict), lint/format pipeline, minimal ECS loop.

## Out of Scope
- Full physics system; complex content pipeline (beyond placeholders).

## Dependencies
- None upstream; others depend on this.

## Risks & Mitigations
- Risk: Tooling friction; Mitigation: documented scripts and templates.

## Acceptance Criteria (Definition of Done)
- Install/run instructions work; `npm run dev` serves a placeholder scene; tests run green.

## Features (links)
- [Project Skeleton](./features/project-skeleton/feature.md)

## Milestones / Timeline
- M1: Vite + TS strict
- M2: ESLint/Prettier
- M3: ECS loop & sample system
