import React, { Component } from 'react'
import StateLess from './StateLess'
import StateFull from './StateFull'

export default class LifeCycleA extends Component {

  componentDidMount() {
    console.log("LifeCycleA componentDidMount")
    
    fetch("https://660cf69d3a0766e85dbf0f53.mockapi.io/products")
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

    constructor(props) {
      super(props)
      this.state = {
        name: "Mohan"
      }
      console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
      console.log("LifeCycleA getDerivedStateFromProps")
      return state.name
    }

  render() {
    console.log("LifeCycleA render")
    return (
      <div>Class Component
        <h1>Hi my Name is {this.state.name}</h1>
        <StateLess/>
        <StateFull/>
      </div>
    )
  }

 
}
