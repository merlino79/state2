import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'ciao mondo',
      }
    }

    changeMessage(){
      this.setState({ message: 'grazie per aver cliccato' })
    }
    
  render() {
    return (
        <>
            <div>{this.state.message}</div>
            <button onClick={()=>this.changeMessage()}>click</button>
        </>
    )
  }
}
