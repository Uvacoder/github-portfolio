// COMPONENT IMPORT
import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Highlight from "./Highlights/Highlights";

// CSS IMPORT
import "./Sidebar.css";
const Sidebar = () => {
    return(
        <div className="sidebar">
            <Top/>
            <Bottom/>
            <Highlight/>
        </div>
    )
}

export default Sidebar;