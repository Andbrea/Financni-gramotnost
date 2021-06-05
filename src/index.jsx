import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom';
import Děti from './Děti';
import Dospělí from './Dospělí';
import Teens from './Teens';
import Home from './Home';
import PageLayout from './PageLayout';
/* import obrazek from './Home/img/Uvodnii.jpg';
console.log(obrazek);/* <img className="uvodniFoto" src={(obrazek)} /> */

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/deti">
                        <PageLayout>
                            {' '}
                            <Děti />{' '}
                        </PageLayout>
                    </Route>
                    <Route path="/dospeli">
                        <PageLayout>
                            <Dospělí />
                        </PageLayout>
                    </Route>
                    <Route path="/teenageri">
                        <PageLayout
                            title="Teenageři"
                            links={
                                <>
                                    <Link
                                        className="navigation-link"
                                        to="/teenageri"
                                    >
                                        Potřebuji vs chci
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/teenageri/zdrojpenez"
                                    >
                                        Zdroj peněz
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/teenageri/sporeni"
                                    >
                                        Spoření
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/teenageri/bankovniucet"
                                    >
                                        Bankovní účet
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/teenageri/platebnikarta"
                                    >
                                        Platební karta
                                    </Link>
                                </>
                            }
                        >
                            <Teens />
                        </PageLayout>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

render(<App />, document.querySelector('#app'));
