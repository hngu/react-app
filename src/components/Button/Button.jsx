import React, { Component } from 'react';

class Button extends Component {
  render(props) {
    return <button>{this.props.text}</button>;
  }
}

export default Button;
