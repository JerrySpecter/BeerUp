import React, { Component } from 'react';

class BeerListItemImg extends Component {
  render() {
    return (
      <img src={this.props.src} />
    )
  }
}

export default BeerListItemImg;
