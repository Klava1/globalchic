import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logoBC from "../../images/logobc.jpg";
import logoGC from "../../images/logogc-nobg.png";

import PropTypes from "prop-types";

function Header(props) {
  const navigate = useNavigate();
  const handleBackToGlobal = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <Link
        to="/"
        className="logo-link"
      >
        <img
          src={logoGC}
          className="logoGC"
          alt="Global Chic Logo"
          onClick={handleBackToGlobal}
        />
      </Link>
      <Link
        to="/filtered-events/:country"
        className="logo-link"
      >
        <img
          src={logoBC}
          className="logoBC"
          alt="logoBC"
        />
      </Link>
      <nav className="nav">
        <Link
          to="/aboutUs"
          className="nav-link"
        >
          About Us
        </Link>
        <Link
          to="/ourRules"
          className="nav-link"
        >
          Our Rules
        </Link>
        <Link
          to="/membership"
          className="nav-link"
        >
          Membership
          {/* ADD DROPDOWN WITH THREE OPTIONS */}
        </Link>

        <Link
          to="/annualEvents"
          className="nav-link"
        >
          Annual Events
        </Link>
        <Link
          to="/contactUs"
          className="nav-link"
        >
          Contact Us
        </Link>
        <Link
          to="/checkOut"
          className="nav-link"
        >
          Checkout
        </Link>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
  homeLogo: PropTypes.string.isRequired,
};
