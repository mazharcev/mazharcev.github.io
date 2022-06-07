import React, { useState } from "react";
import "../App.css";
import { carouselImages } from "../services/services";
import SwipeComponent from "./SwipeComponent";
import ImageComponent from "./ImageComponent";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = carouselImages.length - 1;
  //const [isMouseOver, setIsMouseOver] = useState(false);

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
    const { item, index } = props;
    return (
        <div className="carousel-item">
      <ImageComponent
         item={item}
        index={index}
        currentIndex={currentIndex}
        startTouch={startTouch}
        endTouch={endTouch}
        // onTouchMove={moveTouch}
      />
      </div>
    );
  }

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
        {carouselImages.map((item, index) => (
          <CarouselContent key={item.id} item={item} index={index} />
        ))}

        <div className="carousel-control">
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
