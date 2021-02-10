import React from 'react';
import Burger from '../../burger/burger';
import Button from '../../ui/button/button';
import classes from './checkOutSummary.css';

const CheckOutSummary = (props) => {
  return (
    <div className={classes.CheckOutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked={props.checkOutCancel}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.checkOutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckOutSummary;
