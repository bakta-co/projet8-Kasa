import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Carrousel = ({ images, title = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const Prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="Carrousel">
      {images.length > 1 && (
        <FontAwesomeIcon className="faChevronLR faChevronLeft" icon={faChevronLeft} onClick={Prev} />
      )}

      {images && images.length > 0 && (
        <div className="Slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((imageUrl, index) => (
            <div key={index} className="Slide">
              <img className="ImgCarrousel" src={imageUrl} alt={title} />
              {index === currentIndex && (
                <div className="ImageNumbering">{`${index + 1}/${images.length}`}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {images.length > 1 && (
        <FontAwesomeIcon className="faChevronLR faChevronRight" icon={faChevronRight} onClick={Next} />
      )}
    </div>
  );
};

export default Carrousel;


