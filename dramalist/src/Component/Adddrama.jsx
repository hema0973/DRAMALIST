import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Adddrama = () => {
   const  [dramaName , setDramaName ]= useState(" ");
   const [hero , setHero] = useState("");
   const [heroin , setHeroin] = useState("");
   const [director , setDirector] = useState("");
   const [gener , setGener] = useState("");
   const [rating , setRating] =  useState("");
   const [language , setLanguage] = useState("");
   const [releaseDate , setReleaseDate] = useState("");
   const [poster , setPoster] = useState("");
   const [trailer , setTrailer] = useState("");

     let { data : dramas} = useFetch("http://localhost:4000/dramaList");
    let history = useHistory();
 let handleSubmit =(e)=>{
    e.preventDefault();
    let drama = { dramaName , hero , heroin , director , gener , rating , language, releaseDate, poster , trailer};
    // check the current drama ids present r not
 
var duplicate = dramas.some((d) =>{ return d.dramaName === dramaName});


    if(duplicate==false)
    {
 fetch("http://localhost:4000/dramaList" , 
    {
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(drama)})

        .then(()=>{history.push("/")})
    }
    else
    {
alert("Drama already existing , please try to add new drama");
    }


}

    return (
        <div className="add-drama">
            <h1>Add The New Drama</h1>

            <hr/>
            

            <form onSubmit={handleSubmit}>   
                <div>
                        <lable>DramaName :</lable>
                        <input type="text" value={dramaName} onChange ={(e)=>{setDramaName(e.target.value);}}/>
                        <lable>Hero :</lable>
                        <input type="text" value={hero} onChange ={(e)=>{setHero(e.target.value);}} />
                        <lable>Heroine :</lable>
                        <input type="text" value={heroin} onChange ={(e)=>{setHeroin(e.target.value);}}/>
                        <lable>Director :</lable>
                        <input type="text" value={director} onChange ={(e)=>{setDirector(e.target.value);}}/>
                       <lable>Genere :</lable>
                        <input type="text"value={gener} onChange ={(e)=>{setGener(e.target.value);}}/>
                        <lable>Ratings :</lable>
                        <input type="text" value={rating} onChange ={(e)=>{setRating(e.target.value);}}/>
                        <lable>Language :</lable>
                        <input type="text"value={language} onChange ={(e)=>{setLanguage(e.target.value);}}/>
                        <lable>ReleaseDate :</lable>
                        <input type="text" value={releaseDate} onChange ={(e)=>{setReleaseDate(e.target.value);}}/>
                        
                        <lable>Poster  :</lable>
                        <input type="text" value={poster} onChange ={(e)=>{setPoster(e.target.value);}} />
                        <lable>Trailer :</lable>
                        <input type="text" value={trailer} onChange ={(e)=>{setTrailer(e.target.value);}} />
                </div>
               
                <input type="submit" value = "Add Drama" />
                
            

            </form>
                
        </div>
      );
};
 
export default Adddrama;