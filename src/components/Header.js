import { NavLink } from "react-router-dom";
import "../App.css";
import { CATEGORIES, ROUTES } from "../services/services";

export default function Header() {
  return (
    <div id="headerId" className="header">
      <NavLink to={ROUTES.HOME} id="homeDiv" className="home-div">
        Alexey Mazharcev
      </NavLink>

      <ul className="nav-header-links">
        <NavLink to={ROUTES.PORTFOLIO} className="nav-link">
          {CATEGORIES.PORTFOLIO}
        </NavLink>
        <div className="nav-categories">
          <p id="navCategoriesId">
            Категории <span>▼</span>
          </p>
          <div
            id="navCategoriesContentId"
            className="nav-categories-content-wrapper"
          >
            <ul className="nav-categories-content">
              <NavLink to={ROUTES.STREET} className="nav-link">
                {CATEGORIES.STREET}
              </NavLink>
              <NavLink to={ROUTES.STUDIO} className="nav-link">
                {CATEGORIES.STUDIO}
              </NavLink>
              <NavLink to={ROUTES.PORTRAIT} className="nav-link">
                {CATEGORIES.PORTRAIT}
              </NavLink>
            </ul>
          </div>
        </div>
        <NavLink to={ROUTES.CONTACT} className="nav-link">
          Контакты
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
