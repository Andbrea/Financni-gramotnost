import React, { useState } from "react";
import "./style.css";


export const Card = ({ image, isFlipped, isDisabled }) => {
  return (
    <>
      <div
        className={`flip-card-pexeso ${isFlipped ? "is-active" : ""} ${
          isDisabled ? "is-disabled" : ""
        }`}
      >
        <div className="flip-card-inner-pexeso">
          <div className="flip-card-front-pexeso"></div>
          <div className="flip-card-back-pexeso">
            <img className="card-image-pexeso" src={image} />
          </div>
        </div>
      </div>
    </>
  );
};
