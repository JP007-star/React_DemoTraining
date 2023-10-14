import React, { useReducer, useState } from "react";
import Props from "../Props";


const initialState={count: 1}
const reducer=(state,action)=>{
   switch (action.type) {
      case "increment":
         return {count :state.count+1};
         break;
      case "decrement":
         return {count :state.count-1};
         break;
   
      default:
         throw new Error()
         break;
}

}

export default function Counter() {
//   const [count, setCount] = useState(0);
  const [state,dispatch]=useReducer(reducer,initialState)
//   function increment(){
//      setCount(count+1)
//   }
//   function decrement(){
//      setCount(count-1)
//   }


  return <div>Counter {state.count}
  <Props name="Jaya"  style={{color:"red"}}/>
  <Props name="Prasad" />
  <button onClick={()=>{ dispatch({type: "increment"})}}>+</button>
  <button onClick={()=>{ dispatch({type: "decrement"})}}>-</button>
  </div>;
}
