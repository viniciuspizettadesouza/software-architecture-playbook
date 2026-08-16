# Models and Practices

## C4 Model

Useful for communicating software architecture at multiple levels of abstraction: system context, containers, components and code where necessary.

Source: [C4 model introduction](https://c4model.com/introduction).

## Architecture Decision Records (ADRs)

A lightweight method for preserving decision context, choice and consequences close to the code.

Source: [Martin Fowler — Architecture Decision Record](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html).

## YAGNI

“You Aren't Gonna Need It” is used here as a practical reminder that speculative complexity must not outrun actual requirements.

## Ports and Adapters / Dependency Inversion

Useful for describing a narrow observed dependency direction: application-owned behavior depends on explicit contracts while delivery and infrastructure mechanisms implement or consume those contracts. Do not infer a whole-system architecture label from one adapter.

## Contract-first APIs

Useful when one authoritative machine-readable contract drives validation, documentation or consumer generation. The practice has value only when generation and drift checks remain part of the delivery path.
