import React, { Component } from 'react'
import './App.css'
import GoogleMapLoader from "react-google-maps-loader"
import Greet from './components/greet'
import Welcome from './components/welcome'
import Message from './components/message'
import FunctionClick from './components/FunctionClick'
import ParentComponent from './components/ParentComponent'
import ListParent from './components/listparent'
import Forms from './components/Forms'
import Counter from './components/Counter'
import Fragment from './components/Fragment'
import Refn from './components/Refn'
import ParentRef from './components/parentRef'
import Calculator from './components/calculator'


class App extends Component {
  constructor(){
    super()
    this.onClick=this.onClick.bind(this)
    this.state={result:" "}
  }
  onClick = button => {
    if(button === "="){
      this.calculate()
  }

  else if(button === "C"){
      this.reset()
  }
  else if(button === "CE"){
      this.backspace()
  }

  else {
      this.setState({
          result: this.state.result + button
      })
  }
}
calculate = () => {
  var checkResult = ''
  if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
  }

  else {
      checkResult = this.state.result
  }

  try {
      this.setState({
          // eslint-disable-next-line
          result: eval(checkResult)
      })
  } catch (e) {
      this.setState({
          result: "error"
      })

  }
};

reset = () => {
  this.setState({
      result: ""
  })
};

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};
  render() {
   
    
    return (
      <div className="App">
      <br />
      <br />
      <br />

      <Calculator onClick={this.onClick}/>
      <h1>{this.state.result}</h1>
      
        
      </div>
    )
  }
}

export default App
