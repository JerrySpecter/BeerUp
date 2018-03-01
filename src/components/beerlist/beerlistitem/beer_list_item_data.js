import React, { Component } from 'react';

class BeerListItemData extends Component {
  render() {
    return (
      <div className="beer-card__data">
        <h4 className="beer-card__data-title">{this.props.name}</h4>
        <div className="beer-card__data-stats">
          <span className="property">IBU</span>
          <span className="value">{this.props.ibu}</span>
        </div>
        <div className="beer-card__data-stats">
          <span className="property">ABV</span>
          <span className="value">{this.props.abv}</span>
        </div>
      </div>
    )
  }
}

export default BeerListItemData;
