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
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}

export default withClass;