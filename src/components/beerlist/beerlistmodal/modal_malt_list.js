import React, { Component } from 'react';

const MaltList = (props) => {
  const ingredientsMalt = props.malts;

  const ingredientsListMalt = ingredientsMalt.map((malt) => {
    return (
      <ul key={malt.name}>
        <li>{malt.name}</li>
        <ul  className="ingredients-lists__inner">
          <li>Value: <b>{malt.amount.value}</b></li>
        </ul>
      </ul>
    )
  });


  return (
    <div className="ingredients-lists__wrapper">
      <h3 className="ingredients-lists__title">Malt</h3>
      {ingredientsListMalt}
    </div>
  )
}

export default MaltList;
