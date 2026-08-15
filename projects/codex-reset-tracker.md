# Project Evidence — Codex Reset Tracker

## Context

Privacy-conscious quota monitor/dashboard split between a local monitor and a hosted Next.js application.

## Strong observations

- local machine owns Codex authentication;
- cloud endpoint receives a small versioned sanitized payload;
- dedicated ingest secret rather than forwarding stronger upstream credentials;
- auth files/tokens/email/user/account identifiers are intentionally not sent to the hosted service;
- local dashboard binds to loopback.

## Supports

SEC-001, SEC-002.

## Improvement opportunity

Generic validation CI could complement the existing collection/event workflows.
