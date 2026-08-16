# Software Architecture Playbook

A personal reference for designing and reviewing software. It combines lessons from real projects with established architecture, design and engineering literature.

The goal is practical recall: identify the concepts that matter, remember their trade-offs and find examples of where they have been useful. The guidance is contextual, not universal.

## Start here

1. Browse the [architecture glossary](architecture/glossary.md) when you need a quick definition or keyword.
2. Open [concepts](concepts/README.md) for explanations, trade-offs and related ideas.
3. Use the [frontend reference stack](frontend/reference-stack.md) when starting a frontend.
4. Look through [projects](projects/README.md) for examples from real systems.
5. Consult [references](references/books.md) when you want to go deeper.

## Core rule

> Start with the smallest architecture justified by the problem. Add structure when a real requirement or change boundary earns it.

## Map

```text
Principles ───────────────→ decision heuristics
Concepts ────────────────→ architecture and design vocabulary
Frontend / Backend / ... → practical guidance by area
Projects ────────────────→ examples and lessons
References ──────────────→ literature, standards and further study
```

## Areas

- [Principles](principles/README.md): durable rules such as proportionality and earned abstractions.
- [Architecture concepts](concepts/README.md): SOLID, Clean Architecture, cohesion and coupling, ADRs, fitness functions and more.
- [Frontend](frontend/README.md): reference stack, architecture, packages, tooling and testing.
- [Backend](backend/README.md), [API](api/README.md), [Data](data/README.md), [Testing](testing/README.md), [Security](security/README.md), [Observability](observability/README.md) and [Delivery](delivery/README.md): cross-cutting guidance that can grow as needed.
- [Projects](projects/README.md): concrete examples without scores, confidence levels or promotion rules.
- [References](references/books.md): books, standards and useful models.

## Technology labels

Technology pages use only lightweight, practical labels:

- **Default** — a reasonable starting point for the contexts represented here.
- **Use when needed** — add when a concrete requirement justifies it.
- **Alternative** — a valid choice with different trade-offs.
- **Avoid by default** — use only with a specific reason.

## Contributing knowledge

Follow the short [methodology](METHODOLOGY.md): learn, name the concept, explain it simply, connect it to literature, record examples and note the trade-off. The [concept](templates/concept.md), [project example](templates/project-review.md), [technology](templates/technology.md) and [ADR](templates/adr.md) templates are optional starting points.

Run `npm run validate` to check local Markdown links.
