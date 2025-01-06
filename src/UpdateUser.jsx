import React,{useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
const UpdateUser = () => {
const navigate=useNavigate();
const {id} = useParams();
const [name,setName]=useState();
const [email,setEmail]=useState();
const [address,setAddress]=useState();
const updateUser=(e)=>{
  e.preventDefault();
  axios.put(`https://backend-kqwd.onrender.com/api/user/update/${id}`,{name,email,address})
  .then(result=>{
    console.log(result);
    navigate('/');
  })
  .catch(err=>{console.log(err)})
}
  return (
    <div className='page-container'>
      <div className='form-container'>
      <h1>Update User</h1>
      <form onSubmit={updateUser} className="form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <br></br>
        </div>

        <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <br></br>
        </div>

        <div className="form-group">
        <label>Address</label>
        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
        <br></br>
        </div>

        <button className="update-button">update</button>
      </form>
    </div>
    </div>
  )
}

export default UpdateUser;