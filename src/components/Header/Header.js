import { Link } from "react-router-dom";
import "./Header.css";
import logoBC from "../../images/logobc.jpg";
import PropTypes from "prop-types";

function Header(props) {
  const { isHomePage, homeLogo } = props;
  return (
    <header className="header">
      <Link
        to="/filtered-events/:country"
        className="logo-link"
      >
        <img
          src={isHomePage ? homeLogo : logoBC}
          className="logo"
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
