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

  incrementAgeHandler = (index) => {
    const people = [...this.state.people]
    people[index].age = people[index].age + 1
    this.setState({people})
  }

  changeNameHandler = (index, event) => {
    const people = [...this.state.people]
    people[index].name = event.target.value
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
        {this.state.people.map((person, index) => {
          return (
              <Person name={person.name}
                age={person.age}
                key={person.id}
                incrementAge={this.incrementAgeHandler.bind(this, index)}
                changeName={this.changeNameHandler.bind(this, index)}>
                {person.name === 'Amy' ? 'I like to ski!' : '' }
              </Person>
          );
        })}
      </div>
    );
  }
}

export default App
