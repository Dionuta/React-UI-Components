import React from 'react';
import './Button.css';

// You created this componet to make Action Buttons  each button can take props
const ActionButton = props => <button className={props.className}>{props.text}</button>;



export default ActionButton;