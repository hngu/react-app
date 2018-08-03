import React from 'react'
import classes from './Person.css'

const Person = (props) => {
    return (
        <div className={classes['person']}>
            <div>
                <p>I'm {props.name} and I am {props.age} years old!</p>
                <p><input type="text" value={props.name} onChange={props.changeName} /></p>
                <p><button onClick={props.incrementAge}>Increment Age</button></p>
            </div>
            <div>{props.children}</div>
        </div>
    );
}

export default Person