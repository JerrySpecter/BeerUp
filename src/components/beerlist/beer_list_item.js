import React, { Component } from 'react';
import BeerListModal from './beer_list_modal';
import BeerListItemData from './beerlistitem/beer_list_item_data';
import BeerListItemImg from './beerlistitem/beer_list_item_img';

class BeerListItem extends Component {
  render () {
    return (
      <div className="col-3">
        <a type="button" href="#" data-toggle="modal" data-target={'#modal' + this.props.beer.id}>
          <BeerListItemImg src={this.props.beer.image_url} />
          <BeerListItemData name={this.props.beer.name} ibu={this.props.beer.ibu} abv={this.props.beer.abv} />
        </a>
          <BeerListModal beer={this.props.beer} />
      </div>
    );
  }
}

export default BeerListItem;
