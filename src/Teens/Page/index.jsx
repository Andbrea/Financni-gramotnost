import React from 'react';
import Subtitle from '../../components/Subtitle';

const Page = ({ text, title }) => {
    return (
        <>
            <Subtitle text={title} />
            <p>{text}</p>
        </>
    );
};

export default Page;
