import React, { Component } from 'react';

class BeerListItemImg extends Component {
  render() {
    return (
      <div className="beer-card__image">
        <img src={this.props.src} />
      </div>
    )
  }
}

export default BeerListItemImg;
