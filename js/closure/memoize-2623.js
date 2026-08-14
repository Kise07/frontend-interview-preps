// memoize.test.js
const assert = require('assert')

function memoize(fn) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    if (key in cache) return cache[key]
    const result = fn(...args)
    cache[key] = result
    return result
  }
}

let passed = 0

// Test 1: cache hit — same args, fn called once
{
  let count = 0
  const sum = (a, b) => { count++; return a + b }
  const fn = memoize(sum)
  assert.equal(fn(2, 2), 4) // miss
  assert.equal(fn(2, 2), 4) // hit
  assert.equal(count, 1)
  passed++
}

// Test 2: cache miss — different args
{
  let count = 0
  const sum = (a, b) => { count++; return a + b }
  const fn = memoize(sum)
  fn(2, 2)
  fn(3, 4)
  assert.equal(count, 2)
  passed++
}

// Test 3: order matters — (3,2) != (2,3)
{
  let count = 0
  const sum = (a, b) => { count++; return a + b }
  const fn = memoize(sum)
  fn(3, 2)
  fn(2, 3)
  assert.equal(count, 2)
  passed++
}

// Test 4: factorial — recursive calls also cached
{
  let count = 0
  const fact = (n) => { count++; return n <= 1 ? 1 : n * memfact(n - 1) }
  const memfact = memoize(fact)
  assert.equal(memfact(3), 6) // calls fact(3), fact(2), fact(1) = 3 calls
  const first = count
  assert.equal(memfact(2), 2) // cached from earlier
  assert.equal(count, first)  // no new call
  passed++
}

// Test 5: separate memoized fns have separate caches
{
  let count = 0
  const add = (a, b) => { count++; return a + b }
  const fn1 = memoize(add)
  const fn2 = memoize(add)
  fn1(1, 2)
  fn2(1, 2)  // different cache object — miss
  assert.equal(count, 2)
  passed++
}

// Test 6: fib memoization drastically reduces calls
{
  let count = 0
  const fib = (n) => { count++; return n <= 1 ? 1 : memfib(n - 1) + memfib(n - 2) }
  const memfib = memoize(fib)
  assert.equal(memfib(5), 8)
  // Without memo: 15 calls. With memo: 6 calls (5,4,3,2,1,0)
  assert.ok(count <= 6)
  passed++
}

console.log(`✅ All ${passed} tests passed`)
