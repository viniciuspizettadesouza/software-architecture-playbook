# FND-PORT-001 — Static architecture proportional to product needs

**Project:** Personal Portfolio
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/viniciuspizettadesouza.github.io
**Analyzed snapshot:** `cd4eac840aebb64f4d8cfa741147ee54fa3a69df`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

A focused personal portfolio presents professional information as a single-page static site.

## Architectural decision observed

React, TypeScript and Vite produce a static single page without routing, SSR, backend or application-state infrastructure that the content does not need.

## Evidence

- [`README.md`](https://github.com/viniciuspizettadesouza/viniciuspizettadesouza.github.io/blob/cd4eac840aebb64f4d8cfa741147ee54fa3a69df/README.md): states the single-page decision and delivery model.
- [`package.json`](https://github.com/viniciuspizettadesouza/viniciuspizettadesouza.github.io/blob/cd4eac840aebb64f4d8cfa741147ee54fa3a69df/package.json): small dependency and build surface.

## Quality attributes

Simplicity, deployability, performance and maintainability.

## Why it is strong

The product's content and sharing requirements are met without speculative server or routing complexity.

## Trade-offs and limitations

The structure must be revisited if independently navigable product areas, server-only behavior or dynamic data become real requirements.

## Literature mapping

YAGNI and complexity management; see [A Philosophy of Software Design](../references/books.md#a-philosophy-of-software-design).

## Supports

- SIMPLE-001
