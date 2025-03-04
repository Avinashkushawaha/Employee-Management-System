import React from 'react'
import './index.css'
import  Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/others/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import CreateTask from './components/others/CreateTask'



function App() {
 

  return (
    <>
      
      {/* <Login /> */}
      {/* <EmployeeDashboard/> */}
      
      <AdminDashboard />
      
    
    </>
  )
}

export default App
