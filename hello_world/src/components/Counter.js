import React,{Component} from 'react'
import Comman from './commanforcounter'
class Counter extends Component{
    constructor(){
        super()
        this.state={count:0}
        this.myfunc=this.myfunc.bind(this);
        this.myfunc1=this.myfunc1.bind(this);
        this.inputRef = React.createRef();
    }
    myfunc=()=>{
        this.inputRef.current.myfunc();
    }
    myfunc1=()=>{
        this.inputRef.current.myfunc1();
    }
    myfunc2=()=>{
        this.inputRef.current.myfunc2();
    }
    render(){
        
            return (
                <dev>
                    
                    <Comman ref={this.inputRef } /> 
                    <button onClick={this.myfunc}>Add</button>
                    <button onClick={this.myfunc1}>Sub</button>
                    <button onClick={this.myfunc2}>SetToZero</button>
                </dev>
            )
       
    }
}


export default Counter