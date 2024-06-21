import React from "react";
import './FlagGrid.css';
import { Link } from "react-router-dom";
import uaeFlag from "./images/flags/ae.png";
import austriaFlag from "./images/flags/at.png";
import swissFlag from "./images/flags/ch.png";
import cyprusFlag from "./images/flags/cy.png";
import germanyFlag from "./images/flags/de.png";
import spainFlag from "./images/flags/es.png";
import franceFlag from "./images/flags/fr.png";
import gbFlag from "./images/flags/gb.png";
import israelFlag from "./images/flags/il.png";
import italyFlag from "./images/flags/it.png";
import lithuaniaFlag from "./images/flags/lt.png";
import latviaFlag from "./images/flags/lv.png";
import netherlandsFlag from "./images/flags/nl.png";
import portugalFlag from "./images/flags/pt.png";
import turkeyFlag from "./images/flags/tr.png";
import usaFlag from "./images/flags/us.png";

const flags = [
    { src: franceFlag, country: "France", name: "France" },
    { src: italyFlag, country: "Italy", name: "Italy" },
    { src: spainFlag, country: "Spain", name: "Spain" },
    { src: uaeFlag, country: "UAE", name: "UAE (Dubai)" },
    { src: cyprusFlag, country: "Cyprus", name: "Cyprus" },
    { src: israelFlag, country: "Israel", name: "Israel" },
    { src: usaFlag, country: "USA", name: "USA" },
    { src: germanyFlag, country: "Germany", name: "Germany" },
    { src: latviaFlag, country: "Latvia", name: "Latvia" },
    { src: lithuaniaFlag, country: "Lithuania", name: "Lithuania" },
    { src: austriaFlag, country: "Austria", name: "Austria" },
    { src: netherlandsFlag, country: "Netherlands", name: "Netherlands" },
    { src: swissFlag, country: "Switzerland", name: "Switzerland" },
    { src: gbFlag, country: "UK", name: "United Kingdom" },
    { src: portugalFlag, country: "Portugal", name: "Portugal" },
    { src: turkeyFlag, country: "Turkey", name: "Turkey" },
];

function FlagGrid() {
  return (
    <div className="flag-grid">
      {flags.map((flag) => (
        <div key={flag.country} className="flag-item">
          <Link to={`/filtered-events/${flag.country}`}>
            <img src={flag.src} alt={`${flag.name} Flag`} />
            <p>{flag.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}


export default FlagGrid;
