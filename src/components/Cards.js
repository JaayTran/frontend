import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Our Popular Dishes!</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-seafood-party.jpg'
              path='/menu'
            />
            <CardItem
              src='images/img-food-2.jpg'
              path='/menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-oyster.jpg'
              path='/menu'
            />
            <CardItem
              src='images/robot.jpg'
              path='/menu'
            />
            <CardItem
              src='images/img-food-3.jpg'
              path='/menu'
            />
          </ul>
        </div>
      </div>
  );
}

export default Cards;