import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({ appartments }) => {
  const { id } = useParams();
  const [appart, setAppart] = useState(null);

  useEffect(() => {
    // Trouver l'appartement avec l'ID correspondant
    const foundAppartment = appartments.find((a) => a.id === id);
    setAppart(foundAppartment);
  }, [id, appartments]);

  if (!appart) {
    return <p>Appartement non trouvé</p>;
  }
  console.log(appart);
  // (ici le code JSX pour afficher les détails de l'appartement)

  return (
    <div>
      <h2>{appart.title}</h2>
      {/* autres éléments HTML/JSX pour afficher les détails de l'appartement */}
    </div>
  );
};

export default Product;
