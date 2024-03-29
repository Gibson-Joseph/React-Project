import React, { useState } from "react";
import Star from "../Assests/Images/star-empty.svg";
import "../Assests/Styles/star.css";

export default function Stars() {
  const [isActive, setIsActive] = useState();
  function handleClick(index) {
    setIsActive(index);
  }

  const stars = [Star, Star, Star, Star, Star];
  return (
    <div className="star">
      <h1>hello</h1>
      {stars.map((item, index) => (
        <button onClick={() => handleClick(index)}>
          <img
            id={index}
            className={` ${
              isActive === index
                ? "selectStar"
                : isActive > index
                ? "beforeStar"
                : isActive < index
                ? "afterStar"
                : "defaultStar"
            }`}
            src={item}
            alt="star"
          />
        </button>
      ))}
    </div>
  );
}
