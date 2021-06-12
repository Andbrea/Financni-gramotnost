import React from 'react';
import Subtitle from '../../components/Subtitle';
import Image from '../../components/Image';

const Page = ({ text, title, path, altName, children }) => {
    return (
        <>
            <Subtitle text={title} />
            <Image path={path} altName={altName} />
            <p>{text}</p>
            {children}
        </>
    );
};

export default Page;
