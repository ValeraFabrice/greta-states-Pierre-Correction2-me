import { useState } from "react";

const InputsDemo = () => {
  // Nous allons controler la valeur de l'input dans un state
  const [password, setPassword] = useState("");

  // notez qu'à chaque fois qu'on tapera une lettre au clavier, comme un state est mis à jour, TOUT le component et son code est "rechargé" / "ré-évalué", ainsi, constatez que ce console.log est bien executé à chaque fois qu'on tape au clavier
  console.log("hello debut affichage component input");

  // On définit une fonction qui returne VRAI si un mot est plus long que 5
  const checkPassword = (word) => {
    if (word.length >= 5) {
      return true;
    } else {
      return false;
    }
  };

  // On récupère le résultat de l'appel de la fonction de controle avec notre password en entrée
  const passwordLongEnough = checkPassword(password);

  return (
    <div>
      <span>Entrez votre mot de passe</span>

      {/* Voici l'unique manière dont on utilise les inputs en REACT */}
      <input
        value={password} // C'est la valeur affichée dans l'input - elle est donc mise à jour à chaque fois que le state est modifié puisque la page entiere est "rechargée"
        placeholder="entrez un chiffre"
        onChange={(event) => {
          // on récupère la lettre tapée dans event.target.value
          console.log(event.target.value);
          setPassword(event.target.value); // mise à jour du state (notez qu'alors tout le component va etre rechargé)
        }}
      />

      {/* Utilisons une Ternaire pour afficher le message d'erreur SI le mot de passe est trop long */}
      {passwordLongEnough ? null : (
        <span style={{ color: "red" }}>Votre mot de passe est trop Court</span>
      )}
    </div>
  );
};
export default InputsDemo;
