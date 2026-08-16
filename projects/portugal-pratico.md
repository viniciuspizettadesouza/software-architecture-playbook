# Portugal Prático

Next.js editorial product containing practical guides whose operational accuracy decays over time.

## Interesting architecture decision

Content freshness is modeled as domain behavior rather than an informal editorial reminder. Verification dates produce current, review-soon and review-required states; tests cover slugs, relationships, dates, sources and threshold boundaries.

Related concepts: [Fitness Functions](../concepts/fitness-functions.md), [Clean Code](../concepts/clean-code.md) and [Layered Testing](../concepts/layered-testing.md).

## Trade-off to remember

Thresholds make expectations executable but remain product policy. They need adjustment if different guide categories age at different rates.
