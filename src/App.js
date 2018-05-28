import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Dashboard from './containers/Dashboard';


class App extends Component {
  render() {
    return (
      <Router >
        <div className="layout ">
          <Switch>
            <Route path="/dashboard/:job?/:view?/:id?" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
