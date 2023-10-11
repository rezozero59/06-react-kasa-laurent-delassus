import React from "react";
import s from "./Header.module.scss";

function Header(props) {
  return (
    <header className="headerContainer">
      <img src="./logo.png" alt="logo Kasa" />
      <ul className="menu">
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </header>
  );
}

export default Header;
