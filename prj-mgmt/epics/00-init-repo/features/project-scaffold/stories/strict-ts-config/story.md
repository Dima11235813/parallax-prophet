# Enable strict TS config

Role: Engineer

## User Story
As an Engineer, I want strict TypeScript enabled, so that type safety is maximized across the codebase.

## Context / Notes
- Include noImplicitAny, strictNullChecks, etc.

## Acceptance Criteria (Gherkin-style)
- Given tsconfig.json, when I inspect compilerOptions, then `"strict": true` and key strict flags are enabled.
- Given the project compiles, when I run `npm run build`, then there are no TS errors due to strict flags on the scaffold.

## Estimation
TBD

## Dependencies
- Vite TS scaffold.

## Design / Tech References
- TypeScript compiler options docs.

## QA Notes
- Validate Windows paths in tsconfig include/exclude.

## Tasks (links)
- [Configure strict options](./tasks/configure-strict-options.md)

## Bugs (links)
// Link discovered issues here
