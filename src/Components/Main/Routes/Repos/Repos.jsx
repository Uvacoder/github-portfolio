import React from "react";
import "./Repos.css";
import img1 from "./img/4498903.jpg";

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="repos">
        <div className="repo-img">
              <img src={img1} alt="" className="repo-image"/>
          </div>
      </div>
    );
  }
}

export default Repo;
