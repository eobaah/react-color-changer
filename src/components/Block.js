import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockNewColor: this.props.color
    };
    this.clickToChangeColor = this.clickToChangeColor.bind(this);
  }

  clickToChangeColor() {
    this.setState({ blockNewColor: this.props.changeColor() });
  }

  render() {
    return (
      <div onClick={this.clickToChangeColor} className="block" style={{ backgroundColor: this.state.blockNewColor }} />
    );
  }
}

Block.propTypes = {
  color: PropTypes.string,
  changeColor: PropTypes.func
};
