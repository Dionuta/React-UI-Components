import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardBanner = () =>{
    return (
        <div className='card'>
          <img src='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png' alt='react symbol' />
          <CardContent />
        </div>
    )
} 
//export to CardContainer.js
export default CardBanner;