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
    const item =  <div className="col-3">
                    <a type="button" href="#" data-toggle="modal" data-target={'#modal' + this.props.beer.id}>
                      <BeerListItemImg src={this.props.beer.image_url} />
                      <BeerListItemData name={this.props.beer.name} ibu={this.props.beer.ibu} abv={this.props.beer.abv} />
                    </a>
                    <button className="btn btn-primary btn-sm favorites" href="#" role="button" onClick={this.handleClick}>{this.state.itemFavorited ? 'Remove From Favorites' : 'Add To Favorites' }</button>
                      <BeerListModal beer={this.props.beer} />
                  </div>;
    const item2 =  <h1 className="naslov">Naslov</h1>;

    // console.log('name: ' + this.props.beer.name + ', state: ' + this.state.itemFavorited)
    // console.log(this)
    return (
      <Switch>
        <Route exact path="/" render={()=>item} />
        <Route exact path="/favorites" render={()=> this.state.itemFavorited ? item : item2 } />
      </Switch>
    );
  }
}

export default BeerListItem;
