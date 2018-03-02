import React, { Component } from 'react';
import MaltList from './modal_malt_list'
import HopsList from './modal_hops_list'

class ModalBody extends Component {
  render() {
    return (
      <div className="modal-body">
        <div className="modal__image">
          <img src={this.props.beer.image_url} alt={this.props.beer.name} />
        </div>
        <div className="modal__data">
          <h2 className="modal__data-title">{this.props.beer.name}</h2>
          <div className="modal__data-stats-wrapper">
            <div className="modal__data-stats">
              <span className="property">IBU</span>
              <span className="value">{this.props.beer.ibu}</span>
            </div>
            <div className="modal__data-stats">
              <span className="property">ABV</span>
              <span className="value">{this.props.beer.abv}</span>
            </div>
          </div>
          <p className="modal__data-description">{this.props.beer.description}</p>
          <div className="modal__data-ingredients">
            <h3 className="yeast">{this.props.beer.ingredients.yeast}</h3>
            <div className="ingredients-lists">
              <MaltList malts={this.props.beer.ingredients.malt} />
              <HopsList hops={this.props.beer.ingredients.hops} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalBody;
