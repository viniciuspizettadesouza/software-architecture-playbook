# Challenge Portfolio

Curated archive of historical technical challenges containing sanitized originals and maintained executable demonstrations.

## Interesting architecture decisions

Historical source is preserved outside executable workspaces, while deliberate adaptations live in maintained `demo/` directories:

```text
original/ → immutable reference
demo/     → maintained executable adaptation
```

This avoids installing obsolete dependencies or accidentally treating historical code as current guidance.

Related concepts: [Separation of Concerns](../concepts/separation-of-concerns.md), [Artifact Testing](../concepts/artifact-testing.md) and [Reproducible Results](../concepts/reproducible-results.md).

## Trade-off to remember

Dual copies consume space and can drift, so adaptations should state how they relate to the original.
