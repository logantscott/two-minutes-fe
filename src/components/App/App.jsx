import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';
import Signup from '../auth/Signup';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <Signup />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}
