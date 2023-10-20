import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Product.scss";
import StarsRating from "../components/Utils/StarsRating";
import CollapseModel from "../components/Utils/CollapseModel";
import SlideShow from "../components/Utils/SlideShow";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appart, setAppart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundAppart = data.find((element) => element.id === id);
        if (!foundAppart) {
          navigate("/*", {
            state: { message: "Failed to find hosting id" },
          });
        } else {
          setAppart(foundAppart);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/*", { state: { message: "Failed to load data" } });
      });
  }, [id, navigate]);
  // isLoading empeche d'afficher des erreurs dans la console en attendant la fin du fetch
  if (isLoading) {
    return <div>Loading ....</div>;
  }

  const [firstName, lastName] = appart.host.name.split(" ");
  const starActive = "/star-active.png";
  const starInactive = "/star-inactive.png";

  const equipmentList = appart.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  const slideShowLeftArows = "/left-arrow.png";
  const slideShowRightArows = "/right-arrow.png";

  return (
    <div className="product-container">
      <SlideShow
        images={appart.pictures}
        left={slideShowLeftArows}
        right={slideShowRightArows}
      />
      <div className="information-container">
        <div className="title-tags-container">
          <div className="title-location">
            <h3>{appart.title}</h3>
            <p>{appart.location}</p>
            <div className="tags-container">
              {appart.tags.map((tag, index) => (
                <button key={index} className="tag">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
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
            <StarsRating
              rating={appart.rating}
              activeStar={starActive}
              inactiveStar={starInactive}
            />
          </div>
        </div>
      </div>
      <div className="line-three">
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
    </div>
  );
};

export default Product;
