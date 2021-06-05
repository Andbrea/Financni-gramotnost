import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Karta = ({ title, to, cesta }) => {
  return (
    <>
      <div className="karta">
        <img src={cesta} />
        <Link className="menu" to={to}>
          {title}
        </Link>
      </div>
    </>
  );
};

export default Karta;
