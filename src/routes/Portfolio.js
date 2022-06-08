import CategoryCard from "../components/CategoryCard";
import Divider from "../components/Divider";
import { CATEGORIES, categories } from "../services/services";

export default function Portfolio() {
  return (
    <div className="gallery-container">
      <div className="gallery-title-container">
        <Divider title={CATEGORIES.PORTFOLIO} />
      </div>
      <div className="gallery-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}
