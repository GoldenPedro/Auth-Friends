import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/friends' component={FriendsList}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
