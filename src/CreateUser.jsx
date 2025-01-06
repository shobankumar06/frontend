import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const navigate=useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    axios.post('https://backend-kqwd.onrender.com/api/user/create',{name,email,address})
    .then(result=>{
      console.log(result.data);
      navigate('/');
    })
    .catch(err=>{console.log(err)})
}
  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={submit}>
        <label>Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <br></br>

        <label>Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <br></br>

        <label>Address</label>
        <input type="text" onChange={(e)=>setAddress(e.target.value)}></input>
        <br></br>
        <button onSubmit={submit}>create</button>
      </form>
    </div>
  )
}

export default CreateUser