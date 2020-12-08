import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './auth/Auth';
import CalendarPage from './calendar/CalendarPage';
import store from '../store';
import Header from './header/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/calendar" component={CalendarPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
