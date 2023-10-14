import React, { useEffect, useState } from 'react'

/**
* @author
* @function StateManagement
**/

export const StateManagement = (props) => {
  const [time ,setTime]=useState(new Date())
  const [state,setState]=useState("State Management")



  useEffect(() => {
    setInterval(()=>{
       setTime(new Date())
    },1000)
  }, [])
  
  const handleClick=()=>{
    setState("State Changed...!")
  }
  return(
    <div>StateManagement
      <h1>{time.toLocaleTimeString()}</h1>
      <h2>{state}</h2>
      <button onClick={handleClick}>Change State</button>
    </div>
   )

 }