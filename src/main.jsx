import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrafficSignal from './TrafficSignal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrafficSignal />
  </StrictMode>,
)
