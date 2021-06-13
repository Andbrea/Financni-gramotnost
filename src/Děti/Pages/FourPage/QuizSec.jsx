import React from "react";
import "./style.css";
import * as ReactDOM from "react-dom";
import Dragula from "react-dragula";
import { BrowserRouter as Router, Link } from "react-router-dom";

const items = ["pastelky", "morce", "kino", "plavani"];

export class QuizSec extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { color: "", showResult: "" };
  }
  handleSubmit = () => {
    const vysledek = Array.from(this.myRef.children).map((item) => item.id);
    console.log(vysledek);
    let isCorrect = true;
    for (let i = 0; i < items.length; i++) {
      if (vysledek[i] !== items[i]) {
        isCorrect = false;
      }
    }
    if (isCorrect) {
      this.setState({ showResult: "Gratuluji! Vše máš správně." });
    } else {
      this.setState({ showResult: "Máš tam chybu, zkus to znovu! :)" });
    }
  };

  render() {
    return (
      <>
        <div className="money-text">
          <h2>Kvíz</h2>
          <p>
            Teď to bude naopak! Seřaď správně položky od nejlevnější po
            nejdražší
          </p>
        </div>
        <div className="quiz calculator">
          <div
            onClick={function () {
              this.setState({ color: "red" });
            }}
            className={"boxes"}
            ref={this.dragulaDecorator}
          >
            <div id="morce" className="box morce">
              Nové morčátko
            </div>
            <div id="plavani" className="box plavani">
              Roční kurz plavání
            </div>
            <div id="pastelky" className="box pastelky">
              Pastelky
            </div>
            <div id="kino" className="box kino">
              Lístek do kina
            </div>
          </div>
          <button className="btnElm" onClick={this.handleSubmit}>
            Vyhodnotit
          </button>
          {this.state.showResult && (
            <div className="result-text">{this.state.showResult}</div>
          )}
        </div>
        <div className="money-text kviz">
          Skvělé! Došel jsi až na konec této kategorie. V základech finanční
          gramotnosti už musíš být sběhlý. Pokud se na to cítíš, vyzkoušej i
          další kategorii.
          <img
            className="teensFoto"
            src="/assets/img/TeensColor.svg"
            alt="teenageri foto"
          />
          <Link to="/teenageri">
            <button className="btnElm-pexeso">Teenageři</button>
          </Link>
        </div>
      </>
    );
  }
  dragulaDecorator = (componentBackingInstance) => {
    this.myRef = componentBackingInstance;
    if (componentBackingInstance) {
      let options = {};
      const Zkouska = Dragula([componentBackingInstance], options);
    }
  };
}
