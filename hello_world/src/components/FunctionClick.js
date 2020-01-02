import React, { Component } from 'react'

class FunctionClick extends Component {
    constructor(){
        super()
        this.state={message:"Hello Kunal"}
        this.myEvent=this.myEvent.bind(this)
    }
    //const thisReference=this

    myEvent() {
        this.setState({message:"Hello Kunal Arora"})
        console.log("hello kunal")

        
    }

  render() {

    return (
        <dev>
        <h1>{this.state.message}</h1>
        <button onClick={this.myEvent}>ClickMe</button>
        </dev>
    )
  }
}

export default FunctionClick