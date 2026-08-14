# TypeScript Playground

A minimal TypeScript setup for learning static typing concepts. Currently a single-file scratchpad (`src/a.ts`) demonstrating type annotations.

## Setup

The project is configured with a strict `tsconfig.json`:

- `strict: true` — full strict type-checking
- `noUncheckedIndexedAccess` — array/index access can be `undefined`
- `exactOptionalPropertyTypes` — optional props must be explicitly `undefined`
- `jsx: "react-jsx"` — supports `.tsx` files
- `module: "nodenext"`, `target: "esnext"`

## Structure

| File | Purpose |
|--------|--------|
| `src/a.ts` | Type annotation scratchpad |
| `tsconfig.json` | Compiler config |
| `dist/` | Compiled output (`.js`, `.d.ts`, source maps) |

## Compile

```bash
tsc
```

Compiles `src/` → `dist/` (run `npx tsc` if `tsc` isn't on your PATH).

## What `src/a.ts` Teaches

```ts
let x: number = 1;
console.log(x);
```

Key point: `x` is declared as `number`. Uncommenting `x = 'kise'` produces a type error — TypeScript won't let you assign a string to a `number` variable. This is the fundamental difference from plain JavaScript.
