import DramaList from "./Dramalist";
import useFetch from "./useFetch";

const Home =()=>{
  let {data : dramas , pending , error}=
  useFetch("http://localhost:4000/dramaList");

 return (
    <div className="home-content">
      { error && <h1> {error} </h1> }
      { pending && <div className="loader" ></div> }
      {dramas &&  <DramaList dramas={dramas} title="All Dramas" />}
      

 </div>
 );
}
 
export default  Home;