import React from "react";
import "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="headerContainer">
      <img src="./logo.png" alt="logo Kasa" />
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">A propos</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
