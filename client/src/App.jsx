import { Route, Redirect } from "react-router-dom";

//  HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//  Component
import Temp from "./Components/temp";

//  pages
import Home from "./Page/home";

function App() {
  return (
   <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Home} />
      
   </>
  );
}

export default App;
