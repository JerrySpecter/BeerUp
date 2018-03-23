import React, { Component } from 'react';

class NavLogo extends Component {
  render() {
    return (
      <div className="brand-wrapper">
        <a className="navbar-brand" href="/">
          <img src={require('../../assets/images/header/logo/symbol.png')} alt="logo" />
          <img src={require('../../assets/images/header/logo/logo.png')} alt="logo" />
        </a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <div className="menu-icon-wrapper">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </button>
      </div>
    );
  }
}

export default NavLogo;
