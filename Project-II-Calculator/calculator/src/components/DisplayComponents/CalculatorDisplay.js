import React from 'react';
import './Display.css';


// The display should be able to take props from buttons
const CalculatrDisplay= (props) => <div className='display' > {props.input} </div>;
  


export default CalculatrDisplay;