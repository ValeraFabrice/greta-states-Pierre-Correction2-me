import "./Configurator.css";

function Configurator() {
  return (
    <div className="configCont">
      <span className="configTitle">CONFIGURE TON VELO</span>
      <span className="configTitle"> 1 - Choisis un modèle</span>

      <div className="">Vélo de ville (500 Eur)</div>
      <div className="">Mountain Bike (700 Eur)</div>

      <span className="configTitle"> 2 - Choisis ta selle</span>
      <div className="">Classique (20 Euros)</div>
      <div className="">Sur suspension (80 Euros)</div>
      <div className="configTitle">PRIX FINAL </div>
    </div>
  );
}

export default Configurator;
