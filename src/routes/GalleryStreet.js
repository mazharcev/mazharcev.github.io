import Divider from "../components/Divider";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import { TITLES } from "../services/services";
import { streetImages } from "../services/street";

export default function GalleryStreet() {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-title-container">
          <Divider title={TITLES.STREET} />
        </div>
        <div className="gallery-grid">
          {streetImages.map((image) => (
            <GalleryImage key={image.id} image={image} styles="gallery-image" />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
