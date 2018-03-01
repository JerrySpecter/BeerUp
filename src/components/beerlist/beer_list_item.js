import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BeerListModal from './beer_list_modal';
import BeerListItemData from './beerlistitem/beer_list_item_data';
import BeerListItemImg from './beerlistitem/beer_list_item_img';

class BeerListItem extends Component {
  constructor() {
      super();
      this.state = {
          itemFavorited: false
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({
          itemFavorited: !this.state.itemFavorited,
      });
      this.render()
  }


  render () {
    const emptyHeart = <img src={require('../../assets/images/beer-list/heart outline.png')} alt="heart" />;
    const fullHeart = <img src={require('../../assets/images/beer-list/heart solid.png')} alt="heart" />;
    const item =  <div className="col-3">
                    <div className="beer-card__wrapper">
                    <div className="beer-card" data-toggle="modal" data-target={'#modal' + this.props.beer.id}>
                    <BeerListItemImg src={this.props.beer.image_url} />
                    <BeerListItemData name={this.props.beer.name} ibu={this.props.beer.ibu} abv={this.props.beer.abv} />
                    </div>
                    <div className="favorites" onClick={this.handleClick}>{this.state.itemFavorited ? fullHeart : emptyHeart }</div>
                    </div>
                      <BeerListModal beer={this.props.beer} />
                  </div>;
    const item2 =  <h1 className="naslov">Naslov</h1>;

    return (
      <Switch>
        <Route exact path="/" render={()=>item} />
        <Route exact path="/favorites" render={()=> this.state.itemFavorited ? item : item2 } />
      </Switch>
    );
  }
}

export default BeerListItem;
