import React from "react";
import StarsRating from "../../Utils/StarsRating";
import "../../pages/Product.scss";

// Composant pour le nom et la note du loueur

function ProductHostRating({ appart }) {
  // Découpage du nom du loueur pour afficher séparément le prénom du nom
  const [firstName, lastName] = appart.host.name.split(" ");

  return (
    <div className="host-rating-container">
      <div className="host">
        <p>
          {firstName}
          <br />
          {lastName}
        </p>
        <img src={appart.host.picture} alt="nom du loueur" />
      </div>
      <div className="ratings-container">
        <StarsRating rating={appart.rating} />
      </div>
    </div>
  );
}

export default ProductHostRating;
