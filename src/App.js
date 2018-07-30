import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './components/examples/Person/Person'

class App extends Component {
  state = {
    people: [
      {name: 'James', age: 34, id: 1},
      {name: 'Amy', age: 40, id: 2}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person />
        {this.state.people.map(person => {
          return (
              <Person {...person} key={person.id}>
                {person.name === 'Amy' ? 'I like to ski!' : '' }
              </Person>
          );
        })}
      </div>
    );
  }
}

export default App
