import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="header"> </div>
      <div className="vrstva_4"> </div>
      <div className="nadpis">FINANČNÍ GRAMOTNOST</div>
      <div className="podnadpis">S penězi si poradím!</div>
      <Link className="menu" to="/deti">
        Děti
      </Link>
      <Link className="menu" to="/dospeli">
        Dospělí
      </Link>
      <Link className="menu" to="/teenageri">
        Teenageři
      </Link>
    </>
  );
};

export default Home;
