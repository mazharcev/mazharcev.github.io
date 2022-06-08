import { useState, useEffect } from "react";

export default function GalleryImage(props) {
  const { image, styles } = props;
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
      loading="lazy"
      id={image.id}
      src={currentImg}
      alt={`image ${image.id}`}
      className={styles}
    />
  );
}
