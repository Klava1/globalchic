import React from "react";
import MainBanner from "./MainBanner";
import BackToGlobal from "./BackToGlobal";
import FutureEvents from "./FututreEvents";
import SpecialEvent from "./SpecialEvent";
import TopPicks from "./TopPicks";
import { data } from "./data.js";
import eventImage1 from './images/events/whiteParty.jpg'; // Replace with actual paths


function MainPage() {
  return (
    <div>
      <BackToGlobal />
      <MainBanner />
      <FutureEvents futureEvents={data} />
      <SpecialEvent
        title="Other Special Event"
        date="12.12.2024"
        description="Join us for another amazing event with great experiences and memories. Don't miss out!"
        price="£70/ticket"
        image={eventImage1}
      />
      <TopPicks />
    </div>
  );
}

export default MainPage;
