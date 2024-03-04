import React from "react";
import { Link } from "react-router-dom";
import Logements from "../../data/logements.json";
import Banner from "../banner.jsx";
import Card from "../card.jsx";
import Imagehome from "../../assets/images/IMG.png";

const Home = () => {
  const displayApartments = () => {
    return Logements.map((apartment) => (
      <Link to={`/logement/${apartment.id}`} key={apartment.id}>
        <Card key={apartment.id} apartment={apartment} />
      </Link>
    ));
  };

  return (
    <div className="home">
      <Banner imageUrl={Imagehome} title="Chez vous, partout et ailleurs" />
      <div className="section-card">{displayApartments()}</div>
    </div>
  );
};

export default Home;
