import React from 'react';

import classes from './buildControls.css';
import BuildControl from './buildControl/buildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <strong>
        {' '}
        <p>CurrentPrice: {props.price.toFixed(2)} </p>{' '}
      </strong>
      ;
      {controls.map((ctr) => {
        return (
          <BuildControl
            label={ctr.label}
            key={ctr.label}
            added={() => props.ingredientAdded(ctr.type)}
            remove={() => props.ingredientRemove(ctr.type)}
            disabled={props.disabled[ctr.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER BUTTON
      </button>
    </div>
  );
};

export default BuildControls;
