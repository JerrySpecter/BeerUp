import React, { Component } from 'react';

const MaltList = (props) => {
  const ingredientsMalt = props.malts;
  console.log(ingredientsMalt);

  const ingredientsListMalt = ingredientsMalt.map((malt) => {
    return (
      <ul>
        <li>{malt.name}</li>
        <ul>
          <li>{malt.amount.value}</li>
        </ul>
      </ul>
    )
  });


  return (
    <div>
      {ingredientsListMalt}
    </div>
  )
}

export default MaltList;
