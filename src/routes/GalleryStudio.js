import GalleryImage from "../components/GalleryImage";
import { studioImages } from "../services/services";

export default function GalleryStudio() {
  return (
    <div className="gallery-container">
      <h1>Studio</h1>
      <div className="gallery-grid">
        {studioImages.map((image) => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
