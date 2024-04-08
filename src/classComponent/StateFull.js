import React, { Component } from 'react'

export default class StateFull extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    incrementCount = () => {
        this.setState({count : this.state.count + 1})
    }

  render() {
    return (
      <div>StateFull - Class Component
        <p>count : {this.state.count}</p>
        <button onClick={this.incrementCount} >Increment Count</button>
      </div>
    )
  }
}
