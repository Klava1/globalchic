import React from "react";
import BackToGlobal from "./BackToGlobal/BackToGlobal";
import FutureEvents from "./FutureEvents/FututreEvents";
import MainBanner from "./MainBanner/MainBanner";
import SpecialEvent from "./SpecialEvent/SpecialEvent";
import TopPicks from "./TopPicks/TopPicks";
import { data } from "../data.js";
import eventImage1 from "../images/events/whiteParty.jpg";
import AllCategories from "./Filter/AllCategories.js";
import Events from "./EventsComponents/Events.js";
import Cart from "./Cart/Cart.js";

function MainPage() {
  return (
    <div>
      <BackToGlobal />
      <MainBanner />
      <AllCategories />
      <Events />
      <Cart />
      <SpecialEvent
        title="Other Special Event"
        date="12.12.2024"
        description="Join us for another amazing event with great experiences and memories. Don't miss out!"
        price={70}
        image={eventImage1}
      />
      <TopPicks />
    </div>
  );
}

export default MainPage;
