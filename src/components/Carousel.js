import React, { useEffect, useState } from "react";
import "../App.css";
import { carouselImages } from "../services/services";
import SwipeComponent from "./SwipeComponent";
import HeroImage from "./HeroImage";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = carouselImages.length - 1;
  //const [isMouseOver, setIsMouseOver] = useState(false);
  //const isMouseOver = useRef(false);
  const { startTouch, endTouch, moveTouch } = SwipeComponent(
    currentIndex,
    handleIndexChange
  );

  function handleIndexChange(newIndex) {
    if (newIndex < 0) {
      newIndex = maxIndex;
    } else if (newIndex > maxIndex) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  }

  function CarouselContent(props) {
    const { image, index } = props;
    return (
      <div className="carousel-item">
        <HeroImage
          image={image}
          index={index}
          currentIndex={currentIndex}
          startTouch={startTouch}
          endTouch={endTouch}
          // onTouchMove={moveTouch}
        />
      </div>
    );
  }

  // useEffect(() => {
  //   // if (matchMedia("(pointer:fine)").matches) {
  //   const timer = setInterval(() => {
  //     handleIndexChange(currentIndex + 1);
  //     if (currentIndex >= maxIndex) {
  //       handleIndexChange(0);
  //     }
  //   }, 10000);

  //   return () => clearInterval(timer);
  //   // }
  // });

  // function handleMouseOver(value) {
  //   isMouseOver.current = value;
  // }

  return (
    <>
      <div
        id="carousel-id"
        className="carousel"
        // onMouseEnter={() => setIsMouseOver(true)}
        // onMouseLeave={() => setIsMouseOver(false)}
        // onTouchStart={startTouch}
        // onTouchEnd={endTouch}
        // onTouchMove={moveTouch}
      >
        {carouselImages.map((image, index) => (
          <CarouselContent key={image.id} image={image} index={index} />
        ))}

        <div
          className="carousel-control"
          // onMouseEnter={() => handleMouseOver(true)}
          // onMouseLeave={() => handleMouseOver(false)}
        >
          <button
            onClick={() => handleIndexChange(currentIndex - 1)}
            className="carousel-btn carousel-btn-prev"
          >
            {`⟵`}
          </button>
          <p className="carousel-index">
            {currentIndex + 1} / {carouselImages.length}
          </p>

          <button
            onClick={() => handleIndexChange(currentIndex + 1)}
            className="carousel-btn carousel-btn-next"
          >
            {`⟶`}
          </button>
        </div>
      </div>
    </>
  );
}
