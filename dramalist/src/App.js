import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Adddrama from "./Component/Adddrama";
import Dramadetails from "./Component/Dramadetails";
import Searchpage from "./Component/Searchpage";
import Notfoundpage from "./Component/Notfoundpage";

function App() {

  return (
    <Router>
      <div className="App">  

       <Navbar/>

    <Switch>
     
     <Route  exact path="/">
          <Home/>
     </Route>

     <Route path="/add">
         <Adddrama/>
     </Route>

     <Route path="/dramadetails:id">
      <Dramadetails/>
     </Route>

     <Route path="/search:searchVal">
      <Searchpage/>
     </Route>
     
     <Route path="*">
      <Notfoundpage/>
     </Route>

    </Switch>
      </div>
    </Router>
  )
}

export default App;