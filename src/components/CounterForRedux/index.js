import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
* @author
* @function CounterForRedux
**/

export const CounterForRedux = (props) => {
    
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch()
  return(
    <div>CounterForRedux {count}
        <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
    </div>
   )

 }