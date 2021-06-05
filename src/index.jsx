
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
import Děti from './Děti';
import Dospělí from './dospělí';
import Teenageri from './teenageri';
import Home from './Home';

const App = () => (
<>
{/* <h1>Finanční gramotnost</h1>
<p>Náš projekt se týká vytvoření informačního webu pro děti, teenagery a dospělé. Ty budeme chtít zábavní formou seznámit se základními pojmy 
        finanční gramotnosti. Níže je něco o každé z nás...</p> */}
{/* Nefunguje
<img className="uvodniFoto" src={require('./img/Uvodnii.jpg')} /> */}

        <Router>
      <div>
              <Link className="menu" to="/home">Hlavní stránka</Link>
              <Link className="menu" to="/deti">Děti</Link>
              <Link className="menu" to="/dospeli">Dospělí</Link>
              <Link className="menu" to="/teenageri">Teenageři</Link>

  
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/deti">
            <Děti />
          </Route>
          <Route path="/dospeli">
            <Dospělí />
          </Route>
          <Route path="/teenageri">
            <Teenageri />
          </Route>
        </Switch>
      </div>
    </Router>
</> 
);

render(<App />, document.querySelector('#app'));
