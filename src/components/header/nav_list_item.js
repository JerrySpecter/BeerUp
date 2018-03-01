import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavListItem extends Component {
  render() {
    return (
      <li className="nav-item active">
        <Link className="nav-link" to={this.props.href}>{this.props.title}</Link>
      </li>
    );
  }
}

export default NavListItem;
