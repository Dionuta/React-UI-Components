import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';



class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      value: ''
    };
  }

  addToInput = val =>{
    this.setState({input: this.state.input + val })
  }
  render(){
  return (
    <div className= 'outerdiv'>
      <CalculatorDisplay input={this.state.input} ></CalculatorDisplay>
      <ActionButton className='clear'text='clear' />
      <NumberButton handelClick={this.addToInput} className='symbol' text="&divide;" />
      <NumberButton handelClick={this.addToInput} className='number' text="7" />
      <NumberButton handelClick={this.addToInput} className='number' text="8" />
      <NumberButton handelClick={this.addToInput} className='number' text="9" />
      <NumberButton handelClick={this.addToInput} className='symbol' text="&times;" />
      <NumberButton handelClick={this.addToInput} className='number' text="4" />
      <NumberButton handelClick={this.addToInput} className='number' text="5" />
      <NumberButton handelClick={this.addToInput} className='number' text="6" />
      <NumberButton handelClick={this.addToInput} className='symbol' text="-" />
      <NumberButton handelClick={this.addToInput} className='number' text="1" />
      <NumberButton handelClick={this.addToInput} className='number' text="2" />
      <NumberButton handelClick={this.addToInput} className='number' text="3" />
      <NumberButton handelClick={this.addToInput} className='symbol' text="+" />
      <ActionButton className='zero'text='0' />
      <NumberButton handelClick={this.addToInput} className='symbol' text="=" />
    </div>
  );
 };
}
export default App;
