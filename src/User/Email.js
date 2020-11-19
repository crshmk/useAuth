import React from 'react'

import useAuth from '../useAuth'

let Email = () => {
  let auth = useAuth()
  return <p>user email is {auth.user.email}</p>
}

export default Email
