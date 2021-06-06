import React from "react";
import "./style.css";
import * as ReactDOM from "react-dom";
import Dragula from "react-dragula";

export class FourPage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { color: "" };
  }
  handleSubmit = () => {
    const vysledek = Array.from(this.myRef.children).map(
      (item) => item.className
    );
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
          /* className={this.color ? "container onSelected" : "container"} */
          className={"boxes"}
          ref={this.dragulaDecorator}
        >
          <div className="chleba">Chleba</div>
          <div className="lizatko">Lízátko</div>
          <div className="pocitac">Počítač</div>
          <div className="auto">Auto</div>
        </div>
        <button className="btnElm" onClick={this.handleSubmit}>
          Vyhodnotit
        </button>
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
