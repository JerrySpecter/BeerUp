import React, { Component } from 'react';;

class Radio extends Component {
  render() {
    return (
      <div className="custom-control custom-radio">
        <input type={this.props.type} id={this.props.id} name={this.props.name} value={this.props.label} className="custom-control-input" />
        <label className="custom-control-label" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default Radio;
