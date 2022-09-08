import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const Updatedrama = ({previousDrama}) => { 
   const [dramaName , setDramaName ]= useState(previousDrama.dramaName);
   const [hero , setHero] = useState(previousDrama.hero);
   const [heroin , setHeroin] = useState(previousDrama.heroin);
   const [director , setDirector] = useState(previousDrama.director);
   const [gener , setGener] = useState(previousDrama.gener);
   const [rating , setRating] =  useState(previousDrama.rating);
   const [language , setLanguage] = useState(previousDrama.language);
   const [releaseDate , setReleaseDate] = useState(previousDrama.releaseDate);
   const [poster , setPoster] = useState(previousDrama.poster);
   const [trailer , setTrailer] = useState(previousDrama.trailer);
    let {id} = useParams();

let history = useHistory();
    let handleSubmit =(e)=>{
      e.preventDefault();
      let drama = { dramaName , hero , heroin , director , gener , rating , language, releaseDate, poster , trailer};
      // check the current drama ids present r not
   
  
  
   fetch(`http://localhost:4000/dramaList/${previousDrama.id}` , 
      {
          method:"PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type" : "application/json"},
          body: JSON.stringify(drama)})
  
          .then(()=>{history.push("/")})
      }

    return (  
        <div className="add-drama">
            <h1> Update Drama </h1>
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
           
            <input type="submit" value = "updateDrama" />
            
        

        </form>
            
    </div>
  );
};

 
export default Updatedrama;