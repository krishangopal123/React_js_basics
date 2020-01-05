import React, { Component } from 'react'
class Refn extends Component{
	constructor(props){
		super(props)
		this.inputRef = React.createRef()
	}
	myfunc(){
		this.inputRef.current.focus()
	}
	render(){
		return (
			<input type="text" ref={this.inputRef} />
		)
	}
}
/*const Refn = React.forwardRef((props, ref) => {
	function(){
		this.
	}
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})*/
export default Refn