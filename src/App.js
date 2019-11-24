import React from 'react';
import { LandingPage } from './LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { ProtectedRoute } from './ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>PROTECTED REACT ROUTE</h1>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <ProtectedRoute path="/app" exact component={AppLayout} />
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
