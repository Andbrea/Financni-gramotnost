import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PageLayout = ({ children }) => {
    return (
        <>
            <div className="header">
                <Link className="home" to="/">
                    Domů
                </Link>
            </div>

            <div className="content"> {children} </div>

            <div className="footer"></div>
        </>
    );
};

export default PageLayout;
