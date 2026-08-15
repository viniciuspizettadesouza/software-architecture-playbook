# Dependency Direction

Dependency direction should make stable/business concepts less dependent on volatile/framework details.

A useful target for feature modules is:

```text
routes/pages → components → domain/contracts
      └──────→ services/adapters ──→ domain/contracts
```

## Rules of thumb

- Domain logic should not import React when framework independence is valuable.
- Components should not directly embed persistence or networking rules when those rules are reused/important.
- External SDKs should stay near adapters/integration boundaries.
- Shared modules should be more stable than their consumers.

## Do not over-formalize

A presentational component does not need a hexagonal architecture. Apply boundaries where volatility, testing, security or reuse make them valuable.
