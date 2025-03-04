import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskContext from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContext>
      <TaskContext>
      <App />
      </TaskContext>
    </AuthContext>
    
  </React.StrictMode>,
)
