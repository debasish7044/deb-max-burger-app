import React from 'react';
import classes from './button.css';

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={`${classes.Button} ${classes[props.btnType]}`}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
