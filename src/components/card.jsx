import React from "react";

const Card = ({ apartment }) => {
  const titleLength = apartment.title.length;

  const cardTitleClass = titleLength > 35 ? "long-title" : "normal-title";

  return (
    <div className={`card ${cardTitleClass}`} key={apartment.id}>
      <div className="card-overlay"></div>
      <img className="card-image" src={apartment.cover} alt={apartment.title} />
      <h2 className={`card-title ${cardTitleClass}`}>{apartment.title}</h2>
    </div>
  );
};

export default Card;
