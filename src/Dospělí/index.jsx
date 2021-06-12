import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Str from './Str';
import './style.css';

const Dospělí = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path="/dospeli">
          <Str
            title="Finanční gramotnost pro dospělé"
            path="../../assets/img/Adults.svg"
            altName="Dospělí"
            text="Finanční gramotnost je soubor znalostí a dovedností, které člověku umožňují porozumět financím  (chcete-li jiný termín: svět peněz.) Správně s nimi zacházet v různých životních situacích a také zabezpečit sebe i svoji rodinu. 
            Každý z nás má nějaké znalosti avšak je velmi důležité se nadále vzdělávat a rozšiřovat si své vědomosti. Jen tak si zajistíme, že se nám vyhnou jisté nepříjemnosti, které na nás občas číhají.
            Stále váháte a nevíte, co si pod pojmem finanční gramotnosti představit? Je to jednoduché, uvedeme Vám pár příkladů – denní nákup potravin, řešení rodinného rozpočtu od příjmu až po výdaje, pracovní smlouva, pojistné smlouvy…… a takto bychom mohli dále pokračovat. Nyní již máte reálnou představu o námi zmíněném pojmu.
            Finančně gramotný občan se orientuje v problematice peněz a cen a je schopen odpovědně spravovat osobní/rodinný rozpočet, včetně správy finančních aktiv a finančních závazků s ohledem na měnící se životní situace
            "
          />
        </Route>
        <Route path="/dospeli/bankovkyamince">
          <Str
            title="Bankovky a mince"
            text="Nyní se seznámíme s penězi, které dělíme na papírové (bankovky) a kovové (mince). Mezi kovové mince patří:  1 Kč , 2 Kč, 5 Kč, 10 Kč, 20 Kč, 50 Kč. Bankovky jsou v hodnotách:  100 Kč, 200 Kč, 500 Kč, 1000 Kč, 2000Kč, 5000 Kč. 
          Zkuste si prohlédnout  jak mince tak i bankovky. Naleznete na nich ornamenty, znaky, portréty známých osobností, ochranné prvky, značky pro nevidomé. 
          Pokládáte si otázku: „Kdo jsou lidé na bankovnkách?“  Jsou to známé osobnosti, které jsou historicky významné  pro Českou republiku. Asi tušíte, že není na škodu si připomenout jejich jména:
          100 Kč 	- Karel VI. (symbol vzdělání - Karlova Univerzita)
          200 Kč	- Jan Amos Komenský (symbol vzdělání – pedagog – učebnice)
          500 Kč – Božena Němcová ( česká spisovatelka, kontrast nelehkého života s romantikou)
          1000 Kč – František Palacký ( český politik a historik, Kroměříž – sbírka mincí a medailí)
          2000 Kč	 - Ema Destinnová  (operní pěvkyně – hudba)
          5000 Kč – Tomáš Garrigue Masaryk (1. Československý prezident, pražské památky) 
          "
          />
        </Route>

        <Route path="/dospeli/bankovniucet">
          <Str
            title="Založení bankovního účtu"
            text="Bankovní účet představuje bezpečné uložení Vámi uložených peněžních prostředků, za které Vám banka ručí. Díky účtu můžete provádět bezhotovostní platby z účtu na účet nebo platby přes internet. 
            Základní podmínkou pro zřízení osobního bankovního účtu je dosažení věku 18 let a doložení dvou dokladů totožnosti. Tím prvním je občanský průkaz, druhý pak může být cestovní pas, rodný list, řidičský průkaz či kartička pojištěnce. 
            Jestliže žádá o účet cizinec, musí doložit cestovní pas + další osobní doklad. V případě založení studentského účtu, pak banka vyžaduje potvrzení o studiu. 
            Dalším krokem je vložení první částky na účet."
          />
        </Route>

        <Route path="/dospeli/platebnikarta">
          <Str
            title="Platební karta"
            text="Jsou malé plastové karty určené k bezhotovostním platbám. Nejčastěji jsou vydávány bankou fyzickým i právnickým osobám. První platební karta v Československu byla použita v roce 1988. 
            Z pohledu držitele platební karta usnadňuje placení bez nutnosti mít u sebe jakoukoliv finanční hotovost. Mohou s ní být spojeny i další služby a výhody.
            Největší společnosti, které vydávají platební karty jsou: Diners Club, Visa, MasterCard, American Express, JCB, China UnionPay atd.
            Po celé České republice jsou rozmístěny bankomaty, které vlastní banka. Bankomat je samoobslužné zařízení, které vydává držitelům platebních karet peněžní hotovost a nově dokonce i umožňuje další služby. 
            "
          />
        </Route>

        <Route path="/dospeli/studiumverzusprace">
          <Str title="Studium verzus práce" text="Další obsah." />
        </Route>

        <Route path="/dospeli/vyplataacoobsahuje">
          <Str title="Výplata a co obsahuje" text="Další odstavec." />
        </Route>

        <Route path="/dospeli/bydlenaaplatby">
          <Str title="Bydlení a různé platby" text="Další odstavec." />
        </Route>

        <Route path="/dospeli/reklamaapravda">
          <Str title="Reklamy a pravda" text="Místo pro textík" />
        </Route>
      </Switch>
    </>
  );
};

export default Dospělí;
