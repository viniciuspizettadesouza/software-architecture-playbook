# Architecture Fitness Functions

## What they mean

A fitness function is an automated or measurable check that shows whether an architectural property remains within an acceptable range.

## Examples

- dependency-direction rules;
- contract generation drift checks;
- latency or bundle-size budgets;
- test, build and security checks;
- package artifact smoke tests.

## Why they matter

Important constraints are less likely to decay when the delivery loop continuously verifies them.

## Don't overdo it

Not every architectural quality is cheaply automatable. Use review and explicit decisions where a check would be brittle or misleading.

## Related

- [Layered Testing](layered-testing.md)
- [Artifact Testing](artifact-testing.md)
- [Architecture Decision Records](adr.md)

## References

- [Building Evolutionary Architectures](../references/books.md#building-evolutionary-architectures)
