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

Examples in the evidence base: Auth Lab, Codex Reset Tracker, Portugal Prático.
