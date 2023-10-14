export const fetch =async ()=>{
    try{
        const res=await fetch("https://dummyjson.com/products");
        console.log(res);
        return res;
    }
    catch(err){
        console.log("failed fetch");
    }
}