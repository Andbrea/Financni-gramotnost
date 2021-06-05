import React from 'react';
import './style.css';

const Image = ({ path, altName }) => {
    return (
        <>
            <img className="page-img" src={path} alt={altName} />
        </>
    );
};

export default Image;
