import { NavLink } from "react-router-dom";
import "../App.css";
import { ROUTES } from "../services/services";

export default function Header() {
  return (
    <div className="header">
      <NavLink to={ROUTES.HOME} id="home-div" className="home-div">
        Алексей Мажарцев
      </NavLink>

      <ul className="nav-header-links">
        <NavLink to={ROUTES.HOME}>Портфолио</NavLink>
        <NavLink to={ROUTES.HOME}>Контакты</NavLink>
        <NavLink to={ROUTES.HOME}>Категории</NavLink>
      </ul>

      <div className="header-hamburger">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
}
