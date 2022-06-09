import { NavLink } from "react-router-dom";
import "../App.css";
import { TITLES, ROUTES } from "../services/services";

export default function Header(props) {
  const {isHeaderMinimized} = props;
  return (
    <div id="headerId" className={`header ${isHeaderMinimized ? "header-minimized" : ""}`}>
      <NavLink to={ROUTES.HOME} id="homeDiv" className="home-div">
        {TITLES.NAME}
      </NavLink>

      <ul className="nav-header-links">
        <NavLink to={ROUTES.PORTFOLIO} className="nav-link">
          {TITLES.PORTFOLIO}
        </NavLink>
        <div className="nav-categories">
          <p id="navCategoriesId">
            {TITLES.CATEGORIES} <span>▼</span>
          </p>
          <div
            id="navCategoriesContentId"
            className="nav-categories-content-wrapper"
          >
            <ul className="nav-categories-content">
              <NavLink to={ROUTES.STREET} className="nav-link">
                {TITLES.STREET}
              </NavLink>
              <NavLink to={ROUTES.STUDIO} className="nav-link">
                {TITLES.STUDIO}
              </NavLink>
              <NavLink to={ROUTES.PORTRAIT} className="nav-link">
                {TITLES.PORTRAIT}
              </NavLink>
            </ul>
          </div>
        </div>
        <NavLink to={ROUTES.CONTACT} className="nav-link">
          {TITLES.CONTACT}
        </NavLink>
      </ul>

      <div className="header-hamburger">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
}
