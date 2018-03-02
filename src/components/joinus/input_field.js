import React, { Component } from 'react';;

class InputField extends Component {
  render() {
    return (
        <div className="form-group">
          <input required type={this.props.type} className="form-control" id={this.props.id} aria-describedby="emailHelp"/>
          <label className="input-field-placeholder" htmlFor={this.props.id}>{this.props.placeholder}</label>
        </div>
    );
  }
}

export default InputField;
