// IMPORTING CSS
import "./SubNavbar.css";

// IMPORT IMAGE
import img1 from "./img/img.jpg";

// IMPORTING ICONS
import { HiOutlineBookOpen, HiOutlineCube } from "react-icons/hi";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

// DEFINING FUNCTION
const SubNavbar = () => {
  return (
    <div className="subnav">
      <div className="subnav-main">
        <img src={img1} alt="Himanshu Khaitan" className="subnav-main-img"/>
        <h3 className="subnav-main-text">himakhaitan</h3>
      </div>
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
            <div className="subnav-num">34</div>
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
