import React, { Component } from 'react'

export default class State extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      count : 0,
   }
 }
 
 handleIncrement = () => {
    this.setState({
        count : this.state.count + 1
    })
 }

 handleDecrement = () => {
    this.setState({
        count: this.state.count - 1
    })
 }

  render() {
    const {count} = this.state
    return (
      <div className='p-5 mx-auto text-center'>
        <div>
            <h1 className='ms-1'> Count: {count} </h1>
            <div className='mt-4'>
                <button className='me-5' onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        </div>
      </div>
    )
  }
}
