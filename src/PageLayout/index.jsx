import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PageLayout = ({ children, title, links }) => {
    return (
        <>
            <div className="header">
                {title}
                <Link className="home" to="/">
                    Domů
                </Link>
            </div>

            <div className="navigation">{links}</div>

            <div className="content"> {children} </div>

            <div className="footer"></div>
        </>
    );
};

export default PageLayout;
