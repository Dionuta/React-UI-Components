import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import * as math from 'mathjs';


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      input: ''  //gives access to the display
    };
  }

  addToInput = val =>{
    this.setState({input: this.state.input + val }) //allows me to update the input
  }

  handelEqual = () => {
    this.setState({input:math.eval(this.state.input)})
  }
 
  render(){
  return (
    <div className= 'outerdiv'>
      <CalculatorDisplay input={this.state.input} ></CalculatorDisplay>
      <ActionButton handleClear={() => this.setState({ input: '' })} className='clear'text='clear' />
      <NumberButton handleClick={this.addToInput} className='symbol' text="/" />
      <NumberButton handleClick={this.addToInput} className='number' text="7" />
      <NumberButton handleClick={this.addToInput} className='number' text="8" />
      <NumberButton handleClick={this.addToInput} className='number' text="9" />
      <NumberButton handleClick={this.addToInput} className='symbol' text="*" />
      <NumberButton handleClick={this.addToInput} className='number' text="4" />
      <NumberButton handleClick={this.addToInput} className='number' text="5" />
      <NumberButton handleClick={this.addToInput} className='number' text="6" />
      <NumberButton handleClick={this.addToInput} className='symbol' text="-" />
      <NumberButton handleClick={this.addToInput} className='number' text="1" />
      <NumberButton handleClick={this.addToInput} className='number' text="2" />
      <NumberButton handleClick={this.addToInput} className='number' text="3" />
      <NumberButton handleClick={this.addToInput} className='symbol' text="+" />
      <NumberButton handleClick={this.addToInput} className='zero'text='0' />
      <NumberButton handleClick={() => this.handelEqual()} className='symbol' text="=" />
    </div>
  );
 };
}
export default App;
