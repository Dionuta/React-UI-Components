import React from 'react';
import './Button.css';


// You created this componet to make numbers each button can take props
const NumberButton = (props) => <button className={props.className} onClick={() =>props.handelClick(props.text)}> {props.text}</button>  
                                                                    //once clicked the button text is sent to display

export default NumberButton;

