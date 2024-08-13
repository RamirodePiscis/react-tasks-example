import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskContexProvider from './context/TaskContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContexProvider>
      <App />
    </TaskContexProvider>
  </StrictMode>,
)
