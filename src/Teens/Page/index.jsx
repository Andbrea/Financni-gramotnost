import React from 'react';
import Subtitle from '../../components/Subtitle';
import Image from '../../components/Image';
import './style.css';

const Page = ({ text, title, path, altName }) => {
    return (
        <>
            <Subtitle text={title} />
            <Image path={path} altName={altName} />
            <p>{text}</p>
        </>
    );
};

export default Page;
