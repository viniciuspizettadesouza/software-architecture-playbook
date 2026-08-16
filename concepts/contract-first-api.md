# Contract-first APIs

## What it means

An explicit API contract is treated as the authoritative description of requests, responses and errors. Implementations and consumer types are validated or generated from it.

## Why it matters

It reduces drift between producers and consumers and makes compatibility visible before deployment.

## Example

```text
runtime schema → OpenAPI → generated consumer types
```

## When useful

Use it when an API has multiple consumers, a meaningful surface area or costly compatibility failures.

## Don't overdo it

Generation adds tooling and workflow cost. A tiny prototype may be clearer with a small hand-maintained boundary.

## Related

- [DRY](dry.md)
- [Fitness Functions](fitness-functions.md)
- [Ports and Adapters](ports-and-adapters.md)

## References

- [Contract-first APIs](../references/models-and-practices.md#contract-first-apis)
- [OpenAPI](../references/standards.md)
