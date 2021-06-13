import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import PexesoGrid from "./PexesoGrid";
import koruna from "../img/1_2004_1B.jpg";
import dveKoruna from "../img/2_1999_1B.jpg";
import petiKoruna from "../img/5_1999_1B.jpg";
import desetiKoruna from "../img/Mince_10Kč_vzor_2003_rubová_strana.jpg";
import dvacetiKoruna from "../img/20_2004_3B.jpg";
import padesatiKoruna from "../img/50_1999_1B.jpg";
import { Card } from "./PexesoGrid";

const items = [
  {
    type: "koruna",
    img: koruna,
    isFlipped: false,
  },
  {
    type: "dveKoruna",
    img: dveKoruna,
    isFlipped: false,
  },
  {
    type: "petiKoruna",
    img: petiKoruna,
    isFlipped: false,
  },
  {
    type: "desetiKoruna",
    img: desetiKoruna,
    isFlipped: false,
  },
  {
    type: "dvacetiKoruna",
    img: dvacetiKoruna,
    isFlipped: false,
  },
  {
    type: "padesatiKoruna",
    img: padesatiKoruna,
    isFlipped: false,
  },
  {
    type: "koruna",
    img: koruna,
    isFlipped: false,
  },
  {
    type: "dveKoruna",
    img: dveKoruna,
    isFlipped: false,
  },
  {
    type: "petiKoruna",
    img: petiKoruna,
    isFlipped: false,
  },
  {
    type: "desetiKoruna",
    img: desetiKoruna,
    isFlipped: false,
  },
  {
    type: "dvacetiKoruna",
    img: dvacetiKoruna,
    isFlipped: false,
  },
  {
    type: "padesatiKoruna",
    img: padesatiKoruna,
    isFlipped: false,
  },
];

const Pexeso = () => {
  return (
    <div className="App">
      <header>
        <h2>Pexeso</h2>
        <div>Vyber dvě karty se shodnými obrázky a tím vyhraješ hru!</div>
      </header>
      <div className="pexeso-grid">
        <div className="cardlist-pexeso">
          {items.map((card, index) => {
            return (
              <div key={index} className="flip-card-wrap-pexeso">
                <Card
                  card={card}
                  type={card.type}
                  image={card.img}
                  isFlipped={card.isFlipped}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pexeso;
