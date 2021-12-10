import "./Selecteurs.css";
import { useState } from "react";
import Chiot1 from "../assets/chiot1.jpg";
import Chiot2 from "../assets/chiot2.jpg";
import Chiot3 from "../assets/chiot3.jpg";

const Selecteurs = () => {
  // Les states sont une valeur qui varie dans React
  // On ne peut pas leur affecter directement, il faut utiliser une fonction "seter"
  // selectedSq = 5  PAS LE DROIT
  // setSelectedSq(5) OBLIGE DE PASSER PAR le SETER

  // Création d'un state et son setter initialisé à zéro pour le selecteur triple
  const [selectedSq, setSelectedSq] = useState(0);
  // Création d'un state et son setter initialisé à zéro pour le selecteur de chiots
  const [dogSelector, setDogSelector] = useState(0);

  // rappel sur les ternaires, c'est un raccourcis pour un if -- else
  // conditionRemplie ? valeurSiOui : valeurSiNon

  return (
    <div>
      {/* # # # ## # # # # # # # # # SELECTEUR TRIPLE ## # # # # # # # # # # # #  */}
      {/*  Technique utilisée : ternaire pour activation d'une classe ou d'une autre */}

      <div className="selecteurContainer">
        <div
          className={selectedSq === 1 ? "squareGreen" : "squareOrange"}
          onClick={() => {
            // selectedSq = 1 ON A PAS LE DROIT
            setSelectedSq(1);
          }}
          onMouseLeave={() => {
            console.log("MOUSE LEAVE");
          }}
        ></div>
        <div
          className={selectedSq === 2 ? "squareGreen" : "squareOrange"}
          onClick={() => {
            setSelectedSq(2);
          }}
        ></div>
        <div
          className={selectedSq === 3 ? "squareGreen" : "squareOrange"}
          onClick={() => {
            setSelectedSq(3);
          }}
        ></div>
      </div>

      {/* # # # ## # # # # # # # # # SELECTEUR AVEC LES CHIENS ## # # # # # # # # # # # #  */}
      {/*  Technique utilisée : ternaire pour affichage d'une div ou d'une autre */}

      <div className="selecteurContainer">
        <div
          style={{ border: "solid 3px purple" }}
          onClick={() => {
            setDogSelector(1);
          }}
        >
          {/* DIV QUI ENTOURE l'IMAGE ET CERCLE ORANGE */}
          {dogSelector === 1 ? (
            <div
              className="imageContainer"
              // onMouseLeave, evenement similaire à onClick qui se déclenche lorsque la souris sort du container
              onMouseLeave={() => {
                setDogSelector(0);
              }}
            >
              <img className="imageChien" src={Chiot1} />
            </div>
          ) : (
            <div className="orangeCircle"></div>
          )}
        </div>

        <div
          style={{ border: "solid 3px purple" }}
          onClick={() => {
            setDogSelector(2);
          }}
        >
          {/* DIV QUI ENTOURE l'IMAGE ET CERCLE ORANGE */}

          {dogSelector === 2 ? (
            <div className="imageContainer">
              <img className="imageChien" src={Chiot2} />
            </div>
          ) : (
            <div className="orangeCircle"></div>
          )}
        </div>

        <div
          style={{ border: "solid 3px purple" }}
          onClick={() => {
            setDogSelector(3);
          }}
        >
          {/* DIV QUI ENTOURE l'IMAGE ET CERCLE ORANGE */}
          {dogSelector === 3 ? (
            <div className="imageContainer">
              <img className="imageChien" src={Chiot3} />
            </div>
          ) : (
            <div className="orangeCircle"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selecteurs;
