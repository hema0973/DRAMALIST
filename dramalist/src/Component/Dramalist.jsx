import { useState } from "react";
import { Link } from "react-router-dom";
const Dramalist = ({dramas , title}) => {
    return ( 
<div>
     <h1> {title} </h1>
{
         dramas.map((drama)=>
         {
            return(
               <Link to={`/dramadetails${drama.id}`}>
                <div key={drama.id} className="drama">
                    <h1>Drama Name:{drama.dramaName}</h1>
                    <h2>Hero:{drama.hero}</h2>
                    <h2>Heroin:{drama.heroin}</h2>
                    <h2>gener:{drama.gener}</h2>
                    <h2>Director:{drama.director}</h2>
                    <h2>Language:{drama.language}</h2>
                    <h2>releaseDate:{drama.releaseDate}</h2>
                    <h2>Rating:{drama.rating}</h2>
                    <h2>id:{drama.id}</h2>
                 
                      </div>
               </Link>
            );
        }
        )
    }
</div>
     );
}
 
export default Dramalist;