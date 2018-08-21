import React, { Component } from 'react';

// below is an example of using stateless HOC
//const withClass = (WrappedComponent, className) => {
//    return (props) => (
//        <div className={className}>
//            <WrappedComponent {...props} />
//        </div>
//    );
//}

// below is an example of using stateful HOC
const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
}

export default withClass;