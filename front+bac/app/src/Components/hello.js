import React, { Component } from 'react'
import axios from 'axios'
class hello extends Component{
    constructor(props){
        super(props);
        this.myfunc=this.myfunc.bind(this);
        this.state={message:"",image:"",src1:""}
        this.handler=this.handler.bind(this)
    }
    async myfunc(){
        const response=await fetch("http://localhost:8081/get/3")
        console.log(response)
        
        axios.get("http://localhost:8081/get/3")
        .then(response2 => {
            //console.log(response2)
            console.log(response2.config.url)
            //re
            this.setState({ src1: response2.config.url })

        })
        .catch(error => {
    console.log(error)
})

       
        
        const body=response.url
        console.log(body);
        
        this.setState({message:body})
        
    }
    handler=e=>{
        const data = new FormData();
        var c=e.target.value.replace("C:\\fakepath\\", "");
        console.log(e.target.files[0])
        data.append('file', e.target.files[0]);
        data.append('category',"large")
        const headers={
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "type": "formData",
            
        }

        axios
        .post('http://localhost:8081/upload', data,{
            headers: headers
          })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        


       
       
}

    
    render(){
        return(
            <React.Fragment>
            <button onClick={this.myfunc}>GETIMAGE</button>
            <br />
            <br />
            <br />
            <input type="file" id="file-id" onChange={this.handler} name="image" value={this.state.image}></input>

            <img src={this.state.src1} className="App-logo" ></img>
            </React.Fragment>

        )
    }
}
export default hello