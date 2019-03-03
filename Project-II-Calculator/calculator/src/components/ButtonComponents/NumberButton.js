import React from 'react';
import './Button.css';


// You created this componet to make numbers each button can take props
const NumberButton = (props) => <button className={props.className}> {props.text}</button>;


export default NumberButton;