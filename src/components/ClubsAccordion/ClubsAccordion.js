import { useState } from "react";
import { useCountry } from "../../Context/CountryContext";
import dataClubs from "../../dataClubs";
import "./ClubsAccordion.css";

const ClubsAccordion = () => {
  const { selectedCountry } = useCountry();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const countryClubs = dataClubs[selectedCountry];
  if (!countryClubs) {
    return <div>No clubs available for the selected country.</div>;
  }

  return (
    <div>
      <div className="accordion-name">
        Global Chic Clubs in {selectedCountry}
      </div>
      <div className="accordion">
        {Object.keys(countryClubs).map((club, index) => (
          <div
            key={club}
            className="accordion-item"
          >
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              <h3>{club}</h3>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>
                  <strong>Book/Movie/Event:</strong>{" "}
                  {countryClubs[club].book ||
                    countryClubs[club].movie ||
                    countryClubs[club].game ||
                    countryClubs[club].event ||
                    countryClubs[club].trail ||
                    countryClubs[club].route ||
                    countryClubs[club].exhibit ||
                    countryClubs[club].topic ||
                    countryClubs[club].activity}
                </p>
                <p>
                  <strong>Next Meeting:</strong> {countryClubs[club].place}
                </p>
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href={countryClubs[club].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {countryClubs[club].link}
                  </a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubsAccordion;
