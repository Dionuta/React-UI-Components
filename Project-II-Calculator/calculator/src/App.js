import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';




const App = () => {
  return (
    <div className= 'outerdiv'>
      <CalculatorDisplay />
      <ActionButton className='clear'text='Clear' />
      <NumberButton className='symbol' text="&divide;" />
      <NumberButton className='number' text="7" />
      <NumberButton className='number' text="8" />
      <NumberButton className='number' text="9" />
      <NumberButton className='symbol' text="&times;" />
      <NumberButton className='number' text="4" />
      <NumberButton className='number' text="5" />
      <NumberButton className='number' text="6" />
      <NumberButton className='symbol' text="-" />
      <NumberButton className='number' text="1" />
      <NumberButton className='number' text="2" />
      <NumberButton className='number' text="3" />
      <NumberButton className='symbol' text="+" />
      <ActionButton className='zero'text='0' />
      <NumberButton className='symbol' text="=" />
    </div>
  );
};

export default App;
