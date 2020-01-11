import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux' 

import axios from 'axios'
class UsersContainer extends Component {
  constructor(props){
    super(props)
    //this.handler=this.handler(this);
  }
  handler=e=>{
    const data = new FormData();
   
    //var c=e.target.value.replace("C:\\fakepath\\", "");
    console.log(e.target.files[0])
    //console.log(e.target.files[0])
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
    const mystyle = {
      color: "Black",
      backgroundColor: "blue",
  
      padding: "10px",
      fontFamily: "Arial"
    };
    const mystyle1 = {
      bgcolor: "Black",
    };



  const number=this.props.match.url
  return (
    
 
    <div style={mystyle}>
    
      <button onClick={() => this.props.fetchUsers(number)}>DOWNLOAD PIC</button>
      <input type="file" onChange={this.handler}></input>
    
      <img src={(this.props.userData)} />
    </div>
    
  )
}
}

const mapStateToProps = state => {
  
  return {
    userData: state.users,
    
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: value1 => dispatch(fetchUsers(value1))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)