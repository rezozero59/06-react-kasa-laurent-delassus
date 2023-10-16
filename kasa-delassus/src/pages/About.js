import React from "react";

import BannerAbout from "../components/Banner/BannerAbout";
import CollapseModel from "../components/Utils/CollapseModel";
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <BannerAbout />
      <div className="about-collapse-container">
        <CollapseModel
          className="about-collapse"
          title="Fiabilité"
          txt="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          arrowUp={"/arrow-up.png"}
        />
        <CollapseModel
          className="about-collapse"
          title="Respect"
          txt="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          arrowUp={"/arrow-up.png"}
        />
        <CollapseModel
          className="about-collapse"
          title="Service"
          txt="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          arrowUp={"/arrow-up.png"}
        />
        <CollapseModel
          title="Sécurité"
          txt="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "
          arrowUp={"/arrow-up.png"}
        />
      </div>
    </div>
  );
}

export default About;
