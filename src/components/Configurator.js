import { useState } from "react";
import "./Configurator.css";

function Configurator() {
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);

  return (
    <div className="configCont">
      <span className="configTitle">CONFIGURE TON VELO</span>
      <span className="configTitle"> 1 - Choisis un modèle</span>

      <div
        className={option1 === 500 ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setOption1(500);
        }}
      >
        Vélo de ville (500 Eur)
      </div>

      <div
        className={option1 === 700 ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setOption1(700);
        }}
      >
        Mountain Bike (700 Eur)
      </div>

      <span className="configTitle"> 2 - Choisis ta selle</span>
      <div
        className={option2 === 20 ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setOption2(20);
        }}
      >
        Classique (20 Euros)
      </div>
      <div
        className={option2 === 80 ? "selecteurYes" : "selecteurNo"}
        onClick={() => {
          setOption2(80);
        }}
      >
        Sur suspension (80 Euros)
      </div>

      <div className="configTitle">PRIX FINAL {option1 + option2} </div>
    </div>
  );
}

export default Configurator;
