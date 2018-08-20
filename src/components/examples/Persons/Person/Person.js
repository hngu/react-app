import React from 'react';
import classes from './Person.css';
import Aux from '../../../../hoc/examples/Aux/Aux';
import withClass from '../../../../hoc/examples/withClass';

const Person = (props) => {
    return (
        <Aux>
            <div>
                <p>I'm {props.name} and I am {props.age} years old!</p>
                <p><input type="text" value={props.name} onChange={props.changeName} /></p>
                <p><button onClick={props.incrementAge}>Increment Age</button></p>
            </div>
            <div>{props.children}</div>
        </Aux>
    );
}

export default withClass(Person, classes['person']);