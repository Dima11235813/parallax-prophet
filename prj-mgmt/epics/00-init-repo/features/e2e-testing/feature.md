# E2E Testing

Owner: TBD
Status: Planned

## Overview
- Configure Playwright for browser e2e tests and add a sample test.

## Business Value
- Validates end-to-end flows in the browser.

## Non-Goals
- Cross-browser matrix beyond Chromium initially.

## Dependencies
- Project scaffold.

## Risks & Assumptions
- Headless runs work in CI-like environments.

## Acceptance Criteria
- `npm run test:e2e` executes Playwright and passes a sample test.

## User Stories (links)
- [Playwright setup](./stories/playwright-setup/story.md)
- [Sample e2e test](./stories/sample-e2e-test/story.md)

## References
- PRD tests.
