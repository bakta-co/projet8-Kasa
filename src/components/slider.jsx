import React, { useState } from "react";
import faChevronRight from "../assets/images/arrow_right.png";
import faChevronLeft from "../assets/images/arrow_left.png";

const Carrousel = ({ images, title = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const Prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Carrousel">
      {images.length > 1 && (
        <img
          src={faChevronLeft}
          className="faChevronLR faChevronLeft"
          alt="flèche gauche"
          onClick={Prev}
        />
      )}

      {images && images.length > 0 && (
        <div
          className="Slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((imageUrl, index) => (
            <div key={index} className="Slide">
              <img className="ImgCarrousel" src={imageUrl} alt={title} />
              {index === currentIndex && (
                <div className="ImageNumbering">{`${index + 1}/${
                  images.length
                }`}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {images.length > 1 && (
        <img
          src={faChevronRight}
          alt="flèche droite"
          className="faChevronLR faChevronRight"
          onClick={Next}
        />
      )}
    </div>
  );
};

export default Carrousel;
