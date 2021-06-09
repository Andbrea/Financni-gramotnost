import React from "react";
import "./style.css";
import home from "./img/HOME.png";
import groceries from "./img/groceries.png";

const BoxImage = ({ img, text }) => {
  return (
    <div className="boxImage">
      <img className="box-img" src={img} alt="images" />
      <p className="flipText">{text}</p>
    </div>
  );
};

const SecPage = () => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <BoxImage img={home} />
            <BoxImage img={groceries} />
          </div>
          <div class="flip-card-back"></div>
          <BoxImage text={"Za peníze si pořídíš jídlo"} />
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
