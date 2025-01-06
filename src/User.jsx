import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
const User = () => {
  const[user,setUser]=useState([]);
  useEffect(()=>{
    axios.get('https://backend-kqwd.onrender.com/api/user/fetch').then(result=>{
      setUser(result.data.users)
    })
    .catch(err=>{console.log(err);
    })
  },[]);
  const deleteUser=(id)=>{
    axios.delete(`https://backend-kqwd.onrender.com/api/user/delete/${id}`)
    .then(result=>{
      console.log("user deleted");
    })
    .catch(err=>{console.log(err)})
  }
  return (
    <div>
      <h1>User</h1>
      <Link to="/create">Create User</Link>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        {
        user.map((users)=>(
          <tr>
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.address}</td>
            <td>
              <Link to={`/update/${users._id}`}>update</Link>
              <button onClick={(e)=>deleteUser(users._id)}>delete</button>
            </td>
          </tr>
        ))
      }
      </table>
    </div>
  )
}

export default User