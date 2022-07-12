import './App.css';

import { Component } from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      firstNum: 0,
      secondNum:0,
      operation: '+'
    }
  }
    render() {
        return <div>
        <input
         type="text"
        name='firstNum'
        value={this.state.firstNum}
        onChange={this.onFirstInputChange} />
        <select value={this.state.operation} onChange={this.onOperationChange}  name="operation">
          <option value="+" >+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input 
         type="text"
         name='secondNum'
         value={this.state.secondNum}
         onChange={this.onSecondInputChange}  />
      result: {this.calculate(this.state.firstNum,this.state.secondNum, this.state.operation)}
        </div>
    }
  
    onFirstInputChange=(e)=>{
    this.setState({firstNum: +e.target.value})
    }
    onSecondInputChange=(e)=>{
      this.setState({secondNum: +e.target.value})
    }
    onOperationChange=(e)=>{
        this.setState({operation: e.target.value})
      }

     calculate =(x, y, action)=> {
      if(!this.isValid(x) || !this.isValid(y)){
        return ''
      }
      
        switch (action) {
          case "+":
            return x + y;
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