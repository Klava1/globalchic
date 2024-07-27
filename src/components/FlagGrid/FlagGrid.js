import React from "react";
import { Link } from "react-router-dom";
import "./FlagGrid.css";
import { useCountry } from "../../Context/CountryContext";
import {
  flags,
  handleSetSelectedCountry,
  sortFlagsByIndex,
} from "../../utils/utils";

function FlagGrid() {
  const sortedFlags = sortFlagsByIndex(flags);
  const { setSelectedCountry } = useCountry();

  return (
    <div className="flag-grid">
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
