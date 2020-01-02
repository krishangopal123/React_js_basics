import React, { Component } from 'react'
import './App.css'
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


class App extends Component {
  render() {
    
    return (
      <div className="App">
      <ParentRef>kunal</ParentRef>
      <Greet name="kunal"></Greet>
        <Welcome name="jatin"></Welcome>
        <Message name="Ankit"></Message>
        <FunctionClick />
        <ParentComponent />
        <ListParent />
        <Forms />
        <Counter />
        
      </div>
    )
  }
}

export default App
