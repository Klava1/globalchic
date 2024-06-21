import mainBanner from "./images/main-banner.jpg";
import "./MainBanner.css";

function MainBanner() {
  return (
    <section className="main-banner">
      <img src={mainBanner} alt="Main banner" className="main-banner-image" />
      <div className="main-banner-text">
        <h1>Join us for amazing experience</h1>
        <p>Find your next adventure here</p>
      </div>
    </section>
  );
}

export default MainBanner;