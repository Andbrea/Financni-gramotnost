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
    type: "koruna",
    img: koruna,
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
    type: "dveKoruna",
    img: dveKoruna,
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
console.log(items);

const Pexeso = () => {
  const [pair, setPair] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [open, setIsOpen] = useState([]);
  const [revealedTypes, setIsRevealed] = useState([]);
  const [finished, setIsFinished] = useState("");

  const handleClick = (index) => {
    setPair((current) => [...current, index]);
  };

  useEffect(() => {
    console.log(revealedTypes);
    if (revealedTypes.length === 6) {
      setIsFinished(
        "Vyhrál jsi!!! Zajímá tě, k čemu slouží peníze ? Pokračuj na další téma! :)"
      );
    }
  }, [revealedTypes]);

  useEffect(() => {
    if (pair.length === 1) {
      console.log("vyber jeste jednu");
    } else if (pair.length === 2) {
      console.log("uz vic ne");
      const chosenFirst = pair[0];
      const chosenSec = pair[1];
      if (items[chosenFirst].type === items[chosenSec].type) {
        setIsRevealed((current) => [...current, items[chosenFirst].type]);
        console.log("jsou stejni");
      } else {
        console.log("Njesou stejni");
      }
      setTimeout(() => {
        setPair([]);
      }, 1000);
    }
  }, [pair]);

  const isCardActive = (index) => {
    const filtered = pair.filter((item) => item === index);
    /*  console.log(filtered); */
    return filtered.length > 0;
  };
  const cardRevealed = (type) => {
    const filteredTypes = revealedTypes.filter((item) => item === type);
    return filteredTypes.length > 0;
  };
  const handleReset = () => {
    setIsRevealed([]);
  };
  return (
    <div className="App">
      <header>
        <h2>Pexeso</h2>
        <div className="money-text">
          Vyber dvě karty se shodnými obrázky a tím vyhraješ hru!
        </div>
      </header>
      <div className="pexeso-grid">
        <div className="cardlist-pexeso">
          {items.map((card, index) => {
            return (
              <div
                onClick={() => {
                  if (!cardRevealed(card.type)) {
                    handleClick(index);
                  }
                }}
                key={index}
                className="flip-card-wrap-pexeso"
              >
                <Card
                  card={card}
                  type={card.type}
                  image={card.img}
                  isFlipped={isCardActive(index)}
                  isDisabled={cardRevealed(card.type)}
                />
              </div>
            );
          })}
        </div>
        <div className="pexeso-text">
          <button className="btnElm " onClick={handleReset}>
            Hrát znova
          </button>
          <p className="finished-text">{finished}</p>
        </div>
      </div>
    </div>
  );
};

export default Pexeso;
