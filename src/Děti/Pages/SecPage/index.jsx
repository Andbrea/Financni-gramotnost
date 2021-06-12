import React from "react";
import "./style.css";
import home from "./img/HOME.png";
import groceries from "./img/groceries.png";
import games from "./img/games.png";
import camera from "./img/Bez názvu-1.png";
import excercise from "./img/excercise.png";
import doctor from "./img/doctor.png";
import hobbies from "./img/hobbies.png";

const BoxImage = ({ img, text }) => {
  return (
    <>
      <img className="flipImage" src={img} alt="images" />
      <p> {text}</p>
    </>
  );
};

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
          <FlipCard img={games} text={'"Můžeš koupit si hry"'} />
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
      </div>
    </>
  );
};

export default SecPage;

{
  /* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

text={"Za peníze si pořídíš jídlo"} 
text={"Aby jsi mohl kde bydlet"} */
}
