// COMPONENT IMPORT
import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";

// CSS IMPORT
import "./Sidebar.css";
const Sidebar = () => {
    return(
        <div className="sidebar">
            <Top/>
            <Bottom/>
        </div>
    )
}

export default Sidebar;