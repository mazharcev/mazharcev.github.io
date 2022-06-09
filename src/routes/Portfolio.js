import CategoryCard from "../components/CategoryCard";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import { TITLES, categories } from "../services/services";

export default function Portfolio() {
  return (
    <>
    <div className="gallery-container">
      <div className="gallery-title-container">
        <Divider title={TITLES.PORTFOLIO} />
      </div>
      <div className="gallery-grid portfolio-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
      
    </div>
    <Footer />
    </>
  );
}
