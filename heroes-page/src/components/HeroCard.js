// src/components/HeroCard.js

import React from 'react';
import './HeroCard.css';

const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <img src={hero.image} alt={`${hero.name}`} className="hero-image" />
      <h2 className="hero-name">{hero.name}</h2>
      <ul className="hero-stats">
        {Object.entries(hero.stats).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
      <p className="hero-description">{hero.description}</p>
    </div>
  );
};

export default HeroCard;
