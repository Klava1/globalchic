import React from 'react';
import SpecialEvent from './SpecialEvent';
import eventImage1 from './images/events/whiteParty.jpg'; 
import eventImage2 from './images/events/whiteParty.jpg'; 
import eventImage3 from './images/events/whiteParty.jpg';

function AnnualEvents() {
  return (
    <div>
      <SpecialEvent
        title="Special Event: White Party on a Boat"
        date="01.08.2024"
        description="Join us for an unforgettable evening aboard our luxurious boat for the exclusive White Party. Enjoy stunning views, gourmet food, and live music as we sail along the river. Dress code: All white. Tickets are limited, so make sure to reserve your spot!"
        price="£80/ticket"
        image={eventImage1}
      />
      <SpecialEvent
        title="Cultural Festival"
        date="15.09.2024"
        description="Experience the vibrant cultural diversity with traditional performances, delicious food, and unique handicrafts at the Cultural Festival."
        price="£50/ticket"
        image={eventImage2}
      />
      <SpecialEvent
        title="Music Concert"
        date="25.10.2024"
        description="Enjoy a night of spectacular performances by renowned artists at the annual Music Concert. A night to remember!"
        price="£60/ticket"
        image={eventImage3}
      />
    </div>
  );
}

export default AnnualEvents;

