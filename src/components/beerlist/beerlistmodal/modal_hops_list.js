import React, { Component } from 'react';

const HopsList = (props) => {
  const ingredientsHops = props.hops;
  console.log(ingredientsHops);

  const ingredientsListHops = ingredientsHops.map((hops) => {
    return (
      <ul>
        <li>{hops.name} ({hops.attribute})</li>
        <ul>
          <li>{hops.add}</li>
          <li>{hops.amount.value}</li>
        </ul>
      </ul>
    )
  });


  return (
    <div>
      {ingredientsListHops}
    </div>
  )
}

export default HopsList;
