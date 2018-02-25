import React, { Component } from 'react';
import HeroTitle from './hero_title';
import HeroText from './hero_text';
import HeroButton from './hero_button';

class HeroBanner extends Component {
  render() {
    return (
      <div className="jumbotron">
        <HeroTitle />
        <HeroText />
        <HeroButton />
      </div>
    );
  }
}

export default HeroBanner;
