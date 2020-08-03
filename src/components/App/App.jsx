import React from 'react';
import MainContainer from '../../containers/MainContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistReleaseContainer from '../../containers/ArtistReleaseContainer';
import RecordingsContainer from '../../containers/RecordingsContainer';
import LyricsContainer from '../../containers/LyricsContainer';


export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/lyrics/:name/:title' component={LyricsContainer} />
        <Route path='/artist/:id/:name' component={ArtistReleaseContainer} />
        <Route path='/release/:id/:name' component= {RecordingsContainer} />
      </Switch>
    </Router>
  );
}
