import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainContainer from '../../containers/MainContainer';

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer}></Route>
      </Switch>
    </Router>
  );
}
