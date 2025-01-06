import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './Apps.jsx'
import Hen from './Hen.jsx'
import Cat from './Cat.jsx'
import Gallery from './Gallery.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <List/> */}
    {/* <Apps /> */}
    <Gallery/>
  </StrictMode>
)
