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

  incrementAgeHandler = (name) => {
    const {people} = this.state
    const found = people.find(person => person.name === name)

    if (!found) {
        return
    }

    found.age = found.age + 1
    this.setState({people})
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
              <Person name={person.name}
                age={person.age}
                key={person.id}
                incrementAge={this.incrementAgeHandler.bind(this, person.name)}>
                {person.name === 'Amy' ? 'I like to ski!' : '' }
              </Person>
          );
        })}
      </div>
    );
  }
}

export default App
