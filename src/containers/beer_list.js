import React, { Component } from 'react';
import BeerListItem from '../components/beerlist/beer_list_item';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class BeerList extends Component {
  render() {
    const beerListItems = this.props.beer.map((beer) => {
      return <BeerListItem key={beer.id} beer={beer} />
    });

    console.log(this);

    return (
      <div className="row beer-list">
          <Switch>
            <Route exact path="/" render={()=>beerListItems}/>
            <Route exact path="/favorites" render={()=>beerListItems}/>
          </Switch>
      </div>
    );
  }
}

export default BeerList;
