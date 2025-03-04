import React, { useEffect } from 'react'
import './index.css'
import  Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/others/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import CreateTask from './components/others/CreateTask'
import { setLocalStorage } from './utils/localStorage'



function App() {
 
  useEffect(() => {
    setLocalStorage()
  }, )

  return (
    <>
      
      <Login />
      {/* <EmployeeDashboard/> */}
      
      {/* <AdminDashboard /> */}
      
    
    </>
  )
}

export default App
