
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Updatedrama from "./Updatedrama";


const Dramadetails = () => {
    let{id} = useParams();
     let [update , setUpdate]=useState(false);
     let history=useHistory();

   let{ data : drama , pending , error}=useFetch(`http://localhost:4000/dramaList/${id}`)
     let handleDelete = (id)=>{
   fetch(`http://localhost:4000/dramaList/${id}` , {method:"DELETE"})
    .then(
        ()=>{
            history.push("/");
        }
    );
 };
        return (
            <div >
                { error && <h1> {error} </h1> }
                { pending && <div className="loader" ></div> }
                { !update && drama && 
                <div>
                    <img src={drama.poster} alt="noy found"/>
                    <iframe width="560" height="315" src={drama.trailer}
                     title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen></iframe>
                     <h1> drama name : {drama.dramaName}</h1>
                     <h1> hero name : {drama.hero}</h1>
                     <h1> heroin name: {drama.heroin}</h1>
                     <h1> director name : {drama.director}</h1>
                     <h1> gener : {drama.gener}</h1>
                     <h1> rating : {drama.rating}</h1>
                     <h1>language : {drama.language}</h1>
                     <h1> releaseDate : {drama.releaseDate}</h1>

                           <button onClick={() =>{
                              handleDelete(drama.id);
                                  }}> DELETE</button>
                             <button onClick={()=>{setUpdate(true);}}>UPDATE</button>

                             
                  </div> 
}
                { update && <Updatedrama previousDrama={drama}/>}
                </div>
         );
    }
   
 
export default Dramadetails;