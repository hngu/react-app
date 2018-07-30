import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>
                I'm {props.name} and I am {props.age} years old!
                <button onClick={props.incrementAge}>Increment Age</button>
            </p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person