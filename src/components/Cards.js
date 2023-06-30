import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>The Voice of the Lobster</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='photos/photo_2023-06-22_18-03-07.jpg'
              text='Tis the voice of the Lobster: I heard him declare'
              path='/services'
            />
            <CardItem
              src='photos/sirius/03.jpg'
              text='You have baked me too brown, I must sugar my hair.'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='photos/photo_2023-06-22_18-02-57.jpg'
              text='As a duck with its eyelids, so he with his nose'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='photos/photo_2023-06-22_18-02-58 (2).jpg'
              text='Trims his belt and his buttons'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='photos/sirius/01 (1).jpg'
              text='and turns out his toes.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
