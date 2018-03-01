import React, { Component } from 'react';

const HopsList = (props) => {
  const ingredientsHops = props.hops;

  const ingredientsListHops = ingredientsHops.map((hops) => {
    return (
      <ul>
        <li>{hops.name} ({hops.attribute})</li>
        <ul className="ingredients-lists__inner">
          <li>Add: <b>{hops.add}</b></li>
          <li>Value: <b>{hops.amount.value}</b></li>
        </ul>
      </ul>
    )
  });


  return (
    <div className="ingredients-lists__wrapper">
      <h3 className="ingredients-lists__title">Hops</h3>
      {ingredientsListHops}
    </div>
  )
}

export default HopsList;
