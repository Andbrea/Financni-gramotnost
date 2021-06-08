import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Karta from "./Karta";

const Home = () => {
  return (
    <>
      <div className="uvod-box">
        <div className="uvod-hlavicka">
          <img src="assets/img/lista.svg" />
          <div className="uvod-header"> </div>
          <div className="uvod-nadpis">FINANČNÍ GRAMOTNOST</div>
          <div className="uvod-podnadpis">S penězi si poradím!</div>
        </div>
        <div className="uvod-text">
          Vítejte na naši informační stránce, která Vás seznámí se základními
          pojmy finanční problematiky. Pro další informace,klikněte na tlačítko
          pod obrázkem dle vlastního výběru - děti, teenageři, dospělí.{" "}
        </div>
        <div className="uvod-skupiny">
          <div className="uvod-karta">
            <Karta
              title="Děti"
              to="/deti"
              cesta="/assets/img/KidsColor.svg"
              zoom="50%"
            />
          </div>
          <div className="uvod-karta">
            <Karta
              title="Teenager"
              to="/teenageri"
              cesta="/assets/img/TeensColor.svg"
              zoom="75%"
            />
          </div>
          <div className="uvod-karta">
            <Karta
              title="Dospělí"
              to="/dospeli"
              cesta="/assets/img/Adults.svg"
              zoom="90%"
            />
          </div>
        </div>
        <div className="uvod-paticka">
          2021, Andrea Bravencová, Iveta Vrobelová, Jitka Ševčíková{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
