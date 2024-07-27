import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./FlagGrid.css";
import { useCountry } from "../../Context/CountryContext";
import {
  flags,
  handleSetSelectedCountry,
  sortFlagsByIndex,
} from "../../utils/utils";
import { gsap } from "gsap";

function FlagGrid() {
  const sortedFlags = sortFlagsByIndex(flags);
  const { setSelectedCountry } = useCountry();
  const flagGridRef = useRef(null);

  useEffect(() => {
    if (flagGridRef.current) {
      const elements = flagGridRef.current.querySelectorAll(".flag-item");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <div
      className="flag-grid"
      ref={flagGridRef}
    >
      {sortedFlags.map((flag) => (
        <div
          key={flag.country}
          className="flag-item"
          onClick={() =>
            handleSetSelectedCountry(setSelectedCountry, flag.country)
          }
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
