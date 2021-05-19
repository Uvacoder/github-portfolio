import React from "react";
import "./Repos.css";
import Design from "../../Utils/Design/Design";
import img1 from "./5084996.jpg";

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
        <Design num="440" />
      </div>
    );
  }
}

export default Repo;
