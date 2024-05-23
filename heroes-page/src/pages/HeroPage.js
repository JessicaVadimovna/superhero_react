// src/pages/HeroPage.js

import React from 'react';
import HeroCard from '../components/HeroCard';

const heroes = [
  {
    name: 'Женщина Кошка',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrZrqCrJ96pgZ-zUbCjyEZRW1PgSlD5gSjNSw10jecA&s',
    stats: {
      Strength: 7,
      Agility: 10,
      Intelligence: 9,
    },
    description: 'Описание супергероя №1',
  },
  {
    name: 'Бэтмен',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSLW1YCRByO0qtPRhBtAl4Ip_8LSrSVesUMkn0uv-rQ&s',
    stats: {
      Strength: 7,
      Agility: 10,
      Intelligence: 9,
    },
    description: 'Описание супергероя №2',
  },
  // Добавьте больше героев по необходимости
];

const HeroPage = () => {
  return (
    <div className="hero-page">
      {heroes.map((hero, index) => (
        <HeroCard key={index} hero={hero} />
      ))}
    </div>
  );
};

export default HeroPage;
