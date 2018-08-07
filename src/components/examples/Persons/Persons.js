import React from 'react'
import Person from './Person/Person'

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