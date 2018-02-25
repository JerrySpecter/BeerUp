import React, { Component } from 'react';
import BeerListItem from '../components/beerlist/beer_list_item';

const BeerList = (props) => {

  const beerListItems = props.beer.map((beer) => {
    return <BeerListItem key={beer.id} beer={beer} />
  });

  return (

    <div className="col-9">
      <div className="row">
        {beerListItems}
      </div>
    </div>
  );
}

export default BeerList;
