import React, { Component } from 'react';;

class Checkbox extends Component {
  render() {
    return (
      <div className="custom-control custom-checkbox">
        <input type={this.props.type} className="custom-control-input" id={this.props.id} value={this.props.label} />
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
