import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './auth/Auth';
import CalendarPage from './calendar/CalendarPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/calendar" component={CalendarPage} />
      </Switch>
    </Router>
  );
}

export default App;
