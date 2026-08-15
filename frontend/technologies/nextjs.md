# Next.js

**Label:** Recommended when server/framework capabilities are needed
**Architectural impact:** High
**Reviewed:** 2026-08-16
**Evidence quality:** Mixed
**Observed versions:** Portugal Prático `15.3.2`

## Use when requirements justify capabilities such as

- server-side execution;
- server-rendered or statically generated content;
- server-only secrets/data access;
- framework-integrated routing/data features;
- deployment model aligned with the framework.

## Do not use merely because

- React is being used;
- the project might need SEO someday;
- it is currently popular.

## Trade-offs

More framework conventions and a larger architectural surface than a client-only Vite app.

## Evidence

[Auth Lab](../../projects/auth-lab.md) is historical evidence; [Codex Reset Tracker](../../projects/codex-reset-tracker.md) and [Portugal Prático](../../projects/portugal-pratico.md) have recorded snapshots.

## Alternatives and revisit trigger

Use Vite for client-only delivery or reassess when server/rendering/deployment constraints change. Review major framework upgrades as architectural changes.
