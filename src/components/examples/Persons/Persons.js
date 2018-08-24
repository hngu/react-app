import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        this.lastPersonInputRef = React.createRef();
    }

    componentDidMount() {
        this.lastPersonInputRef.current.focus();
    }

    render() {
        // here no wrapping div: you can return arrays
        // as a matter of fact you can do something like:
        //return [
        //    <p key="1">Hi</p>
        //    <p key="2">World</p>
        //]
        return this.props.persons.map((person, index) => {
            return (
                <Person name={person.name}
                    age={person.age}
                    key={person.id}
                    ref={this.lastPersonInputRef}
                    incrementAge={() => this.props.incrementAge(index)}
                    changeName={(event) => this.props.changeName(index, event)}>
                    {person.name === 'Amy' ? 'I like to ski!' : '' }
                </Person>
            );
        });
    }
}

export default Persons;