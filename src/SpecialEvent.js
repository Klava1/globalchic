import React from 'react';
import './SpecialEvent.css';

function SpecialEvent({ title, date, description, price, image }) {
  return (
    <div className="special-event">
      <h2>{title}</h2>
      <div className="special-event-content">
        <div className="special-event-details">
          <p className="event-date">Date: {date}</p>
          <p className="event-description">{description}</p>
          <p className="event-price">Starting from {price}</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
        <img src={image} alt={title} className="special-event-image" />
      </div>
    </div>
  );
}

export default SpecialEvent;
