import React, { Component } from 'react'
import SignInPage from './SignIn';
import HomePage from './Home';
export default class ConditionalRendering extends Component {
        
    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn: true
        }
      }
    
      
  render() { 
    //    if (this.state.isLoggedIn) {
    //     return <HomePage />;
    //    }else{ 
    //     return <SignInPage />;
    //    }

    // return this.state.isLoggedIn? <HomePage /> : <SignInPage />
    return this.state.isLoggedIn && <HomePage />;
  }
}
