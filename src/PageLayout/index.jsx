import React from 'react';
import './style.css';



const PageLayout = ( {children}) => {

return (
<>

<div className="footer"></div>
<div className="content"> {children} </div>
<div className="header"></div>



</>
    )
};

export default PageLayout;