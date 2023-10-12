import React from "react";
// import "./About.scss";
import BannerAbout from "../components/Banner/BannerAbout";
import CollapseModel from "../components/Utils/CollapseModel";

function About() {
  return (
    <div className="about-container">
      <BannerAbout />
      <CollapseModel />
    </div>
  );
}

export default About;
