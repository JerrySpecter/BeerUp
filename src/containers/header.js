import React, { Component } from 'react';
import Navigation from '../components/header/nav';
import HeroBanner from '../components/header/hero_banner';


class Header extends Component {
  render() {
    return (
      <header>
        <Navigation />
        <HeroBanner />
      </header>
    );
  }
}

export default Header;
