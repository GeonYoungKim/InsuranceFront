import React, { Component } from 'react';
import './App.css';
import TabComponent from './components/common/MainTab';
import LoginComponent from './components/common/Header';


class App extends Component {
  render() {
    return (
          <div className="main-wrap">
              <LoginComponent />
              <TabComponent/>
          </div>
    );
  }
}

export default App;
