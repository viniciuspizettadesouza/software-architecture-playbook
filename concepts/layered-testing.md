# Layered Testing

## What it means

Use different test scopes for different risks: fast unit tests for focused logic, integration and contract tests for boundaries, and a small number of end-to-end tests for critical journeys.

## Why it matters

No single layer provides fast feedback, realistic integration coverage and user-level confidence equally well.

## When useful

Choose layers from failure impact and boundary risk rather than fixed test-count ratios.

## Don't overdo it

Duplicating the same assertion at every layer slows feedback without adding confidence. Avoid brittle end-to-end coverage of every permutation.

## Related

- [Fitness Functions](fitness-functions.md)
- [Artifact Testing](artifact-testing.md)
- [Frontend testing strategy](../frontend/testing/strategy.md)

## References

- [Testing models and practices](../references/models-and-practices.md)
