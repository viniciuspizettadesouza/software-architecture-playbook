# Frontend Reference Stack — v0.1

> This is a starting blueprint, not a mandatory stack. Add only what the problem justifies.

## Default baseline

| Area | Current default | Guidance |
|---|---|---|
| Language | TypeScript | Default for non-trivial projects |
| UI | React | Default for interactive applications in this playbook |
| Build | Vite | Default for client-side applications |
| Full-stack framework | Next.js | Use when server/framework capabilities are actual requirements |
| Routing | React Router | Add when a SPA needs meaningful client routes |
| Remote/server state | TanStack Query | Add when caching/invalidation/request lifecycle become meaningful concerns |
| Runtime validation | Zod | Use at untrusted or external boundaries |
| Unit tests | Vitest | Default for TS/React logic |
| Component tests | Testing Library | Test observable behavior rather than internals |
| E2E | Playwright | Cover critical journeys, not every permutation |
| Static quality | TypeScript strict + ESLint | Default |
| Formatting | Prettier | Default unless an alternative is deliberately standardized |
| Styling | Contextual | MUI, Tailwind or plain CSS depending product/design constraints |
| CI | lint + typecheck + test + build | Minimum baseline; expand by risk |

## Framework decision

```text
Interactive frontend needed?
        ↓ yes
      React
        ↓
Client-side app sufficient? ── yes ──→ Vite
        │
        no
        ↓
Need server rendering, server-only execution,
framework-native routing/data capabilities,
or similar server requirements? ──→ Next.js
```

Do not choose Next.js only because it is popular. Do not choose Vite only because it is simpler if the product genuinely needs server-side framework capabilities.

## State decision

```text
State belongs to one component/subtree?
        → React local state

State represents remote server data?
        → Fetch directly while simple
        → TanStack Query when cache/invalidation/retry/shared request state matters

State is client-only and shared broadly?
        → First consider context/composition
        → Add a global state library only when concrete complexity appears
```

## API boundary

Preferred evolution:

```text
fetch/client call
      ↓
runtime validation where data is untrusted
      ↓
explicit service/API boundary
      ↓
generated contracts when API surface/drift risk justifies it
```

## Quality baseline

At minimum for a serious application:

```text
format
lint
typecheck
unit/component tests
build
```

Add by risk:

```text
API/integration
contract tests
browser E2E
security audit
production smoke
recovery/load checks
```

## What is intentionally not a default yet

No default is currently declared for:

- global client-state library;
- form library;
- observability vendor;
- i18n library;
- component library;
- CSS strategy;
- monorepo tooling.

These should be promoted only after more evidence and comparisons are collected.
