import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="Error">
    <h1 className="errorTitle">404</h1>
    <h2 className="errorText">Oups! La page que vous demandez n'existe pas.</h2>
    <p className="homeLink">
      <Link to="/">Retourner sur la page d’accueil</Link>
    </p>
  </div>
);

export default Error;
