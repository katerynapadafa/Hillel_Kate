import React, { Component } from 'react'

export default class Clock extends Component {

    state={
        now:''
    }
  render() {
    return (
      <div>{this.state.now}</div>
    )
  }
  componentDidMount(){
   this.intervalId =setInterval(()=>{
        this.setState({
            now: String(new Date())
        })
    })
    
  }
  componentWillUnmount(){
   clearInterval(this.intervalId)
    
  }
}
