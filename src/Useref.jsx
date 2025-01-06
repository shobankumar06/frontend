import React from 'react'
import {useState,useRef} from 'react'

/*function Useref(){
  let[count,setCount]=useState(0);
  let countRef=useRef(0);

  let increment=()=>{
    setCount(count+1);
    countRef.current++;
    console.log("state:",count);
    console.log("Ref:",countRef.current);
  }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>++++</button>
    </div>
  )
}*/
function Useref(){
  let[count,setCount]=useState("");

  // useEffect(()=>{
     
  // })
  function onchange(e){
    console.log(e.target.value)
  }
  return(
    <>
      <input  type="text" onChange={onchange}></input>
    </>
  )
}
export default Useref