# Frontend Project Structure

## Default direction

Prefer a simple feature-oriented structure for applications with multiple capabilities.

```text
src/
├── app/                application bootstrap and global composition
├── features/
│   ├── feature-a/
│   │   ├── components/
│   │   ├── domain/
│   │   ├── services/
│   │   └── tests/
│   └── feature-b/
├── shared/             only genuinely shared code
└── main.tsx
```

Not every feature needs every subfolder. Create them only when the feature has enough code to justify the separation.

## Rules

- Keep code near the feature that owns it.
- Prefer explicit imports over magical cross-feature access.
- Keep genuinely reusable primitives in shared locations.
- Do not create a `utils/` dumping ground.
- Extract packages only after a real reuse/deployment boundary appears.

## Small applications

A small app may simply use:

```text
src/
├── components/
├── data/
├── lib/
└── App.tsx
```

The architecture should grow with the problem.

## Related

ARCH-002, ARCH-003, SIMPLE-001.
