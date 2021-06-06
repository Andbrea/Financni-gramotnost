import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Karta = ({ title, to, cesta, zoom }) => {
  return (
    <>
      <div className="karta"><Link className="menu" to={to}>
        <div className="postavy">
          <div className="volnemisto"></div>
          <img src={cesta} style={{ height: zoom }} />
        </div>
        
          {title}
        </Link>
      </div>
    </>
  );
};

export default Karta;
