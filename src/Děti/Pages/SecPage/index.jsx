import React from 'react';
import './style.css';
import home from './img/HOME.png';
import groceries from './img/groceries.png';

const BoxImage = ({img, text}) => {
  return (
    <div className="boxImage">
    <img className="box-Img" src={img} alt="images"/>
    <p className="flipText">{text}</p>
    </div>
  )
}


const SecPage = () => {

return (
<>
<div /* onClick={handleChange ? "moneyImages" : "moneyImages" "moneyImages--flip"}  */className="moneyImages">
      <BoxImage 
        img={home}
        text={"Aby jsi mohl kde bydlet"}
          />
      <BoxImage 
        img={groceries}
        text={"Za peníze si pořídíš jídlo"} 
          />
</div>
</>
  )
};

export default SecPage; 
