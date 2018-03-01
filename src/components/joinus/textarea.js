import React, { Component } from 'react';;

class Textarea extends Component {
  render() {
    return (
      <div className="form-group">
        <textarea className="form-control" id={this.props.id} rows={this.props.rows} placeholder={this.props.placeholder}></textarea>
      </div>
    );
  }
}

export default Textarea;
