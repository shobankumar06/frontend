import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './Apps.jsx'
import Gallery from './Gallery.jsx'
import Hen from './Hen.jsx'
import Cat from './Cat.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <Apps />
    <Gallery/>
   
  </StrictMode>
)
