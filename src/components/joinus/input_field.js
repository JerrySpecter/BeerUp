import React, { Component } from 'react';;

class InputField extends Component {
  render() {
    return (
        <div className="form-group">
          <input type={this.props.type} className="form-control" id={this.props.id} aria-describedby="emailHelp" placeholder={this.props.placeholder} />
        </div>
    );
  }
}

export default InputField;
