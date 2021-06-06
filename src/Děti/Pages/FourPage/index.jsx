import React from "react";
import * as ReactDOM from "react-dom";
import Dragula from "react-dragula";
import "./style.css";

export class FourPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }
  render() {
    return (
      <>
        <div
          onClick={function () {
            this.setState({ color: "red" });
          }}
          className={this.color ? "container onSelected" : "container"}
          ref={this.dragulaDecorator}
        >
          <div className="box">blaaaaaaa</div>
          <div className="box">bleeeeeee</div>
          <div className="box">bliiiiiii</div>
          <div className="box">bluuuuuuu</div>
        </div>
        <p>Vybral jsi</p>
      </>
    );
  }
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  };
}

/* export class App extends React.Component {
  render () {
    return <div className='container' ref={this.dragulaDecorator}>
      <div>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </div>;
  },
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
}); */
