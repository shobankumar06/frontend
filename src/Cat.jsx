import {useState} from 'react';
import {useEffect} from 'react';
function Cat(){
  let[count,setCount]=useState(0);
  useEffect(()=>{
    console.log("value updated")
    return(()=>{
      console.log("value")
    })
},[count])
  return(
    <>
      <h1>Count:{count}</h1>
      <button onClick={(()=>setCount(count+1))}>++</button>
      <button onClick={(()=>setCount(count-1))}>--</button>
    </>
  )
}
export default Cat

/*import {useState} from 'react';
import {useEffect} from 'react';
function Cat(){
  let[name,setName]=useState("poontamilramsivaseem")
  return(
    <>
    <div>
      <label htmlFor='name'>Name:{name}</label>
      <br/>
      <input type="text" id='name' onChange={((event)=>setName(event.target.value)
      )}></input>
    </div>
    </>
  )
}
export default Cat
*/