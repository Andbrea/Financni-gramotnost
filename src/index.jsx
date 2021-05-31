
import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import Andrea from './Andrea';
import Jitka from './Jitka';
import Iveta from './Iveta';
import Home from './Home';

const App = () => (
<>
<h1>Finanční gramotnost</h1>
<p>Náš projekt se týká vytvoření informačního webu pro děti, teenagery a dospělé. Ty budeme chtít zábavní formou seznámit se základními pojmy 
        finanční gramotnosti. Níže je něco o každé z nás...</p>
{/* Nefunguje
<img className="uvodniFoto" src={require('./img/Uvodnii.jpg')} /> */}

        <Router>
      <div>
              <Link className="menu" to="/home">Hlavní stránka</Link>
              <Link className="menu" to="/andrea">Andrea</Link>
              <Link className="menu" to="/jitka">Jitka</Link>
              <Link className="menu" to="/iveta">Iveta</Link>

  
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/andrea">
            <Andrea />
          </Route>
          <Route path="/jitka">
            <Jitka />
          </Route>
          <Route path="/iveta">
            <Iveta />
          </Route>
        </Switch>
      </div>
    </Router>
</> 
);

render(<App />, document.querySelector('#app'));
