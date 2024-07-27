import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import AnnualEvents from "./components/AnnualEvents/AnnualEvents";
import ContactUs from "./components/ContactUs/ContactUs";
import FlagGrid from "./components/FlagGrid/FlagGrid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage";
import OurRules from "./components/OurRules/OurRules";
import OurVacancies from "./components/OurVacancies/OurVacancies";
import logoGC from "./images/logogc-nobg.png";
import BToB from "./components/BToB/BToB";
import Cart from "./components/Cart/Cart";
import { CountryProvider } from "./Context/CountryContext";
import ClubsAccordion from "./components/ClubsAccordion/ClubsAccordion";
import ChangeCountry from "./components/ChangeCountry/ChangeCountry";
// import AddEvent from "./AddEvent";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <Header
        isHomePage={isHomePage}
        homeLogo={logoGC}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <FlagGrid /> <BToB />
            </div>
          }
        />
        <Route
          path="/filtered-events/:country"
          element={
            <div>
              <MainPage /> <ChangeCountry />
              <ClubsAccordion />
            </div>
          }
        />
        <Route
          path="/aboutUs"
          element={<AboutUs />}
        />
        <Route
          path="/ourRules"
          element={<OurRules />}
        />
        <Route
          path="/contactUs"
          element={<ContactUs />}
        />
        <Route
          path="/annualEvents"
          element={<AnnualEvents />}
        />
        <Route
          path="/ourVacancies"
          element={<OurVacancies />}
        />
        <Route
          path="/checkOut"
          element={<Cart />}
        />
        {/* <Route path="/admin" element={<AddEvent />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CountryProvider>
      <Router>
        <AppContent />
      </Router>
    </CountryProvider>
  );
}

export default App;
