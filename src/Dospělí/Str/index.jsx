import React from 'react';
import Subtitle from '../../components/Subtitle';
import Image from '../../components/Image';
import './style.css';

const Str = ({ text, title, path, altName, children, className }) => {
    return (
        <>
            <Subtitle text={title} />
            <Image path={path} altName={altName} className={className} />
            <p className="bloky">{text}</p>
            {children}
        </>
    );
};

export default Str;
