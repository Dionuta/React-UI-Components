import React from 'react';
import './Button.css';


// You created this componet to make numbers button   
const NumberButton = (props) =>{
    return <button className={props.className}> {props.text}</button>  
}


export default NumberButton;