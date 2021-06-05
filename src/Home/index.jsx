import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="uvod-box">
        <div className="uvod-hlavicka">
          <div className="header"> </div>
          <div className="nadpis">FINANČNÍ GRAMOTNOST</div>
          <div className="podnadpis">S penězi si poradím!</div>
        </div>
        <div className="uvod-text">
          Vítejte na naši informační stránce, která Vás seznámí se základními
          pojmy finanční problematiky. Pro další informace,klikněte na tlačítko
          pod obrázkem dle vlastního výběru - děti, teenageři, dospělí.{' '}
        </div>
        <div className="uvod-skupiny">
          <div className="vrstva_4"></div>
          <Link className="menu" to="/deti">
            Děti
          </Link>
          <Link className="menu" to="/dospeli">
            Dospělí
          </Link>
          <Link className="menu" to="/teenageri">
            Teenageři
          </Link>
        </div>
        <div className="uvod-paticku">
          2021, Andrea Bravencová, Iveta Vrobelová, Jitka Ševčíková{' '}
        </div>
      </div>
    </>
  );
};

export default Home;
