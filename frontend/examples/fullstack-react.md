# Example — Full-stack React Application

Use a full-stack framework when server capabilities are part of the problem rather than an anticipated possibility.

Possible blueprint:

```text
Next.js + React + TypeScript
        ↓
feature boundaries
        ↓
server/client responsibility separation
        ↓
runtime validation at external boundaries
        ↓
explicit persistence/integration services
        ↓
Vitest + Testing Library + Playwright
        ↓
CI quality gates
```

Project examples: [Auth Lab](../../projects/auth-lab.md), [Codex Reset Tracker](../../projects/codex-reset-tracker.md) and [Portugal Prático](../../projects/portugal-pratico.md).
