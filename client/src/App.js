import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/volunteers">
            <Dashboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
