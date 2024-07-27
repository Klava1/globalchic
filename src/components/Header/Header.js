import { Link } from "react-router-dom";
import "./Header.css";
import logoBC from "../../images/logobc.jpg";
import logoGC from "../../images/logogc-nobg.png";
import PropTypes from "prop-types";
import { useHandleNavigation, useToggle } from "../../utils/utils";

function Header(props) {
  const { isOpen: isDropDownOpen, toggle: toggleDropDown } = useToggle();
  const { handleBackToGlobal } = useHandleNavigation();

  return (
    <header className="header">
      <div className="logo-container">
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
      </div>
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
        <div
          className="dropdown-membership"
          onMouseEnter={toggleDropDown}
          onMouseLeave={toggleDropDown}
        >
          <Link
            to="/membership"
            className="nav-link"
          >
            Memberships and Partnerships
          </Link>
          {isDropDownOpen && (
            <div className="dropdown-membership-menu">
              <Link
                to="/membership/option1"
                className="dropdown-membership-item"
              >
                General Membership
              </Link>
              <Link
                to="/membership/option2"
                className="dropdown-membership-item"
              >
                Member-Partner
              </Link>
              <Link
                to="/membership/option1"
                className="dropdown-membership-item"
              >
                Associate Members
              </Link>
              <Link
                to="/membership/option2"
                className="dropdown-membership-item"
              >
                Ads and Business Partners
              </Link>
              <Link
                to="/membership/option3"
                className="dropdown-membership-item"
              >
                Sponsorship
              </Link>
            </div>
          )}
        </div>

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
