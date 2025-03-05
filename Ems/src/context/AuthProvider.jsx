import React, { createContext, useEffect, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ childern }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData({employees})
    }, [])

  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
        {childern}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider