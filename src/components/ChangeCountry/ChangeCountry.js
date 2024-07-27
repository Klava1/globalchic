import { useCountry } from "../../Context/CountryContext";
import { flags } from "../../utils/utils";
import "./ChangeCountry.css";

const ChangeCountry = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="change-country-container">
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="change-country-dropdown"
      >
        <option
          value=""
          disabled
        >
          CHANGE COUNTRY
        </option>
        {flags.map((flag) => (
          <option
            key={flag.country}
            value={flag.country}
          >
            {flag.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeCountry;
