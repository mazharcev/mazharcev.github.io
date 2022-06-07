import GalleryImage from "../components/GalleryImage";
import { portraitImages } from "../services/services";

export default function GalleryPortrait() {
  return (
    <div className="gallery-container">
      <h1>Portrait</h1>
      <div className="gallery-grid">
        {portraitImages.map((image) => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
