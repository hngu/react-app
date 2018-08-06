import React, { Component } from 'react'

/**
 * Only wrap components with this in cases where errors are likely to happen
 * and the error itself is outside of your control.
 */
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error) => {
        this.setState({hasError: true, errorMessage: error})
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary