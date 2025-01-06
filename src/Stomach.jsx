import React from 'react'
import {nameContext} from './App'
import {useContext} from 'react';
function Stomach(){
  let name=useContext(nameContext);
  let{bg,colour}=useContext(nameContext);
  return (
    <div>
      <h1 style={{backgroundColor:bg , color:colour}}>Stomach </h1>
    </div> 
  )
}
export default Stomach