import React, { useEffect, useState } from 'react'
import { fetch } from '../../action/api.action'

/**
* @author
* @function Timer
**/

export  const Timer = (props) => {
     // state variable
     const [time, setTime] = useState(new Date())
     const [data,setData]=useState("");


     
     useEffect(()=>{
        const data=fetch();
        setData(data);
        setInterval(()=>{
          setTime(new   Date())
        },1000)
       
     },[time])

    

    return (
        <>
            <div>Timer</div>
            {JSON.stringify(data)}
            <div>{time.toLocaleTimeString()}</div>
        </>
    )

}