// Always do this - Error Handling Pattern
async function fetchUser(id) {
  try {
    // const res = await fetch(`/api/user/${id}`)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('fetchUser failed', err)
    return null       // or re-throw depending on use case
  }
}

// test
fetchUser(1).then(user => console.log('user 1:', user))
fetchUser(2).then(user => console.log('user 2:', user))
