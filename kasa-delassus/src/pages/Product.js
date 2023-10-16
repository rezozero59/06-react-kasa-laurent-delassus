import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import StarsRating from "../components/Utils/StarsRating";

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
  const [firstName, lastName] = appart.host.name.split(" ");
  const starActive = "/star-active.png";
  const starInactive = "/star-inactive.png";

  return (
    <div className="product-container">
      <img src={appart.cover} alt="appartement" className="slide-show" />
      <div className="information-container">
        <div className="line-one">
          <div className="title-location">
            <h3>{appart.title}</h3>
            <p>{appart.location}</p>
          </div>
          <div className="host">
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
            <img src={appart.host.picture} alt="nom du loueur" />
          </div>
        </div>
        <div className="line-two">
          <div className="tags-container">
            {appart.tags.map((tag, index) => (
              <button key={index} className="tag">
                {tag}
              </button>
            ))}
          </div>
          <div className="ratings-container">
            <StarsRating
              rating={appart.rating}
              activeStar={starActive}
              inactiveStar={starInactive}
            />
          </div>
        </div>
        <div className="line-three"></div>
      </div>
    </div>
  );
};

export default Product;
