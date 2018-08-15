import React, {Component} from 'react';

class InnerLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('InnerLifeCycle Component inside constructor');
    }

    render() {
        console.log('InnerLifeCycle Component inside render');
        return <div>{this.props.text}</div>;
    }

    componentDidMount() {
        // here this will be called before the LifeCycle component's componentDidMount
        // because the parent will not call componentDidMount until its children are
        // mounted
        console.log('InnerLifeCycle Component inside componentDidMount');
    }

    componentWillUnmount() {
        // use this to remove any javascript DOM library instance
        console.log('InnerLifeCycle Component inside componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // must return a boolean!
        // can be called when its state or props are updated
        console.log('[UPDATE] InnerLifeCycle Component inside shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[UPDATE] InnerLifeCycle Component inside componentDidUpdate');
    }
}

export default InnerLifeCycle;