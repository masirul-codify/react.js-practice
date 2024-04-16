import React, { Component } from 'react'

export default class EventHandelerClass extends Component {

constructor(props) {
  super(props)

  this.state = {
     changedValue : ''
  }
//   this.handleOnChange = this.handleOnChange.bind(this);
}


handleOnChange (e){
    this.setState({
        changedValue : e.target.value
    }, ()=>{
        console.log(this.state.changedValue)
    })
  }

  render() {
    return (
      <div className='text-center my-5'>
          <input type='text' onChange={this.handleOnChange.bind(this)} />
          <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
