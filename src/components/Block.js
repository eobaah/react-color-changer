import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.onColorClick = this.onColorClick.bind(this);
  }

  onColorClick() {
    this.props.changeColor(this.props.index);
  }

  render() {
    return <div onClick={this.onColorClick} className="block" style={{ backgroundColor: this.props.color }} />;
  }
}

Block.propTypes = {
  color: PropTypes.string,
  changeColor: PropTypes.func,
  index: PropTypes.number
};
