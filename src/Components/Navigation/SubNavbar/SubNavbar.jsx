// IMPORTING CSS
import "./SubNavbar.css";

// IMPORT IMAGE
import img1 from "./img/img.jpg";

// IMPORTING ICONS
import { HiOutlineBookOpen, HiOutlineCube } from "react-icons/hi";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

const tabs = [
  {
    title: "overview",
    icon: HiOutlineBookOpen,
    path: "",
  },
  {
    title: "repositories",
    icon: BiBookBookmark,
    path: "repositories",
    num: 34,
  },
  {
    title: "languages",
    icon: AiOutlineProject,
    path: "languages",
  },
  {
    title: "contact me",
    icon: HiOutlineCube,
    path: "contact",
  },
];

// DEFINING FUNCTION
const SubNavbar = () => {
  return (
    <div className="subnav">
      <div className="subnav-main">
        <img src={img1} alt="Himanshu Khaitan" className="subnav-main-img" />
        <h3 className="subnav-main-text">uvacoder</h3>
      </div>
      <div className="subnav-sec">
        {tabs.map((tab, index) => (
          <div
            className={`subnav-grp ${
              window.location.pathname.split("/").pop() === tab.path
                ? "active"
                : ""
            }`}
            key={index}
          >
            <a href={"/" + tab.path} className="subnav-link">
              <tab.icon className="subnav--icon" />

              <h4 className="subnav-items">{tab.title}</h4>
              {tab.num && <div className="subnav-num">{tab.num}</div>}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// EXPORTING FUNCTION
export default SubNavbar;
