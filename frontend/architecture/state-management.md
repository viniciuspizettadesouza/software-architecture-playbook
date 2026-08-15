# State Management

Avoid treating “state management” as a single problem. Classify the state first.

## 1. Local UI state

Examples: modal open/closed, selected tab, local input state.

**Default:** React state/reducer.

## 2. Remote/server state

Examples: products, account data, search results, rate cards.

Start simple. Add TanStack Query when the application benefits from capabilities such as:

- caching;
- invalidation;
- deduplication;
- retry/refetch;
- shared loading/error state;
- background refresh.

## 3. URL state

Filters, page, sort or selection that should survive refresh/share often belong in the URL rather than a global store.

## 4. Shared client-only state

First consider composition, lifting state or React context. Add a dedicated global state library only after a concrete problem appears.

## 5. Persistent browser state

Storage is an external capability. Hide important persistence semantics behind a boundary rather than spreading `localStorage` reads through components.

## Anti-pattern

Do not choose Redux/Zustand/Jotai/etc. before identifying what state category actually needs them.
