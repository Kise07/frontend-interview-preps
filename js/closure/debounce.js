// debounce - closes over time
function debounce(fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// test
let count = 0
const log = () => {
  count++;
  console.log('fired:', count)
}
const debouncedLog = debounce(log, 300)
debouncedLog()
debouncedLog()
debouncedLog()
console.log('called 3 times, count before delay:', count)
setTimeout(() => console.log('after delay, count:', count), 400)

// Why: timer lives in the closure — it persists across all calls to the returned function. Each call immediately sees the same timer, cancels it, and replaces it. Only the last setTimeout survives, so log fires exactly once.
