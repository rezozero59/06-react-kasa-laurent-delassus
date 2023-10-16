// SlideShow.js
import React, { useState } from "react";

function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slide-show-container">
      <div className="slide-show-inner">
        <button
          onClick={handlePrev}
          className="slide-show-arrow slide-show-arrow-left"
        >
          ←
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="slide-show-image"
        />
        <button
          onClick={handleNext}
          className="slide-show-arrow slide-show-arrow-right"
        >
          →
        </button>
        <div className="slide-show-index">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
