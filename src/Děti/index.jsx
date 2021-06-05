import React from 'react';
import FirstPage from './Pages/FirstPage';
/* import './style.css'; */
import SecPage from './Pages/SecPage';
import ThirdPage from './Pages/ThirdPage';
import FourPage from './Pages/FourPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom';

const Děti = () => {
return (
        <>
            <div>
                <Switch>
                    <Route exact path="/deti">
                        <FirstPage/>
                    </Route>
                    <Route path="/deti/kcemuslouzipenize">
                        <SecPage/>
                    </Route>
                    <Route path="/deti/platebnikarta">
                        <ThirdPage/>
                    </Route>
                    <Route path="/deti/kviz">
                        <FourPage/>
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default Děti;