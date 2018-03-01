import React, { Component } from 'react';

class NavLogo extends Component {
  render() {
    return (
      <div>
        <a className="navbar-brand" href="#">
          <img src={require('../../assets/images/header/logo/symbol.png')} alt="logo" />
          <img src={require('../../assets/images/header/logo/logo.png')} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    );
  }
}

export default NavLogo;
