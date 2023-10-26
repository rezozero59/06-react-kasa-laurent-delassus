import React from "react";
import "./CollapseModel.scss";
import arrow from "../assets/images/utils/arrow-up.png";
import { useState } from "react";

// Composant pour les collapses, props title et txt pour les composants dans about & product

function CollapseModel({ title, txt }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <h3>{title}</h3>
        <div className="collapse-icon">
          <img
            className={isOpen ? "rotate" : ""}
            src={arrow}
            alt="menu collapse"
            onClick={toggleCollapse}
          />
        </div>
      </div>
      <div className="content-wrapper">
        <div className={`collapse-content ${isOpen ? "open" : ""}`}>
          <p>{txt}</p>
        </div>
      </div>
    </div>
  );
}

export default CollapseModel;
