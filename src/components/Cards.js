import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What is it about?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/medical-laboratory.png'
              text='Science Box Contents'
              path='/services'
            />
            <CardItem
              src='images/instructions.png'
              text='Instructions'
              path='/services'
            />
	    <CardItem
              src='images/group.png'
              text='Customer Reviews'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
