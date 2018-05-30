import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="layout ">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard/:job?/:view?/:id?" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
