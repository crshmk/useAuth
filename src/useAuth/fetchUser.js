let fetchUser = cb => id => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(user => cb(user))
    .catch(console.log)
}

export default fetchUser
