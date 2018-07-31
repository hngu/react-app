import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        <div className="person">
            <p>
                I'm {props.name} and I am {props.age} years old!
                <button onClick={props.incrementAge}>Increment Age</button>
            </p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person