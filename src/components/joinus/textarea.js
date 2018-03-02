import React, { Component } from 'react';;

class Textarea extends Component {
  render() {
    return (
      <div className="form-group">
        <textarea required className="form-control" id={this.props.id} rows={this.props.rows}></textarea>
        <label className="input-field-placeholder" htmlFor={this.props.id}>{this.props.placeholder}</label>
      </div>
    );
  }
}

export default Textarea;
