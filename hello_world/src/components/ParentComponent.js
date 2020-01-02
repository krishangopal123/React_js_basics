import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor() {
    super()

    this.state = {
      parentName: 'OyoRooms'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(name) {
    alert(`Hello ${this.state.parentName} from ${name}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent