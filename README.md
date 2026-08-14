# JS Neofi — Learning Repo

A collection of self-contained study notes and code examples for learning JavaScript, React, and TypeScript. Every file doubles as a note: it shows the *how* and explains the *why*.

## Topics

### `js/` — Core JavaScript

- **Closures** — private state (`bankAccount`), `debounce`, LeetCode 2623 memoize
- **Promises** — hand-rolled `promiseAll` (order-preserving, fail-fast)
- **Async/Await** — try/catch error-handling pattern with `fetch`
- **Array methods** — `map`/`filter`/`reduce`, `groupBy`, LeetCode 2625 flatten
- **`README.md`** — deep-dives on LeetCode 2623 (memoize) and 2625 (flatten)

### `react/` — React with Vite

Vite + React 19 scaffold with learning components:

- `UseState.jsx` — `useState` counter
- `useEffect.jsx` — timer with a stale-closure bug (study material)
- `UserCard.tsx` — props vs state, ternary-based like button

```bash
npm run dev
```

### `typescript/` — TypeScript

Minimal strict TypeScript setup (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) with a type-annotation scratchpad.

```bash
tsc
```

### `Ternary.md` — Written Guide

A detailed markdown guide on the ternary operator: syntax, nested ternaries, and when to use/avoid them.

## Themes

- **Closures** are the recurring core pattern (private state, debounce timer, memoize cache)
- LeetCode-style solutions paired with "why this works" explanations
- Code files are learning notes, not production code
