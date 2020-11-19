import React, { useEffect } from 'react'

import useAuth from '../useAuth'

let User = ({children}) => {
  let auth = useAuth()
  useEffect(() => auth.signin(3), [])

  return <div>{children}</div>
}

export default User
