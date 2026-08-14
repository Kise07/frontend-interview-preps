// flatten.test.js
const assert = require('assert')

var flat = function (arr, n) {
  if (n <= 0) return arr
  const result = []
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, n - 1))
    } else {
      result.push(item)
    }
  }
  return result
}

// Tests
let passed = 0

// Test 1: n=0
assert.deepStrictEqual(flat([1, [2, [3]]], 0), [1, [2, [3]]])
passed++

// Test 2: n=1
assert.deepStrictEqual(flat([1, [2, [3]]], 1), [1, 2, [3]])
passed++

// Test 3: n >= depth
assert.deepStrictEqual(flat([1, [2, [3]]], 2), [1, 2, 3])
passed++

// Test 4: empty
assert.deepStrictEqual(flat([], 1), [])
passed++

// Test 5: already flat
assert.deepStrictEqual(flat([1, 2, 3], 1), [1, 2, 3])
passed++

// Test 6: mixed depths
assert.deepStrictEqual(flat([1, [2, 3], [4, [5]]], 1), [1, 2, 3, 4, [5]])
passed++

// Test 7: empty sub-arrays
assert.deepStrictEqual(flat([[], [1]], 1), [1])
passed++

console.log(`✅ All ${passed} tests passed`)
