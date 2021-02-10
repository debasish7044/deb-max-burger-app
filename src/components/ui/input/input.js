import React from 'react';
import classes from './input.css';

const Input = (props) => {
  let inputElement = null;

  let inputClasses = '';
  if (props.inValid && props.shouldValidate && props.touched) {
    inputClasses = classes.Invalid;
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          autoComplete='off'
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          autoComplete='off'
          onChange={props.changed}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select
          className={inputClasses}
          value={props.value}
          autoComplete='off'
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {' '}
                {option.displayValue}{' '}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          autoComplete='off'
          onChange={props.changed}
        />
      );
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
