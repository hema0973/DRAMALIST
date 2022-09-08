import { useParams } from "react-router-dom";
import Dramalist from "./Dramalist";
import useFetch from "./useFetch";

const Searchpage = () => {
   let{ searchVal }= useParams();
   let {data : dramas , pending , error} = useFetch("http://localhost:4000/dramaList");
    return (  
        <div className="h1">
            <h1> search page {searchVal} </h1>
           {  dramas && <Dramalist
            dramas={dramas.filter( (drama) => {return drama.dramaName.toLowerCase().includes(searchVal.toLowerCase())})}
            title="search result"/>}
        </div>
    );
}
 
export default Searchpage; 