import { useState, useEffect } from "react";

export default function ImageComponent(props) {
  const { item, index, currentIndex, startTouch, endTouch } = props;
  const [currentImg, setCurrentImg] = useState(item.placeholder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgToLoad = new Image();
    imgToLoad.src = item.original;

    const loadImage = new Promise((resolve) => resolve(imgToLoad.onload));

    async function setImage() {
      try {
        await loadImage;
        setCurrentImg(item.original);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    setImage();
  }, [item.original]);

  return (
    <img
      loading="lazy"
      id={item.id}
      src={currentImg}
      alt="hero image"
      className="hero-image"
      style={{
        display: index === currentIndex ? "" : "none",
      }}
      onTouchStart={startTouch}
      onTouchEnd={endTouch}
      // onTouchMove={moveTouch}
    />
  );
}
