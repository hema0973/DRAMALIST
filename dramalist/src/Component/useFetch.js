import { useEffect , useState } from "react";

const useFetch = (request) => {
    let [data ,setDataList]=useState( null );
    let [pending , setPending]=useState(true);
    let [error , setError]=useState(null);
     
     useEffect(  ()=>{
  
                 setTimeout( ()=>{
                    fetch (request)   
                    .then((response)=>{
                       if(response.ok===false)
                      {
                        throw Error("data not found ,please try another resource");
                      }
                    else{
                      return response.json(); }
                    })

                    .then( (data)=>{ setDataList(data); setPending(false); } )
                   .catch((error)=>{ setError(error.message);setPending(false);})
                   /* .catch((error)=>{ setError("due to network issue data was not loaded") ; setPending(false);})*/
  
  
                    } ,1000)
  
        
                  } , []);
  
return {data , pending, error} 
                }
                export default useFetch; 

