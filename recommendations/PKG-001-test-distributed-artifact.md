# PKG-001 — Test the artifact that will actually be distributed

**Status:** Trial  
**Confidence:** High

## Problem

Source tests can pass while the published package, bundle or extension is broken by packaging/build configuration.

## Recommendation

Test the actual artifact consumers will receive.

Examples:

- install the packed npm tarball;
- execute CLI bundle smoke tests;
- build/load extension artifact;
- verify exports and declaration files.

## Evidence

Habemus Papam tests its packed npm package and delivery-specific artifacts in CI.
