import React from "react";
import "./CollapseModel.scss";

function CollapseModel() {
  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <h3>Titre</h3>
        <div className="collapse-icon">
          <img src="./arrow-up.png" alt="menu collapse" />
        </div>
      </div>
      <div className="collapse-content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni sequi
          odit suscipit quos ad qui maxime eaque accusamus expedita cum!
        </p>
      </div>
    </div>
  );
}

export default CollapseModel;
