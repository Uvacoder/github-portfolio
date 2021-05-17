import React from "react";
import "./Nav.css";
import img1 from "./img/img.jpg";
import { ImGithub } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navListItems: ["pull requests", "issues", "marketplace", "explore"],
    };
  }

  render() {
    return (
      <nav id="nav">
        <div className="nav-main">
          <ImGithub className="nav-logo" />
          <div className="nav-search">
          <input
            type="text"
            className="nav-input"
            placeholder="Search or jump to..."
          />
          <div className="nav-slash">/</div>
          </div>
          <div className="nav-utils">
            <ul className="nav-list">
              {this.state.navListItems.map((item) => {
                return <li className="nav-list-item"> {item} </li>;
              })}
            </ul>
          </div>
        </div>
        <div className="nav-sec">
          <div className="nav-sec-grp">
            <FaRegBell className="nav-icon"/>
          </div>
          <div className="nav-sec-grp">
            <HiOutlinePlus className="nav-icon" />
            <AiOutlineCaretDown className="nav-icon"/>
          </div>
          <div className="nav-sec-grp">
            <img src={img1} alt="Himanshu Khaitan" className="nav-acc-img"/>
            <AiOutlineCaretDown className="nav-icon"/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
