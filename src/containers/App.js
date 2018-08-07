import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import classes from './App.css'
import Persons from '../components/examples/Persons/Persons'

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
            <Persons persons={this.state.people}
                incrementAge={this.incrementAgeHandler}
                changeName={this.changeNameHandler} />
        );
    }

    return (
      <div className={classes['App']}>
        <header className={classes['App-header']}>
          <img src={logo} className={classes['App-logo']} alt="logo" />
          <h1 className={classes['App-title']}>Welcome to React</h1>
          <button onClick={this.togglePeopleHandler}>Toggle People</button>
        </header>
        {people}
      </div>
    );
  }
}

export default App
