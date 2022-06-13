import Divider from "../components/Divider";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import { portraitImages } from "../services/portrait";
import { TITLES } from "../services/services";

export default function GalleryPortrait() {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-title-container">
          <Divider title={TITLES.PORTRAIT} />
        </div>
        <div className="gallery-grid">
          {portraitImages.map((image) => (
            <GalleryImage key={image.id} image={image} styles="gallery-image" />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
