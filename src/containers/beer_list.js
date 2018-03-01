import React, { Component } from 'react';
import BeerListItem from '../components/beerlist/beer_list_item';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class BeerList extends Component {
  render() {
    const beerListItems = this.props.beer.map((beer) => {
      return <BeerListItem key={beer.id} beer={beer} />
    });

    const titleHome = <h2 className="beer-list__title">Beer</h2>
    const titleFavorited = <h2 className="beer-list__title">My Favorite Beers</h2>

    return (
      <div className="beer-list">
        <Switch>
          <Route exact path="/" render={()=>titleHome}/>
          <Route exact path="/favorites" render={()=>titleFavorited}/>
        </Switch>
        <div className="row">
            <Switch>
              <Route exact path="/" render={()=>beerListItems}/>
              <Route exact path="/favorites" render={()=>beerListItems}/>
            </Switch>
        </div>
      </div>
    );
  }
}

export default BeerList;
