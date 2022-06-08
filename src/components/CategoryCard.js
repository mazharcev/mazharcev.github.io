import { NavLink } from "react-router-dom";
import "../App.css";
import GalleryImage from "./GalleryImage";

export default function CategoryCard(props) {
  const { category } = props;
  return (
    <NavLink to={category.url}>
      <div className="category-card">
        <GalleryImage image={category} styles="category-image" />
        <div className="category-card-title">
          <h1>{category.title}</h1>
        </div>
      </div>
    </NavLink>
  );
}
