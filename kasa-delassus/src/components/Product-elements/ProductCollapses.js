import React from "react";
import CollapseModel from "../../Utils/CollapseModel";
import "../../pages/Product.scss";

// Composant pour les collapses de description et d'équipements des appartements

function ProductCollapses({ appart }) {
  const equipmentList = appart.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <div className="collapses">
      <div className="description">
        <CollapseModel
          title={"Description"}
          txt={appart.description}
          arrowUp={"/arrow-up.png"}
        />
      </div>
      <div className="equipments">
        <CollapseModel
          title={"Équipements"}
          txt={equipmentList}
          arrowUp={"/arrow-up.png"}
        />
      </div>
    </div>
  );
}

export default ProductCollapses;
