import './App.css';
import Nav from "./Components/Navigation/MainNavbar/Nav.jsx";
import SubNavbar from "./Components/Navigation/SubNavbar/SubNavbar.jsx";
import Main from "./Components/Main/Main.jsx";

function App() {
  return (
    <div className="App">
      <Nav/>
      <SubNavbar/>
      <Main/>
    </div>
  );
}

export default App;
