import React, {Component} from 'react'

const LifeCycle extends Component {
    constructor() {
        super(props)
        // here you setup state or do modern ES6 and set state
        // as property in this component shown below:
        console.log('LifeCycle Component constructor called');
    }

    state = {

    }

    render() {
        console.log('LifeCycle Component render called');
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }

    componentDidMount() {
        console.log('LifeCycle Component componentDidMount called');
    }
}

export default LifeCycle