import React from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import StarsRating from "../components/Utils/StarsRating";
import CollapseModel from "../components/Utils/CollapseModel";
import SlideShow from "../components/Utils/SlideShow";
import useFetch from "../hooks/usefetch";
import ErrorPage from "./ErrorPage";

const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch("/data.json");

  const appart = data?.find((element) => element.id === id);
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!appart) return <ErrorPage />;

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
