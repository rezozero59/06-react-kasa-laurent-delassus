import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.scss";
import SlideShow from "../Utils/SlideShow";
import useFetch from "../hooks/usefetch";
import ProductCollapses from "../components/Product-elements/ProductCollapses";
import ProductHostRating from "../components/Product-elements/ProductHostRating";
import ProductTitleTags from "../components/Product-elements/ProductTitleTags";

// Page des produits de locations

const Product = () => {
  // id du logement récupéré dans l'url
  const { id } = useParams();
  // Gestion de la redirection si l'id n'existe pas
  const navigate = useNavigate();
  // Récupération des données
  const { data, loading, error } = useFetch("/data.json");

  // Trouver le produit spécifique par son ID.
  const appart = data?.find((element) => element.id === id);

  //  Si l'ID fourni ne correspond à aucun produit ou en cas d'erreur, redirige vers la page d'erreur.
  useEffect(() => {
    if (data && (error || !data.find((element) => element.id === id))) {
      navigate("/error");
    }
  }, [data, error, id, navigate]);

  if (loading) return <div>Loading ...</div>;
  if (error || !appart) return null; // Ajouté pour prévenir le rendu du composant si une redirection est en cours

  return (
    <div className="product-container">
      <SlideShow images={appart.pictures} />
      <div className="information-container">
        <ProductTitleTags className="title-tags-container" appart={appart} />
        <ProductHostRating className="host-rating-container" appart={appart} />
      </div>
      <ProductCollapses className="collapses" appart={appart} id={id} />
    </div>
  );
};

export default Product;
