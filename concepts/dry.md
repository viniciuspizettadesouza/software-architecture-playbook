# DRY

## What it means

“Don't Repeat Yourself” is primarily about duplicated knowledge: one fact or rule should have one authoritative representation.

## Why it matters

When the same knowledge exists in several places, it can drift and force synchronized changes.

## When useful

Apply it to business rules, schemas, contracts and configuration that must remain consistent.

## Don't overdo it

Similar-looking code may represent different concepts that will evolve independently. Temporary duplication is often safer than a premature shared abstraction.

## Related

- [YAGNI](yagni.md)
- [KISS](kiss.md)
- [Contract-first APIs](contract-first-api.md)

## References

- Andrew Hunt and David Thomas — *The Pragmatic Programmer*
