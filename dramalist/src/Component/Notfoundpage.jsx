import { Link } from "react-router-dom";

const Notfoundpage = () => {
    return (
        <div>
            <h1> 404 : PAGE NOT FOUND</h1>
            <Link to="/">go back to the home page</Link>
        </div>
      );
}
 
export default Notfoundpage;