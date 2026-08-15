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

- [FND-HAB-002](../findings/FND-HAB-002-artifact-testing.md): verified packed npm package, CLI and extension checks.

## Trade-offs

Packaging tests add CI time and may require platform-specific setup, but source tests cannot cover export maps, missing files or bundle assembly.

## Literature

- [Building Evolutionary Architectures](../references/books.md#building-evolutionary-architectures): executable fitness functions at delivery boundaries.

## Fitness function

Pack/install and execute the artifact in a temporary consumer environment; verify public exports, declarations and delivery-specific smoke paths.

## Related

- CI-001
- TEST-001
