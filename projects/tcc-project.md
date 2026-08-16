# TCC Project

Reconstructed data-science/ML thesis project where the original notebook was incomplete and some historical results cannot be reproduced exactly.

## Interesting architecture decisions

Inputs, hashes and environment assumptions feed a deterministic reconstruction pipeline. Recovered historical material stays distinct from newly generated output, and comparisons make conflicts visible.

```text
sources + manifests + hashes → reconstruction → result comparison
```

Related concepts: [Reproducible Results](../concepts/reproducible-results.md) and [Fitness Functions](../concepts/fitness-functions.md).

## Trade-off to remember

Full execution needs a large protected dataset and expensive environment. Unrecoverable sampling choices are documented as limitations instead of being concealed.
