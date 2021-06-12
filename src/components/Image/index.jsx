import React from 'react';
import './style.css';

const Image = ({ path, altName }) => {
    return (
        <div className="img-box">
            <img className="page-img" src={path} alt={altName} />
        </div>
    );
};

export default Image;
