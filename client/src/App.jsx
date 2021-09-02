import { Route, Redirect } from "react-router-dom";

//  HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

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
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
      
   </>
  );
}

export default App;