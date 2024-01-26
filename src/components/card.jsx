import React from 'react';

const Card = ({ apartment }) => {
  return (
    <div className='card' key={apartment.id}>
      <div className="card-overlay"></div>
      <img className='card-image' src={apartment.cover} alt={apartment.title} />
      <h2 className='card-title'>{apartment.title}</h2>
    </div>
  );
};

export default Card;