import React, { useState } from 'react';
import './TopPicks.css';
import topPick1 from './images/events/topPick1.jpg'; // Replace with the actual paths to your images
import topPick2 from './images/events/topPick2.jpg';
import topPick3 from './images/events/topPick3.jpg';

const topPicksData = [
  {
    id: 1,
    image: topPick1,
    title: 'Экскурсия в музей Виктории и Альберта с автором книги «Записки лондонского гида», Джерри Миллером.',
    description: 'Музей Виктории и Альберта V&A - это крупнейший в мире музей декоративного, прикладного и изобразительного искусства. В нём представлено всё, что ассоциируется со словами «стиль» и «образец»...',
  },
  {
    id: 2,
    image: topPick2,
    title: 'Загородная поездка в Hever Castle, некогда принадлежавший Анне Болейн с Ириной Кукота.',
    description: 'Cооруженный в XIV веке, этот замок стал известен как место, где прошли детские годы Анны Болейн - второй жены короля Генриха VIII и матери королевы Елизаветы I...',
  },
  {
    id: 3,
    image: topPick3,
    title: 'Экскурсия в Кентербери с экспертом в области архитектуры Дмитрием Беззубцевым.',
    description: 'В Кентербери расположен один из лучших готических соборов, грандиозный и немного странный, тот ради которого стоит ехать, даже если бы он стоял просто в чистом поле...',
  },
];

function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? topPicksData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === topPicksData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentPick = topPicksData[currentIndex];

  return (
    <div className="top-picks">
      <h2>Top Picks This Week</h2>
      <div className="top-pick-slider">
        <button className="nav-button" onClick={handlePrev}>
          Previous
        </button>
        <div className="top-pick-slide">
          <img src={currentPick.image} alt={currentPick.title} className="top-pick-image" />
          <div className="top-pick-details">
            <h3>{currentPick.title}</h3>
            <p>{currentPick.description}</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
        <button className="nav-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TopPicks;
