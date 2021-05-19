// COMPONENTS IMPORTS
import Sidebar from "../Sidebar/Sidebar";
import Home from "./Routes/Home/Home";
import Languages from "./Routes/Languages/Languages";
import Container from "./Utils/Container.jsx";
import Repo from "./Routes/Repos/Repos";

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
        <Container>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/languages" component={Languages} exact></Route>
          <Route path="/repositories" component={Repo} exact></Route>
        </Switch>
        </Container>
      </Router>
    </div>
  );
};

// FUNCTION EXPORT
export default Main;
