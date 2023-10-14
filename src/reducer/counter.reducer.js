export const reducer=(state={count:0},action)=>{
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