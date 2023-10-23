import React from "react";
import "./ErrorPage.scss";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <p>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Retourner sur la page d'accueil
        </NavLink>
      </p>
    </div>
  );
}

export default ErrorPage;
