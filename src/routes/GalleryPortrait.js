import Divider from "../components/Divider";
import GalleryImage from "../components/GalleryImage";
import { CATEGORIES, portraitImages } from "../services/services";

export default function GalleryPortrait() {
  return (
    <div className="gallery-container">
      <div className="gallery-title-container">
        <Divider title={CATEGORIES.PORTRAIT} />
      </div>
      <div className="gallery-grid">
        {portraitImages.map((image) => (
          <GalleryImage key={image.id} image={image} styles="gallery-image"/>
        ))}
      </div>
    </div>
  );
}
