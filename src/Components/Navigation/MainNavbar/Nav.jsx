// DEPENDENCIENS IMPORT
import React from "react";

// CSS IMPORT
import "./Nav.css";

// IMAGES IMPORT
import img1 from "./img/img.jpg";

// ICONS IMPORT
import { ImGithub } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";

// CLASS DEFINITON
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
        {/* FIRST SECTION */}
        <div className="nav-main">
          {/* LOGO */}
          <a href="/" className="logo-link">
            {" "}
            <ImGithub className="nav-logo" />
          </a>
          {/* SEARCH BAR */}
          <div className="nav-search">
            <input
              type="text"
              className="nav-input"
              placeholder="Search or jump to..."
            />
            <div className="nav-slash">/</div>
          </div>
          {/* NAVIGATION PRIMARY */}
          <div className="nav-utils">
            <ul className="nav-list">
              {this.state.navListItems.map((item, index) => {
                return (
                  <li className="nav-list-item" key={index}>
                    {" "}
                    {item}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* SECOND SECTION */}
        <div className="nav-sec">
          {/* NAVIGATION SECONDARY */}
          <div className="nav-sec-grp">
            <FaRegBell className="nav-icon nav-icon-bell" />
          </div>
          <div className="nav-sec-grp">
            <HiOutlinePlus className="nav-icon nav-icon-plus" />
            <AiOutlineCaretDown className="nav-icon" />
          </div>
          <div className="nav-sec-grp">
            <img src={img1} alt="Himanshu Khaitan" className="nav-acc-img" />
            <AiOutlineCaretDown className="nav-icon" />
          </div>
        </div>
      </nav>
    );
  }
}

// EXPORTING CLASS
export default Nav;
