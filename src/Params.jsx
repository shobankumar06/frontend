import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
  let {id} =useParams();
  return (
    <div>Params id:{id}</div>
  )
}

export default Params