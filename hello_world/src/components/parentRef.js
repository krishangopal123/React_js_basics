import React, { Component } from 'react'
import Refn from './Refn'
export class parentRef extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
		//this.cbRef = null
		
	}

	
    myhandler=()=>{
        this.inputRef.current.focus();
        
    }
    


	render() {
		return (
			<div>
                
                <Refn ref={this.inputRef} />
                <button onClick={this.myhandler}>Click Kr na yar</button>
			</div>
		)
	}
}

export default parentRef