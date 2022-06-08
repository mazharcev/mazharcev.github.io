import Divider from "../components/Divider";
import GalleryImage from "../components/GalleryImage";
import { CATEGORIES, streetImages } from "../services/services";

export default function GalleryStreet() {
  return (
    <div className="gallery-container">
      <div className="gallery-title-container">
        <Divider title={CATEGORIES.STREET} />
      </div>
      <div className="gallery-grid">
        {streetImages.map((image) => (
          <GalleryImage key={image.id} image={image} styles="gallery-image"/>
        ))}
      </div>
    </div>
  );
}
