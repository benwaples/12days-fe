import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Auth from './auth/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />

      </Switch>
    </Router>
  );
}

export default App;
