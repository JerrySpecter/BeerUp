import React, { Component } from 'react';

import NavLogo from './nav_logo'
import NavList from './nav_list'

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation__wrapper">
        <NavLogo />
        <NavList />
      </nav>
    );
  }
}

export default Navigation;
