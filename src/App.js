import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './components/examples/Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person />
        <Person name="John" age="25" />
        <Person name="Jane" age="25">I like to ski!</Person>
      </div>
    );
  }
}

export default App
