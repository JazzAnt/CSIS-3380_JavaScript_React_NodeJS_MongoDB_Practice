import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//bootstrap was installed using "npm install bootstrap" on CMD while in the project folder
//importing bootstrap (jot this on the cheatsheet)
//see bootstrap docs, basically add classes to your elements
import "bootstrap/dist/css/bootstrap.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
