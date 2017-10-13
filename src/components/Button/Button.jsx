import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render(props) {
    return <button>{this.props.text}</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
