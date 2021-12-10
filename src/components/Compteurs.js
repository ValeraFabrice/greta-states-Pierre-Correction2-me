import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [compteur, setCompteur] = useState(1);
  const [compteur2, setCompteur2] = useState(1);

  return (
    <div className="bgdCompteurs">
      <div className="compteurContainer">
        <span>COMPTEUR 1 ====> </span>

        {compteur < 9 && compteur + compteur2 < 15 ? (
          <button
            onClick={() => {
              setCompteur(compteur + 1);
            }}
          >
            +
          </button>
        ) : null}

        <span> {compteur} </span>

        {compteur > 0 ? (
          <button
            onClick={() => {
              setCompteur(compteur - 1);
            }}
          >
            -
          </button>
        ) : // comment
        null}
      </div>
      <div className="compteurContainer">
        <span>COMPTEUR 2 ====> </span>

        {compteur2 < 9 && compteur2 + compteur < 15 ? (
          <button
            onClick={() => {
              setCompteur2(compteur2 + 1);
            }}
          >
            +
          </button>
        ) : null}

        <span> {compteur2} </span>

        {compteur2 > 0 && (
          <button
            onClick={() => {
              setCompteur2(compteur2 - 1);
            }}
          >
            -
          </button>
        )}
      </div>
      <div className="compteurContainer">
        <span>TOTAL =====> </span>
        <span> {compteur + compteur2} </span>
      </div>
    </div>
  );
};

export default Compteurs;
