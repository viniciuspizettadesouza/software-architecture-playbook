# Testing Guidance

Test according to risk rather than chasing a universal coverage number or pyramid ratio.

- Use focused unit tests for deterministic rules and transformations.
- Use integration and contract tests where components, storage or APIs meet.
- Use a small set of end-to-end tests for critical user journeys.
- Test the [artifact consumers receive](../concepts/artifact-testing.md) when packaging can fail independently from source code.
- Turn important constraints into [fitness functions](../concepts/fitness-functions.md).

See [Layered Testing](../concepts/layered-testing.md) for the concept and the [frontend testing strategy](../frontend/testing/strategy.md) for concrete tools and examples.
