import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
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
// import AddEvent from "./AddEvent";


function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <Header isHomePage={isHomePage} homeLogo={logoGC} />
      <Routes>
        <Route path="/" element={<FlagGrid />} />
        <Route path="/filtered-events/:country" element={<MainPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ourRules" element={<OurRules />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/annualEvents" element={<AnnualEvents />} />
        <Route path="/ourVacancies" element={<OurVacancies />} />
        {/* <Route path="/admin" element={<AddEvent />} /> */}

      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
