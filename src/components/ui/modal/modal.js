import React, { Component } from 'react';
import classes from './modal.css';
import Backdrop from '../backdrop/backdrop';
import Aux from '../../../hoc/Auxilary/Auxilary';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  // componentWillUpdate() {
  //   console.log('model is getting updated');
  // }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-200vh)',
            opacity: this.props.show ? '1' : ' ',
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
