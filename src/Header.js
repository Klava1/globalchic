import { Link } from "react-router-dom";
import logoBC from "./images/logobc.jpg";
import './Header.css';

function Header({ isHomePage, homeLogo }) {
  return (
    <header className="header">
      <Link to="/filtered-events/:country" className="logo-link">
        <img src={isHomePage ? homeLogo : logoBC} className="logo" alt="logoBC" />
      </Link>
      <nav className="nav">
        <Link to="/aboutUs" className="nav-link">
          About Us
        </Link>
        <Link to="/ourRules" className="nav-link">
          Our Rules
        </Link>
        <Link to="/annualEvents" className="nav-link">
          Annual Events
        </Link>
        <Link to="/contactUs" className="nav-link">
          Contact Us
        </Link>
        <Link to="/checkOut" className="nav-link">
          Checkout
        </Link>
      </nav>
    </header>
  );
}

export default Header;
