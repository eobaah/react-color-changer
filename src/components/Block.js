import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'yellow'
    };
  }

  render() {
    return (
      <div>
        <div className="block" style={this.state.backgroundColor} />;
      </div>
    );
  }
}

Block.propTypes = {
  color: PropTypes.string
};
