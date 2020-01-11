import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './BottlesType'
import axios from 'axios'


export const fetchUsers=value=>{
   
return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('http://localhost:8081'+value)
      .then(response => {
        const users = response.config.url
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {

        dispatch(fetchUsersFailure(error.message))
      })
  }
}


export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }

}
export const fetchUsersSuccess=user=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:user
    }
}
export const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}