import Divider from "../components/Divider";
import GalleryImage from "../components/GalleryImage";
import { CATEGORIES, studioImages } from "../services/services";

export default function GalleryStudio() {
  return (
    <div className="gallery-container">
      <div className="gallery-title-container">
        <Divider title={CATEGORIES.STUDIO} />
      </div>
      <div className="gallery-grid">
        {studioImages.map((image) => (
          <GalleryImage key={image.id} image={image} styles="gallery-image"/>
        ))}
      </div>
    </div>
  );
}
