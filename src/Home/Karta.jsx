import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Karta = ({ title, to, cesta, zoom }) => {
  return (
    <>
      <div className="karta">
        <div className="postavy">
          <div className="volnemisto"></div>
          <img src={cesta} style={{ height: zoom }} />
        </div>
        <Link className="menu" to={to}>
          {title}
        </Link>
      </div>
    </>
  );
};

export default Karta;
