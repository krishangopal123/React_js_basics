import React,{Component} from 'react'
class message extends Component{
    constructor(props){
        super(props)
        this.state={count:0}
        //count:0
    }
    changeMessage(){
        
       
        this.state.count=this.state.count+1;
        this.setState({count:this.state.count})
        console.log(this.count)
        
    }
    
    render(){
        return (
        <div>
            
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>


        )

    }
}
export default  message
