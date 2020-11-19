import React from 'react'

import useAuth from '../useAuth'

let Name = () => {
  let auth = useAuth()
  return <p>user name is {auth.user.name}</p>
}

export default Name
