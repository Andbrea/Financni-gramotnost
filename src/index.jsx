import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
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
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/deti/minceabankovky"
                                        exact={true}
                                    >
                                        Mince a Bankovky
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/deti/kcemuslouzipenize"
                                    >
                                        K čemu slouží peníze
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/deti/platebnikarta"
                                    >
                                        Platební karta
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/deti/kviz"
                                    >
                                        Kvíz
                                    </NavLink>
                                </>
                            }
                        >
                            <Děti />
                        </PageLayout>
                    </Route>

                    <Route path="/dospeli">
                        <PageLayout
                            title="Dospělí"
                            links={
                                <>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/dospeli"
                                        exact={true}
                                    >
                                        Bankovky a mince
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/dospeli/banka"
                                    >
                                        Banka
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/dospeli/vyplataacoobsahuje"
                                    >
                                        Výplata a co obsahuje
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/dospeli/bankovniucet"
                                    >
                                        Bankovní účet
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/dospeli/platebnikarta"
                                    >
                                        Platební karta
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/dospeli/reklamaapravda"
                                    >
                                        Reklama a pravda
                                    </NavLink>
                                </>
                            }
                        >
                            <Dospělí />
                        </PageLayout>
                    </Route>

                    <Route path="/teenageri">
                        <PageLayout
                            title="Teenageři"
                            links={
                                <>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/teenageri"
                                        exact={true}
                                    >
                                        Potřebuji vs chci
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/teenageri/zdrojpenez"
                                    >
                                        Zdroj peněz
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/teenageri/sporeni"
                                    >
                                        Spoření
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/teenageri/bankovniucet"
                                    >
                                        Bankovní účet
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/teenageri/platebnikarta"
                                    >
                                        Platební karta
                                    </NavLink>
                                    <NavLink
                                        className="navigation-link"
                                        activeClassName="selected"
                                        to="/teenageri/sporicikalkulacka"
                                    >
                                        Spořicí kalkulačka
                                    </NavLink>
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
