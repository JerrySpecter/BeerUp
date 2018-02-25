import React, { Component } from 'react';

const BeerListItem = (props) => {
  const beer = props.beer;
  const beerName = beer.name;
  const beerImg = beer.image_url;
  const beerIbu = beer.ibu;
  const beerAbv = beer.abv;
  console.log(beer);

  return (
    <div className="col-3">
      <img src={beerImg} />
      <div>
        <h4>{beerName}</h4>
        <div>
          <span>IBU</span>
          <span>{beerIbu}</span>
        </div>
        <div>
          <span>ABV</span>
          <span>{beerAbv}</span>
        </div>
      </div>
    </div>
  );
}

export default BeerListItem;
