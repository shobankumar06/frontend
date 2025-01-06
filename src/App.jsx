import './App.css';
import Home from './Home.jsx';
import Aboutus from './Aboutus.jsx';
import Contact from './Contact.jsx';
import Params from './Params.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {createContext} from 'react'
import {useState} from 'react'

import Hen from './Hen.jsx' 
6
export let nameContext = createContext();
const App = () => {
  // let[Number,setNumber]=useState(0);
  // let[dark,setDark]=useState(false)

  // let doubleNum=useMemo(()=>{
  //   return slowFunction(Number);
  // },[Number])

  // let themeStyle=useMemo(()=>{
    
  // })
  
  // let[colour,setColour]=useState("black");
  // let[bg,setBg]=useState("white");
  // function change(){
  //   setColour(colour=="white"?"black":"white")
  //   setBg(bg=="black"?"white":"black")
  // }
  return (
    <>
      <Router>
    
    <header id="header">
    <Link to="/" id="link">ABC</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Aboutus">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Params">Params</Link>
      </nav>
    </header>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Params/:id" element={<Params />} />      
      </Routes>
    
    

    <footer className="foot">
      <h3 id="copy">&copy; Copyright</h3>
    </footer>
  </Router>

    
    
    {/* <nameContext.Provider  value={{bg,colour}}>
      <Hen />
      <button onClick={change}>Click</button>
    </nameContext.Provider>
    </> */}

</>
  )
}


export default App;
