import { NavLink } from "react-router-dom";
import "../App.css";
import { ROUTES } from "../services/services";

export default function Header() {
  return (
    <div className="header">
      <NavLink to={ROUTES.HOME} id="home-div" className="home-div">
        Alexey Mazharcev
      </NavLink>

      <ul className="nav-header-links">
        <NavLink to={ROUTES.HOME}>Портфолио</NavLink>
        <NavLink to={ROUTES.HOME}>Контакты</NavLink>
        <div className="nav-categories">
          Категории ⯆
          <div className="nav-categories-content-wrapper">
          <ul className="nav-categories-content">
          <NavLink to={ROUTES.HOME}>Street</NavLink>
          <NavLink to={ROUTES.HOME}>Studio</NavLink>
          <NavLink to={ROUTES.HOME}>Portrait</NavLink>
          </ul>
        </div>
        </div>
        <NavLink to={ROUTES.HOME}>Phone</NavLink>
        <NavLink to={ROUTES.HOME}>Email</NavLink>
        <NavLink to={ROUTES.HOME}>Discord</NavLink>
      </ul>

      <div className="header-hamburger">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
}
