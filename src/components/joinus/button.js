import React, { Component } from 'react';;

class Button extends Component {
  render() {
    return (
      <a type={this.props.type} className={this.props.className}>{this.props.label}</a>
    );
  }
}

export default Button;
