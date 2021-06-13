import React from "react";
import "./style.css";
import * as ReactDOM from "react-dom";
import Dragula from "react-dragula";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";

const items = ["auto", "pocitac", "chleba", "lizatko"];

export class FourPage extends React.Component {
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
      this.setState({ showResult: "Vše máš správně" });
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
            Seřaď správně položky v seznamu od <strong>nejdražší</strong> po
            nejlevnější
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
            <div id="chleba" className="box chleba">
              Chleba
            </div>
            <div id="lizatko" className="box lizatko">
              Lízátko
            </div>
            <div id="pocitac" className="box pocitac">
              Počítač
            </div>
            <div id="auto" className="box auto">
              Auto
            </div>
          </div>
          <button className="btnElm" onClick={this.handleSubmit}>
            Vyhodnotit
          </button>
          {this.state.showResult && (
            <div className="result-text">{this.state.showResult}</div>
          )}
          <Link to="/deti/pokracovat">
            <button className="btnElm-pexeso">Zkusit jiný</button>
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
