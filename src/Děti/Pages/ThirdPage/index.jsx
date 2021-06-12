import React from "react";
import "./style.css";
import card from "./1200px-Credit_or_Debit_Card_Flat_Icon_Vector.svg.png";

const ThirdPage = () => {
  return (
    <>
      <h2 className="title-card">Platební karta</h2>
      <div className="cardPayment">
        <img className="card" src={card} alt="platebni karta" />
      </div>
      <div className="text-card">
        Když nechceš nosit peníze po kapsách, nebo se bojíš, že by si mohl být
        okraden, nejlepší způsob kam peníze uschovat je na svém účtu v bance.
      </div>
    </>
  );
};

export default ThirdPage;
