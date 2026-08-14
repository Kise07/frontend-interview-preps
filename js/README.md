# LeetCode 2623 — Memoize

## Why This Solution?

LeetCode 2623 is fundamentally a **closure** problem. The goal is to cache previously computed results so that repeated calls with the same arguments return instantly without executing the original function again.

The cache is stored inside a closure, giving each memoized function its own private state.

```js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}
```

### Closure Pattern

This follows the same pattern used elsewhere in the repository:

| File | Closed-Over Variable | Purpose |
|--------|--------|--------|
| `data-privacy.js` | `balance` | Private state |
| `debounce.js` | `timer` | Timing control |
| `memoize.js` | `cache` | Result caching |

### Why These Tests?

The critical behavior is validating the cache:

- Same arguments return cached results.
- Different arguments do not share cache entries.
- Argument order matters (`[2,3] !== [3,2]`).
- Recursive factorial and Fibonacci tests verify that memoization benefits recursive computations by avoiding repeated work.

---

# LeetCode 2625 — Flatten Deeply Nested Array

## Why This Solution?

LeetCode 2625 is fundamentally a **recursion** problem. The challenge is flattening nested arrays up to a specified depth `n`.

```js
var flat = function (arr, n) {
  if (n <= 0) return arr;

  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  }

  return result;
};
```

### How It Works

For every element:

- If the element is an array and `n > 0`, recursively flatten it with depth `n - 1`.
- Otherwise, add the element directly to the result.

### Why These Tests?

The most important edge case is the flatten depth:

- `n = 0` → return the array unchanged.
- `n = 1` → flatten exactly one level.
- `n > depth` → flatten as deeply as possible.
- Empty arrays and mixed nesting levels help catch recursion and depth-handling bugs.

### Notes

A `reduce()` implementation is also valid:

```js
return arr.reduce((acc, item) => {
  if (Array.isArray(item)) {
    acc.push(...flat(item, n - 1));
  } else {
    acc.push(item);
  }
  return acc;
}, []);
```

However, the recursive `for...of` approach is generally simpler and easier to read.

---

## Key Concepts

- **2623: Memoize** → Closures, caching, function state.
- **2625: Flatten** → Recursion, nested data traversal, depth control.

Both problems reinforce core JavaScript patterns that appear throughout the `closure/` and algorithm implementations in this repository.
