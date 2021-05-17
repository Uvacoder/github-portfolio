// IMPORTING CSS
import "./SubNavbar.css";

// IMPORTING ICONS
import { HiOutlineBookOpen, HiOutlineCube } from "react-icons/hi";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

// DEFINING FUNCTION
const SubNavbar = () => {
  return (
    <div className="subnav">
      <div className="subnav-main"></div>
      <div className="subnav-sec">
        <div className="subnav-grp active">
          <a href="/" className="subnav-link">
            <HiOutlineBookOpen className="subnav--icon" />
         
         
            <h4 className="subnav-items">overview</h4>
          </a>
        </div>
        <div className="subnav-grp">
          <a href="/" className="subnav-link">
            <BiBookBookmark className="subnav--icon" />
        
         
            <h4 className="subnav-items">repositories</h4>
          </a>
        </div>
        <div className="subnav-grp">
          <a href="/" className="subnav-link">
            <AiOutlineProject className="subnav--icon" />
          
          
            <h4 className="subnav-items">languages</h4>
          </a>
        </div>
        <div className="subnav-grp">
          <a href="/" className="subnav-link">
            <HiOutlineCube className="subnav--icon" />
        
            <h4 className="subnav-items">contact me</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

// EXPORTING FUNCTION
export default SubNavbar;
