import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Str from './Str';
import './style.css';

const Dospělí = () => {
return (
<>
<Switch>
                <Route exact path="/dospeli/bankovkyamince">
                    <Str
                        title="Bankovky a mince"
                        path="../../assets/img/Adults.svg"
                        altName="Dospělí"
                        text="napiš si tu něco"
                    />
                </Route>
                <Route path="/dospeli/banka">
                    <Str
                        title="Banka"
                        text="Psaný text"
                    />
                </Route>
                <Route path="/dospeli/vyplataacoobsahuje">
                    <Str
                        title="Výplata a co obsahuje"
                        text="Další odstavec."
                    />
                </Route>
                <Route path="/dospeli/bankovniucet">
                    <Str
                        title="Bankovní účet"
                        text="Další obsah."
                    />
                </Route>
                <Route path="/dospeli/platebnikarta">
                    <Str
                        title="Platební karta"
                        text="Sem dám něco"
                    />
                </Route>
                <Route path="/dospeli/reklamaapravda">
                    <Str 
                    title="Reklamy a pravda"
                        text="Místo pro textík"
                        
                        />
                </Route>
            </Switch>
        </>
    );
};

export default Dospělí;







            
