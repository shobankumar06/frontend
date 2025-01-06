import React from 'react'
import './App.css';
const Slambook=()=>{
  return(
    <>
    <main className="body">
    <div className="q">
      <fieldset>
        <legend>SLAMBOOK</legend>
      <form >
       <label htmlFor='name'>Name:</label>
       <input type="text" id="name"></input><br/>

       <label htmlFor='nickname'>Nickname:</label>
       <input type="text" id="nickname"></input><br/>

       <label htmlFor='address'>Address:</label>
       <input type="text" id="address"></input><br/>

       <label htmlFor='phone'>Phone:</label>
       <input type="number"></input><br/>

       <label htmlfor="memories">Memories:</label>
       <input type="text" id="memories"></input><br/>

       <label htmlFor='gender'>Gender:</label>
       <label htmlFor='male'>Male</label>
       <input type="radio"></input>
       <label>Female</label>
       <input type="radio"></input><br/>

       <label htmlFor='college'>College:</label>
       <select id="college">
       <option value="option1">kec</option>
       <option value="option2">kpr</option>
       <option value="option3">psg</option>
       <option value="option4">sengunthar</option>
       </select>
       <br/>

        
        
       </form>
       </fieldset>
       </div>
       </main>
    </>
  )
}
export default Slambook