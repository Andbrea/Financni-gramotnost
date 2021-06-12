import React from "react";
import "./style.css";
import koruna from "./img/1_2004_1B.jpg";
import dveKoruna from "./img/2_1999_1B.jpg";
import petiKoruna from "./img/5_1999_1B.jpg";
import desetiKoruna from "./img/Mince_10Kč_vzor_2003_rubová_strana.jpg";
import padesatiKoruna from "./img/50_1999_1B.jpg";
import stokoruna from "./img/047a3435a.jpg";
import dveste from "./img/8537_sRYEr3_w670h318.jpg";
import petset from "./img/bcsr2cz013.jpg";
import tisic from "./img/2466.jpg";
import dvatisice from "./img/2000CZK_obverse.jpg";
import pettisic from "./img/5_000_czk_note_1999.jpg";
import Pexeso from "./Pexeso/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";

const MoneyBox = ({ img, text }) => {
  return (
    <div className="moneyBox">
      <img className="moneyBox-Img" src={img} alt="money" />
      <p className="moneyBoxText">{text}</p>
    </div>
  );
};

const FirstPage = () => {
  return (
    <>
      <h2 className="titleCoins">Mince a bankovky</h2>
      <div className="moneyCoins">
        <MoneyBox img={koruna} text={"Jedna koruna"} />
        <MoneyBox img={dveKoruna} text={"Dvě koruny"} />
        <MoneyBox img={petiKoruna} text={"Pět korun"} />
        <MoneyBox img={desetiKoruna} text={"Deset korun"} />
        <MoneyBox img={padesatiKoruna} text={"Padesát korun"} />
      </div>
      <div className="moneyCash">
        <MoneyBox img={stokoruna} text={"Sto korun"} />
        <MoneyBox img={dveste} text={"Dvěstě korun"} />
        <MoneyBox img={petset} text={"Pětset korun"} />
      </div>
      <div className="bigMoney">
        <MoneyBox img={tisic} text={"Tisíc korun"} />
        <MoneyBox img={dvatisice} text={"Dva tisíce korun"} />
        <MoneyBox img={pettisic} text={"Pět tisíc korun"} />
      </div>
      <div className="introPexeso">
        <p>Myslíš, že je znáš všechny? Pojď si to vyzkoušet!</p>

        {/*         <Router>
          <button>
            Hrát
            <Route path="deti/pexeso">
              <Pexeso />
            </Route>
          </button>
        </Router> */}
      </div>
    </>
  );
  return (
    <>
      <h2 className="titleCoins">Mince a bankovky</h2>
      <div className="moneyCoins">
        <MoneyBox img={koruna} text={"Jedna koruna"} />
        <MoneyBox img={dveKoruna} text={"Dvě koruny"} />
        <MoneyBox img={petiKoruna} text={"Pět korun"} />
        <MoneyBox img={desetiKoruna} text={"Deset korun"} />
        <MoneyBox img={padesatiKoruna} text={"Padesát korun"} />
      </div>
      <div className="moneyCash">
        <MoneyBox img={stokoruna} text={"Sto korun"} />
        <MoneyBox img={dveste} text={"Dvěstě korun"} />
        <MoneyBox img={petset} text={"Pětset korun"} />
      </div>
      <div className="bigMoney">
        <MoneyBox img={tisic} text={"Tisíc korun"} />
        <MoneyBox img={dvatisice} text={"Dva tisíce korun"} />
        <MoneyBox img={pettisic} text={"Pět tisíc korun"} />
      </div>
      <div className="introPexeso">
        <p>Myslíš, že je znáš všechny? Pojď si to vyzkoušet!</p>
        <button className="btn">Hrát</button>
      </div>
    </>
  );
};

export default FirstPage;
