import GalleryImage from "../components/GalleryImage";
import { streetImages } from "../services/services";

export default function GalleryStreet() {
  return (
    <div className="gallery-container">
      <h1>Street</h1>
      <div className="gallery-grid">
        {streetImages.map((image) => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
