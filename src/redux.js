import { createStore  } from "react-redux"

export const increment=()=>{
    return {type:"increment"}
}

export const decrement=()=>{
    return {type :"decrement"}
}

export const reducer=(state=0,action)=>{
    switch (action.type) {
     case "increment":
         return {count:state.count+1}
         break;
     case "decrement":
         return {count:state.count-1}
         break;
    
     default:
         return state;
         break;
    }
 }


 const store=createStore(reducer)
 store.subcribe(()=>{console.log(store.getState());})


 // dispatch
 store.dispatch(increment());
 store.dispatch(increment());
 store.dispatch(increment());
