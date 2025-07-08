import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clockslogan from './components/ClockSlogan.jsx'
import Clock from './components/Clock-Heading.jsx'
import CurrentTime from './components/CurrentTime.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <center className='font-monospace'>
      <App />
    <Clock />
    < Clockslogan />
   < CurrentTime /> 
   </center>
    
  </StrictMode>,
)
