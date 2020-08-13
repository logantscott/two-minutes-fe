import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import Goals from '../goals/Goals';
import PrivateRoute from '../auth/PrivateRoute';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <Signup />
        <Login />
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/dashboard' component={Goals} />
        </Switch>
      </Router>
    </>
  );
}
