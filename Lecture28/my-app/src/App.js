import './App.css';

import Clock from './Clock';
import { Component } from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      firstNum: 0,
      secondNum:0,
      operation: '+',
      showClock: true
    }
  }
    render() {
        return <div>
          <button
             name="showClock" 
             onClick={this.onBtnClick}>
           Clock </button>
          {this.state.showClock && <Clock/>}
        <input
         type="text"
        name='firstNum'
        value={this.state.firstNum}
        onChange={this.onFieldChange} />
        <select 
        value={this.state.operation} 
        onChange={this.onFieldChange}  
        name="operation">
          <option value="+" >+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input 
         type="text"
         name='secondNum'
         value={this.state.secondNum}
         onChange={this.onFieldChange}  />
      result: {this.calculate(this.state.firstNum,this.state.secondNum, this.state.operation)}
        </div>
    }
  
    onFieldChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
    }
  
    onBtnClick=()=>{
      this.setState({showClock: !this.state.showClock})
      }

     calculate =(x, y, action)=> {
      if(!this.isValid(x) || !this.isValid(y)){
        return ''
      }
      
        switch (action) {
          case "+":
            return +x + +y;
          case "-":
            return x - y;
          case "/":
            return x / y;
          case "*":
            return x * y;
          default:
            return null;
        }
      }
      
      isValid=(num)=>{
return !isNaN(num)
      }
}