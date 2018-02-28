import React, { Component } from 'react';
import MaltList from './modal_malt_list'
import HopsList from './modal_hops_list'

class ModalBody extends Component {
  render() {
    return (
      <div className="modal-body">
        <div className="row">
          <div className="col-4">
            <img src={this.props.beer.image_url} alt={this.props.beer.name} />
          </div>
          <div className="col-8">
            <h2>{this.props.beer.name}</h2>
            <div className="stats">
              <span>{this.props.beer.ibu}</span>
              <span>{this.props.beer.abv}</span>
            </div>
            <p>{this.props.beer.description}</p>
            <div>
              <h3>{this.props.beer.ingredients.yeast}</h3>
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
