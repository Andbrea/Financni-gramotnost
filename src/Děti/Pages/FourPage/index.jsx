import React from "react";
import "./style.css";
import * as ReactDOM from "react-dom";
import Dragula from "react-dragula";

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
      this.setState({ showResult: "Vse mas spravne" });
    } else {
      this.setState({ showResult: "Mas tam chybu, zkus to znovu" });
    }
  };

  render() {
    console.log("aaa");
    return (
      <>
        <h2>Kvíz</h2>
        <p>Seřaď správně položky v seznamu od nejdražší po nejlevnější</p>
        <div
          onClick={function () {
            this.setState({ color: "red" });
          }}
          /* className={this.state.color ? "container onSelected" : "container"} */
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
        {this.state.showResult && <div>{this.state.showResult}</div>}
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
