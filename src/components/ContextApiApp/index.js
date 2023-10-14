import React from 'react'
import { MyProvider, useMyContext } from '../MyContext'

/**
* @author
* @function ContextApiApp
**/




export const ComponentA = (props) => {
  const {myState ,setMyState}=useMyContext()
  return(
    <div>ComponentA
        <p>MY State : {myState}</p>
        <button onClick={()=>setMyState("Upated State")}>Change Sate</button>
    </div>

   )

 }


export const ComponentB = (props) => {

    const {myState} =useMyContext();
    return(
      <div>ComponentB
        <p>My State in ComponentB :{myState}</p>
      </div>
      
     )
  
   }
export const ContextApiApp = (props) => {
  return(
    <MyProvider>
        <ComponentA/>
        <ComponentB/>
    </MyProvider>
   )

 }