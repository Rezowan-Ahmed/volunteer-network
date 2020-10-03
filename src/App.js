import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>Name: {loggedInUser.name}</h1>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
