import React, { useState } from "react";
import "./SlideShow.scss";

function SlideShow({ images, left, right }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 200); // 200ms correspond au temps de la transition
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="slide-show-container">
      <div className="slide-show-inner">
        <button
          onClick={handlePrev}
          className="slide-show-arrow slide-show-arrow-left"
        >
          <img src={left} alt="précédent" />
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`slide-show-image ${isFading ? "fading" : ""}`}
        />
        <button
          onClick={handleNext}
          className="slide-show-arrow slide-show-arrow-right"
        >
          <img src={right} alt="suivant" />
        </button>
        <div className="slide-show-index">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
