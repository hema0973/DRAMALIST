import { useState } from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
   let[searchVal , setSearchVal]= useState("");
    return (
        <nav>
            <h1>DramaList</h1>
            <div>
            <input type="search" value={searchVal} onChange={ (e)=>setSearchVal(e.target.value)}/>
         <Link to={`/search${searchVal}`}> <button>search</button>
        </Link>
            </div>
            <div>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add New Drama</Link>
                    <span>{searchVal}</span>
                    
            </div>
        </nav>

    );
}
export default Navbar;
