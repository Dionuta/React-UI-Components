import React from 'react';
import './Button.css';

// You created this componet to make Action Buttons  each button can take props
const ActionButton = props => <button  onClick={props.handleClear} className={props.className} >{props.text}</button>;
                                        //on click clear screen look at action button in app.js for function 
                                        // under <ActionButton />
                   

export default ActionButton;