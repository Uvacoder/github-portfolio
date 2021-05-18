import "./Bottom.css";

// ICONS IMPORT
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegStar, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiBuildings, BiLink } from "react-icons/bi";
import { FiMapPin, FiMail } from "react-icons/fi";

const Bottom = () => {
  return (
    <div className="bottom">
      <h2 className="bottom-full-name">himanshu khaitan</h2>
      <p className="bottom-username">himakhaitan</p>
      <p className="bottom-caption">Currently at 127.0.0.1 :)</p>
      <div className="bottom-follow">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/himakhaitan"
        >
          Follow
        </a>
      </div>
      <div className="bottom-stats">
        <div className="b-stats-element b-after">
          <IoPeopleOutline className="bottom-icon" />
          <p>11</p>
          <h6>followers</h6>
        </div>
        <div className="b-stats-element b-after">
          <p>8</p>
          <h6>following</h6>
        </div>
        <div className="b-stats-element">
          <FaRegStar className="bottom-icon" />
          <p>35</p>
        </div>
      </div>
      <div className="bottom-contact">
        <div className="b-contact-element">
          <BiBuildings className="bottom-icon" />
          <div>NATIONAL INSTITUE OF TECHNOLOGY</div>
        </div>
        <div className="b-contact-element">
          <FiMapPin className="bottom-icon" />
          <div>India</div>
        </div>
        <div className="b-contact-element">
          <FiMail className="bottom-icon" />
          <div>
            <a
              rel="noreferrer"
              href="mailto:himanshukhaitan10@gmail.com"
              target="_blank"
            >
              himanshukhaitan10@gmail.com
            </a>
          </div>
        </div>
        <div className="b-contact-element">
          <BiLink className="bottom-icon" />
          <div>
            <a
              rel="noreferrer"
              href="https://dev.to/hima_khaitan"
              target="_blank"
            >
              https://dev.to/hima_khaitan
            </a>
          </div>
        </div>
        <div className="b-contact-element">
          <FaTwitter className="bottom-icon" />
          <div>
            <a
              rel="noreferrer"
              href="https://twitter.com/himanshukhaita4"
              target="_blank"
            >
              @himanshukhaita4
            </a>
          </div>
        </div>
        <div className="b-contact-element">
          <FaLinkedinIn className="bottom-icon" />
          <div>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/himanshu-khaitan-431666204/"
              target="_blank"
            >
              Himanshu Khaitan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
