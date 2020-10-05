import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Register from './components/Register/Register';
import EventTasks from './components/EventTasks/EventTasks';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    name:'',
    email: '',
    message: '',
    date: '',
    description: '',
    image: '',
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register/:id'>
          <Register></Register>
        </Route>
        <Route path='/event'>
          <EventTasks></EventTasks>
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
