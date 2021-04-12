import { Link, Route, Switch } from "react-router-dom";

// import {logo} from '../../assets/icons'
import logo from "../../assets/images/icons/logo.svg";

import "./HeaderMidl.scss";

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <div className="header-middle-inner container">
        <Link to="">
          <img src={logo} alt="" />
        </Link>
        <div className="header-middle-inner-navbar">
          <Link
            className="header-middle-inner-navbar-link"
            to="/headerMiddle/badiy"
          >
            Badiiy kitoblar
          </Link>
          <Link className="header-middle-inner-navbar-link" to="/religion">
            Diniy kitoblar
          </Link>
          <Link
            className="header-middle-inner-navbar-link"
            to="/headerMiddle/darslik"
          >
            Darslik kitoblar
          </Link>
          <Link
            className="header-middle-inner-navbar-link"
            to="/headerMiddle/ilmiy"
          >
            Ilmiy
          </Link>
          <Link
            className="header-middle-inner-navbar-link"
            to="/headerMiddle/kirish"
          >
            Kirish
          </Link>

          <Switch>
            <Route exact patch="/"></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;