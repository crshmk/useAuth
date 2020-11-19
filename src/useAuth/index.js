import React, { createContext, useContext, useEffect, useState } from 'react'

import fetchUser from './fetchUser'

let useAuthProvider = () => {
  let [user, setUser] = useState({})

  let signin = fetchUser(setUser)
  let signout = () => setUser('')

  return {
    user,
    signin,
    signout
  }
}

let AuthContext = createContext()

export let AuthProvider = ({children}) => {
  let auth = useAuthProvider()
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

let useAuth = () => useContext(AuthContext)

export default useAuth
