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
            <Link className="menu" to="/home">
              Hlavní stránka
            </Link>
            <Link className="menu" to="/deti">
              Děti
            </Link>
            <Link className="menu" to="/dospeli">
              Dospělí
            </Link>
            <Link className="menu" to="/teenageri">
              Teenageři
            </Link>
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
            <PageLayout>
              <Teens />
            </PageLayout>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
