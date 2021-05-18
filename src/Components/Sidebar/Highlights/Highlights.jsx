import "./Highlight.css";
import { FaRegStar} from "react-icons/fa";

const Highlight = (props) => {
    return (
        <div className="highlight">
            <h3 className="highlight-head">
                Highlights
            </h3>
            <div className="highlight-content">
                <FaRegStar className="bottom-icon"/>
                <div className="pro">pro</div>
            </div>
        </div>
    )
};

export default Highlight;