import React from "react";
import "./CollapseModel.scss";
import { useState } from "react";

function CollapseModel({ title, txt }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const arrowUp = "./arrow-up.png";

  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <h3>{title}</h3>
        <div className="collapse-icon">
          <img
            src={arrowUp}
            alt="menu collapse"
            onClick={toggleCollapse}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <p>{txt}</p>
      </div>
    </div>
  );
}

export default CollapseModel;
