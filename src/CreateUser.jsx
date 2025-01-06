import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './form.css';

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
    <div className="page-container">
      <div className="form-container">
      <h1>Create user</h1>
      <form onSubmit={submit} className="form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <br></br>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <br></br>
      </div>

      <div className="form-group">
        <label>Address</label>
        <input type="text" onChange={(e)=>setAddress(e.target.value)}></input>
        <br></br>
        </div>
        <button onSubmit={submit} className="submit">create</button>
      </form>
    </div>
    </div>
  )
}

export default CreateUser