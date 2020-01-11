import React from 'react';
import logo from './logo.svg';
import UserContainer from './Components/UserContainer'
import store from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import './index'
function App () {
  return (
    <Provider store={store}>
      <div className='App'>
       
        
        <Router>
          <div>
      <Route exact path='/' component={UserContainer} />
       
       <Route exact path="/get/:id" component={UserContainer}/>
       </div>
   </Router>
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  )
}

export default App
