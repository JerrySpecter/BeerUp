import React, { Component } from 'react';

class BeerListItemData extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <div>
          <span>IBU</span>
          <span>{this.props.ibu}</span>
        </div>
        <div>
          <span>ABV</span>
          <span>{this.props.abv}</span>
        </div>
      </div>
    )
  }
}

export default BeerListItemData;
