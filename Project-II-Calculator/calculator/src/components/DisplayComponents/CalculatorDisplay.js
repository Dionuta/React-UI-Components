import React from 'react';
import './Display.css';


// The display should be able to take props from buttons
const CalculatrDisplay= (props) => <div className='display'> {props.value} </div>;
  


export default CalculatrDisplay;