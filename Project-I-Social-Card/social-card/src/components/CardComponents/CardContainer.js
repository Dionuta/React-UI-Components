import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContainer = () => {
 return (
     <a  href="https://reactjs.org/" className='cardContainer' >
       <CardBanner />
     </a>
 )
}
//export to App.js
export default  CardContainer;