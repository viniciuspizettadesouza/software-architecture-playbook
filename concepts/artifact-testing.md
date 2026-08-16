# Artifact Testing

## What it means

Test the package, bundle, image or extension that consumers will actually receive, not only its source code.

## Why it matters

Source tests can pass while export maps, declarations, bundled files, permissions or packaging configuration are broken.

## Examples

- install and execute a packed npm tarball;
- smoke-test a CLI bundle;
- load a built browser extension;
- verify a container image starts with production configuration.

## Trade-offs

Artifact tests add build time and sometimes platform setup. Focus them on the public delivery boundary.

## Related

- [Fitness Functions](fitness-functions.md)
- [Layered Testing](layered-testing.md)

## References

- [Building Evolutionary Architectures](../references/books.md#building-evolutionary-architectures)
