import React from "react";
import "./StarsRating.scss";
import activeStar from "../assets/images/utils/star-active.png";
import inactiveStar from "../assets/images/utils/star-inactive.png";

const StarsRating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<img src={activeStar} alt="active star" key={i} />);
    } else {
      stars.push(<img src={inactiveStar} alt="inactive star" key={i} />);
    }
  }

  return <div className="star">{stars}</div>;
};

export default StarsRating;
