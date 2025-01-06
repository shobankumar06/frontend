import React from 'react'
import Dog from './Dog.jsx'
import List from './List.jsx'
function Shoban(){
  let nums=100;
  return(
    <>
      <Dog name="poontamil" nums={nums}/>
      <List />
    </>
  )
}
export default Shoban