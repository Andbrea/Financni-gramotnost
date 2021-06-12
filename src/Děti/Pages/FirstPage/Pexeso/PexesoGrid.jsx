import React, { useState } from "react";
import "./style.css";
import koruna from "../img/1_2004_1B.jpg";
import dveKoruna from "../img/2_1999_1B.jpg";
import petiKoruna from "../img/5_1999_1B.jpg";
import desetiKoruna from "../img/Mince_10Kč_vzor_2003_rubová_strana.jpg";
import dvacetiKoruna from "../img/20_2004_3B.jpg";
import padesatiKoruna from "../img/50_1999_1B.jpg";

export const Card = ({ card }) => {
  /*   const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }; */

  const handleClick = () => {
    card.isFlipped = !card.isFlipped;
    console.log(card.isFlipped);
  };
  return (
    <>
      <div
        className="flip-card-pexeso"
        className={`flip-card-pexeso ${card.isFlipped ? "is-active" : ""} ${
          card.isDisabled ? "is-disabled" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flip-card-inner-pexeso">
          <div className="flip-card-front-pexeso"></div>
          <div className="flip-card-back-pexeso">
            <img className="card-image-pexeso" src={card.img} />
          </div>
        </div>
      </div>
    </>
  );
};
