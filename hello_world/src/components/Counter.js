import React,{Component} from 'react'
class Counter extends Component{
    constructor(){
        super()
        this.state={count:0}
        this.myfunc=this.myfunc.bind(this);
        this.myfunc1=this.myfunc1.bind(this)
    }
    myfunc=()=>{
        this.state.count=this.state.count+1;
        this.setState({count:this.state.count})
    }
    myfunc1=()=>{
        this.state.count=this.state.count-1;
        this.setState({count:this.state.count})
    }
    myfunc2=()=>{
        this.state.count=0;
        this.setState({count:this.state.count})
    }
    render(){
        
            return (
                <dev>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.myfunc}>Add</button>
                    <button onClick={this.myfunc1}>Sub</button>
                    <button onClick={this.myfunc2}>SetToZero</button>
                </dev>
            )
       
    }
}


export default Counter