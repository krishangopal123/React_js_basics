import React,{Component} from 'react'
class commanforcounter extends Component{
    constructor(){
        super()
        this.state={count:0}
        this.myfunc=this.myfunc.bind(this);
        this.myfunc1=this.myfunc1.bind(this);
        this.inputRef = React.createRef();

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
                    
                </dev>
            )
       
    }
}


export default commanforcounter