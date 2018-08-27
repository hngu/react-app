import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../../hoc/examples/Aux/Aux';
import withClass from '../../../../hoc/examples/withClass';
import AuthContext from '../../../../contexts/AuthContext';

class Person extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    focus() {
        this.input.current.focus();
    }

    render() {
        return (
            <Aux>
                <div>
                    <AuthContext.Consumer>
                        {auth => auth ? <p>I'm authenticated!</p> : null}
                    </AuthContext.Consumer>
                    <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>
                        <input ref={this.input}
                               type="text"
                               value={this.props.name}
                               onChange={this.props.changeName} />
                    </p>
                    <p><button onClick={this.props.incrementAge}>Increment Age</button></p>
                </div>
                <div>{this.props.children}</div>
            </Aux>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func,
    incrementAge: PropTypes.func
};

export default withClass(Person, classes['person']);