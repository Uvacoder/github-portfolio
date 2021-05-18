// COMPONENTS IMPORTS
import Sidebar from "../Sidebar/Sidebar";
import Home from "./Routes/Home/Home";

// MoDULE IMPORTS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS IMPORTS
import "./Main.css";

// FUNCTION DECLERATION
const Main = () => {
  return (
    <div className="main">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </Router>
    </div>
  );
};

// FUNCTION EXPORT
export default Main;
