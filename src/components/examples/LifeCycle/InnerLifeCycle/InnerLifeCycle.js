import React, {Component} from 'react';

class InnerLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('InnerLifeCycle Component inside constructor');
    }

    render() {
        console.log('InnerLifeCycle Component inside render');
        return <div>Test</div>;
    }

    componentDidMount() {
        // here this will be called before the LifeCycle component's componentDidMount
        // because the parent will not call componentDidMount until its children are
        // mounted
        console.log('InnerLifeCycle Component inside componentDidMount');
    }
}

export default InnerLifeCycle;