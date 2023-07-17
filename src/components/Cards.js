import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Pdf from "../instruction.pdf";


function Cards() {
  function onResumeClick() {
    window.open(Pdf);
  }


  return (
    <div className='cards'>
      <h1>Want more information?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
	    <CardItem
              src='photos/boxcontents.jpg'
              text='Science Box Contents'
              path='/contents'
            />
            <CardItem
              src='photos/instructions.jpg'
              text='Instructions'
	      path='/instructions'
            />
 	    <CardItem
              src='photos/customers.jpeg'
              text='Customer Reviews'
              path='/reviews'
            />
	  </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
