import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PageLayout = ({ children, title, links }) => {
    return (
        <>
            <div className="header">
                <h3 className="header-title">{title}</h3>
                <Link className="home" to="/">
                    Domů
                </Link>
            </div>

            <div className="navigation">{links}</div>

            <div className="content"> {children} </div>

            <div className="footer padd">
                © 2021, Andrea Bravencová, Iveta Vrobelová, Jitka Ševčíková,
                projekt byl vytvořen v rámci DA Czechitas
            </div>
        </>
    );
};

export default PageLayout;
