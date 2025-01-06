import React from "react";
function Dog(value){
  let names="vaseem"
  let num=100;
  return (
    <>
      <h1>the dog name is {names + value.name}</h1>
      <h1>number:{num + value.nums}</h1>
    </>
  )
}
export default Dog
