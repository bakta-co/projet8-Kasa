import React from "react";
import { Link } from "react-router-dom";
import LogoHeader from "../assets/images/LOGO-header";

function Header() {
  return (
    <div className="header">
      <div className="logoHeader">
        <LogoHeader />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
