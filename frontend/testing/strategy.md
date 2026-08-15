# Frontend Testing Strategy

Test according to risk rather than chasing one coverage number.

## Unit

Use for pure logic, parsers, calculations, reducers and deterministic domain behavior.

**Default:** Vitest.

## Component

Use for user-observable behavior of React components and feature integration.

**Default:** Testing Library + Vitest.

Prefer queries/expectations that resemble how the user experiences the UI.

## E2E

Use for critical journeys that cross routing, browser behavior, API boundaries or multiple features.

**Default:** Playwright.

Examples:

- sign-in;
- checkout;
- important form submission;
- primary navigation or workflow.

## Avoid

- duplicating the same assertions at every layer;
- testing implementation details;
- huge E2E suites for logic that unit tests cover faster and more deterministically.

## Related

TEST-001.
