import React, { Component } from 'react';

class HeroTitle extends Component {
  render() {
    return (
      <h1 className="hero__title">{this.props.title}</h1>
    );
  }
}

export default HeroTitle;
