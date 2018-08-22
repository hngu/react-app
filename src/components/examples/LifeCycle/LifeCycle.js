import React, {Component} from 'react';
import InnerLifeCycle from './InnerLifeCycle/InnerLifeCycle';

// NOTE: react lifecycle events here always run
// however DOM manipulation is done when necessary

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        // here you setup state or do modern ES6 and set state
        // as property in this component shown below:
        console.log('LifeCycle Component inside constructor');
    }

    state = {
        list: ['1', '2', '3'],
        hide: false
    }

    forceStateUpdate = () => {
        this.setState((prevState/*, prevProps*/) => {
            return {
                list: [...prevState.list]
            };
        });
    }

    render() {
        console.log('LifeCycle Component inside render');
        let listElements;

        if (this.state.hide) {
            listElements = '';
        } else {
            listElements = this.state.list.map(item => <InnerLifeCycle text={item} key={item} />);
        }
        return (
            <div>
                <h1>Hello World!</h1>
                <button onClick={this.forceStateUpdate}>Random hide</button>
                {listElements}
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

    shouldComponentUpdate(nextProps, nextState) {
        // must return a boolean!
        // can be called when its state or props are updated
        console.log('[UPDATE] LifeCycle Component inside shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[UPDATE] LifeCycle Component inside componentDidUpdate');
    }
}

export default LifeCycle