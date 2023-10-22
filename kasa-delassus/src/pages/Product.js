import React from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";

import SlideShow from "../components/Utils/SlideShow";
import useFetch from "../hooks/usefetch";
import ErrorPage from "./ErrorPage";
import ProductCollapses from "../components/Product-elements/ProductCollapses";
import ProductHostRating from "../components/Product-elements/ProductHostRating";
import ProductTitleTags from "../components/Product-elements/ProductTitleTags";

const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch("/data.json");
  const appart = data?.find((element) => element.id === id);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!appart) return <ErrorPage />;

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
        <ProductTitleTags className="title-tags-container" appart={appart} />
        <ProductHostRating className="host-rating-container" appart={appart} />
      </div>
      <ProductCollapses className="collapses" appart={appart} id={id} />
    </div>
  );
};

export default Product;
