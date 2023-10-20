import React from "react";
import BannerImage from "../components/Banner/BannerImage";
import HomeMain from "../components/home-main/HomeMain";

function Home({ appartments }) {
  return (
    <>
      <BannerImage />

      <HomeMain appartments={appartments} />
    </>
  );
}

export default Home;
