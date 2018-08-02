import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './components/examples/Person/Person'

class App extends Component {
  state = {
    people: [
      {name: 'James', age: 34, id: 1},
      {name: 'Amy', age: 40, id: 2}
    ],
    showPeople: false
  }

  togglePeopleHandler = () => {
    let showPeople = !this.state.showPeople
    this.setState({showPeople})
  }

  incrementAgeHandler = (index) => {
    const people = [...this.state.people]
    const person = {
        ...people[index]
    }
    person.age = person.age + 1
    people[index] = person
    this.setState({people})
  }

  changeNameHandler = (index, event) => {
    const people = [...this.state.people]
    const person = {
        ...people[index]
    }
    person.name = event.target.value
    people[index] = person
    this.setState({people})
  }

  render() {
    let people = null

    if (this.state.showPeople) {
        people = (
            <div>
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

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.togglePeopleHandler}>Toggle People</button>
        </header>
        {people}
      </div>
    );
  }
}

export default App
