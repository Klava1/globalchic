import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import FlagGrid from "./FlagGrid";
import MainPage from "./MainPage";
import AboutUs from "./AboutUs";
import OurRules from "./OurRules";
import ContactUs from "./ContactUs";
import AnnualEvents from "./AnnualEvents";
import OurVacancies from "./OurVacancies";
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
