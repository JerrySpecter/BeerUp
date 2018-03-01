import React, { Component } from 'react';;

class Checkbox extends Component {
  render() {
    return (
      <div className="custom-control custom-checkbox">
        <input type={this.props.type} className="custom-control-input" id={this.props.id} />
        <label className="custom-control-label" for={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
