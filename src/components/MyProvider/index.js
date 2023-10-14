import React, { Children, createContext, useContext, useState } from 'react'

/**
* @author
* @function MyProvider
**/
const MyContext=createContext();

export const MyProvider = ({children}) => {
  const [myState,setMyState]=useState("Intial value")
  
  
    return(
      <MyContext.Provider value={{myState,setMyState}} >
        {children}
      </MyContext.Provider>
   )

 }


 export const useMyContext =()=>{
    return useContext(MyContext);
 }