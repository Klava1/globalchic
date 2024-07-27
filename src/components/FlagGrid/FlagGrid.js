import React from "react";
import { Link } from "react-router-dom";
import "./FlagGrid.css";
import uaeFlag from "../../images/flags/ae.png";
import austriaFlag from "../../images/flags/at.png";
import swissFlag from "../../images/flags/ch.png";
import cyprusFlag from "../../images/flags/cy.png";
import germanyFlag from "../../images/flags/de.png";
import spainFlag from "../../images/flags/es.png";
import franceFlag from "../../images/flags/fr.png";
import gbFlag from "../../images/flags/gb.png";
import israelFlag from "../../images/flags/il.png";
import italyFlag from "../../images/flags/it.png";
import lithuaniaFlag from "../../images/flags/lt.png";
import latviaFlag from "../../images/flags/lv.png";
import netherlandsFlag from "../../images/flags/nl.png";
import portugalFlag from "../../images/flags/pt.png";
import turkeyFlag from "../../images/flags/tr.png";
import usaFlag from "../../images/flags/us.png";
import { useCountry } from "../../Context/CountryContext";

const flags = [
  { src: franceFlag, country: "France", name: "France", index: 3 },
  { src: italyFlag, country: "Italy", name: "Italy", index: 2 },
  { src: spainFlag, country: "Spain", name: "Spain", index: 4 },
  { src: uaeFlag, country: "UAE", name: "UAE (Dubai)", index: 5 },
  { src: cyprusFlag, country: "Cyprus", name: "Cyprus", index: 11 },
  { src: israelFlag, country: "Israel", name: "Israel", index: 10 },
  { src: usaFlag, country: "USA", name: "USA", index: 6 },
  { src: germanyFlag, country: "Germany", name: "Germany", index: 7 },
  { src: latviaFlag, country: "Latvia", name: "Latvia", index: 12 },
  { src: lithuaniaFlag, country: "Lithuania", name: "Lithuania", index: 13 },
  { src: austriaFlag, country: "Austria", name: "Austria", index: 14 },
  {
    src: netherlandsFlag,
    country: "Netherlands",
    name: "Netherlands",
    index: 15,
  },
  { src: swissFlag, country: "Switzerland", name: "Switzerland", index: 8 },
  { src: gbFlag, country: "UK", name: "United Kingdom", index: 1 },
  { src: portugalFlag, country: "Portugal", name: "Portugal", index: 9 },
  { src: turkeyFlag, country: "Turkey", name: "Turkey", index: 16 },
];

function FlagGrid() {
  const sortedFlags = [...flags].sort((a, b) => a.index - b.index);
  const { setSelectedCountry } = useCountry();

  return (
    <div className="flag-grid">
      {sortedFlags.map((flag) => (
        <div
          key={flag.country}
          className="flag-item"
          onClick={() => setSelectedCountry(flag.country)}
        >
          <Link to={`/filtered-events/${flag.country}`}>
            <img
              src={flag.src}
              alt={`${flag.name} Flag`}
            />
            <p>{flag.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FlagGrid;
