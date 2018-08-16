import React from 'react'
import Person from './Person/Person'

// here no wrapping div: you can return arrays
// as a matter of fact you can do something like:
//return [
//    <p key="1">Hi</p>
//    <p key="2">World</p>
//]
const Persons = (props) => props.persons.map((person, index) => {
    return (
        <Person name={person.name}
            age={person.age}
            key={person.id}
            incrementAge={() => props.incrementAge(index)}
            changeName={(event) => props.changeName(index, event)}>
            {person.name === 'Amy' ? 'I like to ski!' : '' }
        </Person>
    )
})

export default Persons