import React from "react";
import "./style.css";
import home from "./img/HOME.png";
import groceries from "./img/groceries.png";
import games from "./img/games.png";
import camera from "./img/Bez názvu-1.png";
import excercise from "./img/excercise.png";
import doctor from "./img/doctor.png";
import hobbies from "./img/hobbies.png";
import clothes from "./img/clothes.png";

const FlipCard = ({ img, text }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flipImage" src={img} />
        </div>
        <div className="flip-card-back">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
const SecPage = () => {
  return (
    <>
      <h2 className="money-text">K čemu slouží peníze?</h2>
      <div className="money-text">Najeď myší na obrázek a dozvíš se to :)</div>
      <div className="cardList">
        <div className="flip-Card-Wrap">
          <FlipCard img={home} text={'"Za peníze máš kde bydlet"'} />
        </div>
        <div className="flip-Card-Wrap">
          <FlipCard
            img={groceries}
            text={'"Za peníze si můžeš koupit jídlo"'}
          />
        </div>
        <div className="flip-Card-Wrap">
          <FlipCard img={games} text={'"Můžeš si koupit hry"'} />
        </div>
        <div className="flip-Card-Wrap">
          <FlipCard img={camera} text={'"Můžeš chodit do kina"'} />
        </div>
        <div className="flip-Card-Wrap">
          <FlipCard
            img={excercise}
            text={'"Můžeš si koupit sešity do školy"'}
          />
        </div>
        <div className="flip-Card-Wrap">
          <FlipCard
            img={doctor}
            text={'"Za peníze si hradíš lékařskou péči"'}
          />
        </div>
        <div className="flip-Card-Wrap">
          <FlipCard
            img={hobbies}
            text={'"Můžeš se rozvíjet v tom, co tě baví!"'}
          />
        </div>
        <div className="flip-Card-Wrap">
          <FlipCard img={clothes} text={'"Máš oblečení"'} />
        </div>
      </div>
    </>
  );
};

export default SecPage;
