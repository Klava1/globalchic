import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section footer-info">
          <h3>
            <Link to="/aboutUs">Global Chic Info</Link>
          </h3>
          <p>Trusted since 2020</p>
          <Link
          to="/admin"
          className="admin-link"
        >
          Admin Log In
        </Link>
        </div>
        <div>
          <div className="footer-sections-right">
            <div className="footer-section">
              <h3>Events</h3>
              <ul>
                <li>
                  <Link to="/aboutUs">About BCEevents</Link>
                </li>
                <li>
                  <Link to="/ourRules">Our Rules</Link>
                </li>
                <li>
                  <Link to="/annualEvents">Annual Events</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Community</h3>
              <ul>
                <li>
                  <Link to="/ourVacancies">Our Vacancies</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a
          href="https://www.klava.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with love by Klava
        </a>
      </div>
    </footer>
  );
}

export default Footer;
