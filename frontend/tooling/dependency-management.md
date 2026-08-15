# Dependency Management

Dependencies are architectural decisions in different degrees. Evaluate each one by responsibility and replacement cost, not popularity alone.

## Evaluate

- responsibility;
- architectural impact: Low / Medium / High;
- coupling introduced;
- replacement cost;
- necessity;
- maintenance/health;
- security posture;
- benefit relative to implementing internally.

## Rules

- commit the lockfile;
- use one package manager per project/workspace;
- automate dependency updates deliberately;
- review major-version upgrades as engineering changes, not routine noise;
- avoid dependencies for trivial behavior unless they reduce meaningful risk/cost.
