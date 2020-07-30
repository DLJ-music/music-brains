import React from 'react';
import MainContainer from '../../containers/MainContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistReleaseContainer from '../../containers/ArtistReleaseContainer';


export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainContainer}/>
        {/* <Route path='/:name' component={MainContainer} /> */}
        <Route path='/:id' component={ArtistReleaseContainer} />
      </Switch>
    </Router>
  );
}
