// data privacy - count is private
function bankAccount(initial) {
  let balance = initial
  return {
    deposit: (n) => balance += n,
    getBalance: () => balance
  }
}

// test
const acc = bankAccount(100)
console.log('balance:', acc.getBalance())
acc.deposit(50)
console.log('after deposit:', acc.getBalance())
console.log('direct access:', acc.balance)
acc.balance = 9999
console.log('after temper:', acc.getBalance())

// Why: deposit and getBalance form a closure over the balance variable. Even after bankAccount finishes executing, the returned object holds a reference to that specific balance binding. Setting acc.balance just adds a new property to the object — it can't reach into the closure scope.
