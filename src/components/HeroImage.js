import { useState, useEffect } from "react";

export default function HeroImage(props) {
  const { image, index, currentIndex, startTouch, endTouch } = props;
  const [currentImg, setCurrentImg] = useState(image.placeholder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgToLoad = new Image();
    imgToLoad.src = image.original;

    const loadImage = new Promise((resolve) => resolve(imgToLoad.onload));

    async function setImage() {
      try {
        await loadImage;
        setCurrentImg(image.original);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    setImage();
  }, [image.original]);

  return (
    <img
      id={image.id}
      src={currentImg}
      alt="hero image"
      className="hero-image"
      style={{
        objectPosition: image.position,
        display: index === currentIndex ? "" : "none",
      }}
      onTouchStart={startTouch}
      onTouchEnd={endTouch}
      // onTouchMove={moveTouch}
    />
  );
}
