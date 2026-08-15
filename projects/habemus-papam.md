# Project Evidence — Habemus Papam

## Context

Monorepo containing reusable Pope-information core package, CLI and Chrome extension.

## Strong observations

- core is the source of truth;
- core does not depend on terminal, HTML or Chrome APIs;
- delivery mechanisms consume public core interfaces;
- date-dependent functions accept a reference date for deterministic testing;
- CI validates multiple Node versions and delivery artifacts;
- packed npm package is tested, not only source code.

## Supports

ARCH-001, TEST-001, CI-001, PKG-001.
