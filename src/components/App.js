import React, { Component } from 'react';
import Block from './Block';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: ['aqua', 'blue', 'white', 'orange', 'green', 'yellow', 'red', 'pink', 'silver'],
      colorIndex: 0,
      blockToColorIndex: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 }
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(blockIndex) {
    let newGlobalColorIndex = (this.state.colorIndex + 1) % this.state.palette.length;
    let newBlockColorIndex = newGlobalColorIndex;
    let newBlockToColorIndex = Object.assign({}, this.state.blockToColorIndex, { [blockIndex]: newBlockColorIndex });

    this.setState({ colorIndex: newGlobalColorIndex, blockToColorIndex: newBlockToColorIndex });
  }

  getBlockColor(index) {
    const blockColorIndex = this.state.blockToColorIndex[index];
    return this.state.palette[blockColorIndex];
  }

  render() {
    const blocks = this.state.palette.map((color, index) => (
      <Block key={index} index={index} color={this.getBlockColor(index)} changeColor={this.changeColor} />
    ));
    return <div className="container">{blocks}</div>;
  }
}

// refactor : use Object.keys of the blockToColorIndex to get all colors and render all the blocks
