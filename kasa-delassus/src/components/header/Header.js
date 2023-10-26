import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="headerContainer">
      <img src="/logo.png" alt="logo Kasa" className="logo" />
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={({ isActive }) => {
              return { textDecoration: isActive ? "underline" : "" };
            }}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={({ isActive }) => {
              return { textDecoration: isActive ? "underline" : "" };
            }}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
