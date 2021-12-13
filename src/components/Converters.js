import { useState } from "react";

const Converters = () => {
  const [euros, setEuros] = useState("");
  const [dollars, setDollars] = useState("");

  return (
    <div>
      <div>Valeur en Euros</div>
      <input
        value={euros}
        placeholder="montant en euros"
        type="number"
        onChange={(e) => {
          setEuros(e.target.value); // affichage de la valeur en euros si on a tapé au clavier dans cet input
          setDollars((e.target.value * 1.2).toFixed(2)); // si on a tapé dans cet input, on va aussi controler l'affichage de la valeur en dollars
        }}
      />
      <div>Valeur en Dollars</div>
      <input
        value={dollars}
        placeholder="montant en dollars"
        type="number"
        onChange={(e) => {
          setDollars(e.target.value); // affichage de la valeur en dollars si on a tapé au clavier dans cet input
          setEuros((e.target.value / 1.2).toFixed(2)); // si on a tapé dans cet input,  on va aussi controler l'affichage de la valeur en dollars
        }}
      />
    </div>
  );
};
export default Converters;
