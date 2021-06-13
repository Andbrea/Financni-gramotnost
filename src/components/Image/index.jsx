import React from 'react';
import './style.css';

const Image = ({ path, altName, className }) => {
    return (
        <div className="img-box">
            <img
                className="page-img"
                className={className}
                src={path}
                alt={altName}
            />
        </div>
    );
};

export default Image;
