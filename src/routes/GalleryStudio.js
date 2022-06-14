import Divider from "../components/Divider";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import { TITLES } from "../services/services";
import { studioImages } from "../services/studio";

export default function GalleryStudio() {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-title-container">
          <Divider title={TITLES.STUDIO} />
        </div>
        <div className="gallery-grid">
          {studioImages.map((image) => (
            <GalleryImage key={image.id} image={image} styles="gallery-image" />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
