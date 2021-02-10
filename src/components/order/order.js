import React from 'react';
import classes from './order.css';

const Order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          display: 'inline-block',
          border: '1px solid #ccc',
          padding: '0.4rem 0.8rem',
          textTransform: 'capitalize',
          marginRight: '0.5rem',
        }}
        key={ig.name}
      >
        {' '}
        {ig.name} {ig.amount}{' '}
      </span>
    );
  });

  console.log(props.price);

  return (
    <div className={classes.OrderAlign}>
      <div className={classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>
          Price: <strong>USD {props.price}</strong>
        </p>
      </div>
    </div>
  );
};

export default Order;
