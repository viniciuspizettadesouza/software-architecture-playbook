# Next.js

**Label:** Recommended when server/framework capabilities are needed  
**Architectural impact:** High

## Use when requirements justify capabilities such as

- server-side execution;
- server-rendered or statically generated content;
- server-only secrets/data access;
- framework-integrated routing/data features;
- deployment model aligned with the framework.

## Do not use merely because

- React is being used;
- the project might need SEO someday;
- it is currently popular.

## Trade-offs

More framework conventions and a larger architectural surface than a client-only Vite app.

## Evidence

Auth Lab, Codex Reset Tracker, Portugal Prático.
