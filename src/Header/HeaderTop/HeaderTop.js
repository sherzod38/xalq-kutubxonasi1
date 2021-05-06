import { Link, /*Router, Switch*/ } from "react-router-dom";

import "./HeaderTop.scss";

import Hour from "../../components/Hour/Hour";
import Darkmout from "../../components/Darkmout";
import Language from "../../components/Language/Language";

const Facebook = "https://facebook.com";
// const Telegram = "https://t.me";
const Instagram = "https://instagram.com";

const HeaderTop = () => {
  return (
    <div className="header">
      <div className="header-inner container">
        <div className="header-inner-left">
          <Hour />
        </div>
        <div className="header-inner-right">
          <Language />
          <Darkmout />
          <Link className="header-inner-right-link" to={Facebook}>
            Facebook
          </Link>
          <Link className="header-inner-right-link" to="#">
            Telegram
          </Link>
          <Link className="header-inner-right-link" to={Instagram}>
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
