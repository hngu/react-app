import React, {Component} from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        // here you setup state or do modern ES6 and set state
        // as property in this component shown below:
        console.log('LifeCycle Component inside constructor');
    }

    state = {

    }

    render() {
        console.log('LifeCycle Component inside render');
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }

    componentDidMount() {
        // use this to initialize a javascript DOM library instance
        console.log('LifeCycle Component inside componentDidMount');
    }

    componentWillUnmount() {
        // use this to remove any javascript DOM library instance
        console.log('LifeCycle Component inside componentWillUnmount');
    }
}

export default LifeCycle