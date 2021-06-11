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

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/deti">
                        <PageLayout
                            title="Děti"
                            links={
                                <>
                                    <Link
                                        className="navigation-link"
                                        to="/deti/minceabankovky"
                                    >
                                        Mince a Bankovky
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/deti/kcemuslouzipenize"
                                    >
                                        K čemu slouží peníze
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/deti/platebnikarta"
                                    >
                                        Platební karta
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/deti/kviz"
                                    >
                                        Kvíz
                                    </Link>
                                </>
                            }
                        >
                            <Děti />
                        </PageLayout>
                    </Route>

                    <Route path="/dospeli">
                        <PageLayout
                            /* title="Finanční gramotnost pro dospělé"*/
                            links={
                                <>
                                    <Link
                                        className="navigation-link"
                                        to="/dospeli/bankovkyamince"
                                    >
                                        Bankovky a mince
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/dospeli/banka"
                                    >
                                        Banka
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/dospeli/vyplataacoobsahuje"
                                    >
                                        Výplata a co obsahuje
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/dospeli/bankovniucet"
                                    >
                                        Bankovní účet
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/dospeli/platebnikarta"
                                    >
                                        Platební karta
                                    </Link>
                                    <Link
                                        className="navigation-link"
                                        to="/dospeli/reklamaapravda"
                                    >
                                        Reklama a pravda
                                    </Link>
                                </>
                            }
                        >
                            <Dospělí />
                        </PageLayout>
                    </Route>

                    <Route path="/teenageri">
                        <PageLayout
                            title="FINANČNÍ GRAMOTNOST Teenageři"
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
                                    <Link
                                        className="navigation-link"
                                        to="/teenageri/sporicikalkulacka"
                                    >
                                        Spořicí kalkulačka
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
