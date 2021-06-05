import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="uvod-box">
        <div className="uvod-hlavicka">
          <div className="uvod-header"> </div>
          <div className="uvod-nadpis">FINANČNÍ GRAMOTNOST</div>
          <div className="uvod-podnadpis">S penězi si poradím!</div>
        </div>
        <div className="uvod-text">
          Vítejte na naši informační stránce, která Vás seznámí se základními
          pojmy finanční problematiky. Pro další informace,klikněte na tlačítko
          pod obrázkem dle vlastního výběru - děti, teenageři, dospělí.{' '}
        </div>
        <div className="uvod-skupiny">
          <div className="uvod-karta">
            <Link className="menu" to="/deti">
              Děti
            </Link>
          </div>
          <div className="uvod-karta">
            <Link className="menu" to="/dospeli">
              Dospělí
            </Link>
          </div>
          <div className="uvod-karta">
            <Link className="menu" to="/teenageri">
              Teenageři
            </Link>
          </div>
        </div>
        <div className="uvod-paticka">
          2021, Andrea Bravencová, Iveta Vrobelová, Jitka Ševčíková{' '}
        </div>
      </div>
    </>
  );
};

export default Home;
