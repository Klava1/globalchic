import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export const useCountry = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
