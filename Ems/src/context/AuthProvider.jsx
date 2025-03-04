import React, { createContext, useEffect, useState} from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthProvider = createContext()

const AuthProvider = ({ childern }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])

  return (
    <div>
        <AuthContext.Provider value={userData}>
        {childern}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider