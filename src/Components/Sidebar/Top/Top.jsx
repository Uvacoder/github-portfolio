// IMPORT CSS
import "./Top.css";

// IMPORT IMAGE
import img1 from "./img/img.jpg";

const Top = () => {
    return(
        <div className="top">
            <img src={img1} alt="" className="top-image"/>
            <div className="top-abs"> <p>💯</p> <span>Working</span></div>
        </div>
    )
}

export default Top;