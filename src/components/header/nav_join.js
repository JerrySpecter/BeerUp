import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavJoin extends Component {
  render() {
    return (
      <li className="nav-item active">
        <Link className="btn btn--secondary btn--sm" to={this.props.href}>{this.props.title}</Link>
      </li>
    );
  }
}

export default NavJoin;
