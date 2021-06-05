import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page from './Page';
import './style.css';

const Teens = () => {
    return (
        <>
            <div>
                <Link className="menu" to="/teenageri/potrebujiversuschci">
                    Potřebuji versus chci
                </Link>
                <Link className="menu" to="/teenageri/zdrojpenez">
                    Zdroj peněz
                </Link>
                <Link className="menu" to="/teenageri/sporeni">
                    Spoření
                </Link>
                <Link className="menu" to="/teenageri/bankovniucet">
                    Bankovní účet
                </Link>
                <Link className="menu" to="/teenageri/platebnikarta">
                    Platební karta
                </Link>

                <Switch>
                    <Route path="/teenageri/potrebujiversuschci">
                        <Page
                            title="Potřebuji versus chci"
                            path="../../assets/img/Teens.svg"
                            altName="teens"
                            text="Je třeba si uvědomit, že peníze jsou tu k tomu, aby zajišťovaly hlavně naše základní lidské potřeby. Platíme jimi jídlo, bydlení, oblečení a léky. Teprve na druhém místě by měly být peníze použity na volnočasové aktivity a jiné věci. Před pořízením nové věci je vždy třeba si uvědomit, co je důležitější. Opravdu tu věc potřebuji nebo ji jenom chci? Nenechávám se ovlivnit okolím – přátelé, reklamy?"
                        />
                    </Route>
                    <Route path="/teenageri/zdrojpenez">
                        <Page
                            title="Zdroj peněz"
                            text="Pokud si chci něco koupit, musím na to mít peníze. Ty buď dostávám od rodičů jako kapesné, jako peněžní dárky od příbuzných nebo je mohu získat prací. Do 15 let je to spíše odměna za domácí práce a v pozdějším věku je tu možnost chodit na brigády. Kdo má odvahu a nápad, může se pustit do vlastního podnikání. Nikdy však nesmím zapomínat plnit nejprve školní povinnosti."
                        />
                    </Route>
                    <Route path="/teenageri/sporeni">
                        <Page
                            title="Spoření"
                            text="Získané peníze utratím, nebo si je šetřím. Správně bych však nikdy neměl utrácet všechno, co vydělám. Vždy je dobré si část peněz nechat a šetřit si je – spořit na další věci."
                        />
                    </Route>
                    <Route path="/teenageri/bankovniucet">
                        <Page
                            title="Bankovní účet"
                            text="S pomocí rodičů si mohu založit účet v bance, na kterém budu mít peníze uloženy. Nemusím je tak mít doma v pokladničce. Díky účtu budu mít lepší přehled o svých příjmech – peníze, které jsem obdržel, a výdajích – peníze, které jsem utratil. To vše díky internetovému bankovnictví. Tak mohu z domova peníze přijímat i posílat."
                        />
                    </Route>
                    <Route path="/teenageri/platebnikarta">
                        <Page
                            title="Platební karta"
                            text="Ke každému bankovnímu účtu je vystavena platební karta, která nahrazuje placení bankovkami a mincemi. Je na ní vždy uvedeno jméno vlastníka, číslo karty, datum doby platnosti a trojciferný bezpečnostní kód. Při platbě kartou potřebuješ znát pin karty, což jsou čtyři libovolná čísla, která si musíš pamatovat. Nikdy neposkytuj tento pin, ani informace o kartě cizí osobě! Mohl bys přijít o své úspory."
                        />
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default Teens;
