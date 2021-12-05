// CSS IMPORT
import "./Home.css";

// IMAGE IMPORT

import img1 from "./img/home.png";

// MODULE IMPORT
import React from "react";

// COMPONENT IMPORT
import Line from "../../Utils/Line";
// ICON IMPORT
import { BiPencil as Pen } from "react-icons/bi";

// FUNCTION DECLERATION
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about:
        "An avid and passionate coder specializing in different languages. I love to build and design websites which the end user would enjoy using while keeping the website performant and the code clean. Up for freelance web development work and collaborating on exciting Open Source & Personal projects.",
    };
  }
  render() {
    return (
      <div className="home">
        <div className="homa-nav">
          <div className="home-location">
            <span className="home-user-name">uvacoder</span>
            <span className="home-extension">/</span>README
            <span className="home-extension">.md</span>
          </div>
          <div className="home-feedback">
            <p>Send Feedback</p>
            <Pen className="home-f-icon" />
          </div>
        </div>
        <div className="home-img">
          <img src={img1} alt="Hero" />
        </div>
        <div className="home-intro">
          I'm a computer engineering student 💻 from US who loves to code.
        </div>
        <Line></Line>
        <div className="home-about">
          {this.state.about}
        </div>
        <Line></Line>
      </div>
    );
  }
}

// EXPORT

export default Home;
