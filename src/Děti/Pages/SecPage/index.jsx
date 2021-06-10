import React from "react";
import "./style.css";
import home from "./img/HOME.png";
import groceries from "./img/groceries.png";

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
        {/*  <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="flipImage" src={home} />
              </div>
              <div className="flip-card-back">
                <p>"Za peníze máš kde bydlet" </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-Card-Wrap">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="flipImage" src={groceries} />
              </div>
              <div className="flip-card-back">
                <p>"Za peníze si pořídíš jídlo"</p>
              </div>
            </div>
          </div> */}
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
