function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let count = 0

    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val        // assign by index to preserve order
        count++                 // track resolved count
        if (count === promises.length)
          resolve(results)      // only resolve when ALL done
      })
        .catch(reject)          // one fail = whole thing fails
    })

    if (promises.length === 0)
      resolve([])               // empty shortcut
  })
}

// test
// example 1
const p1 = Promise.resolve(10)
const p2 = new Promise(r => setTimeout(() => r(20), 100))
const p3 = Promise.resolve(30)

console.log('-- Example 1: All resolve --')
promiseAll([p1, p2, p3]).then(r => console.log('results: ', r))

// example 2
const p4 = Promise.resolve('ok')
const p5 = Promise.reject(new Error('FAIL'))
const p6 = Promise.resolve('ok2')

promiseAll([p4, p5, p6])
  .then(r => console.log('should not reach:', r))
  .catch(e => console.log('caught:', e.message))

// === WHY? ===
// 1. Results array preserves order via index assignment results[i] = val
// 2. count tracks how many resolved — only resolve() when all done
// 3. Single .catch(reject) = fails fast: one rejection rejects the whole
// 4. Empty array shortcut: resolve([]) immediately
