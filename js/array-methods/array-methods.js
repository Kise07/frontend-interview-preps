// map - transform each element
// Returns a new array of the same length. Never mutates the original.
const prices = [10, 20, 30]
const withTax = prices.map(p => p * 1.18)

console.log('prices: ', withTax)

// filter - keep matching elements
// Returns a new array, possibly shorter. Elements stays if callback returns true.
const users = [{ name: 'Alice', age: 17, role: 'user' }, { name: 'Bob', age: 22, role: 'admin' }]
const adults = users.filter(u => u.age >= 18)

console.log('adult users: ', adults)

// reduce - collapse to single value
// Most powerful, most misunderstood. Accumulator starts at initial value, gets updated each iteration.
const nums = [1, 2, 3, 4]
const sum = nums.reduce((acc, n) => acc + n, 0)

console.log('sum: ', sum)

// groupBy using reduce
const grouped = users.reduce((acc, user) => {
  const key = user.role
  acc[key] = acc[key] || []
  acc[key].push(user)
  return acc
}, {})

console.log('grouped by role: ', grouped) // declared users - role to use here
