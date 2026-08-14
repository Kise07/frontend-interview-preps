// flatten one level
const flat = arr.flat()
// flatten deeply
const deep = arr.flat(Infinity)
// manual flatten with reduce
const manual = arr.reduce((acc, val) =>
  acc.concat(Array.isArray(val) ? val.flat(Infinity) : val), [])

// groupBy (the polyfill they'll ask you to write)
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key]
    acc[group] = acc[group] || []
    acc[group].push(item)
    return acc
  }, {})
}
