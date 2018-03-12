import React, { Component } from 'react';
import Block from './Block';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: ['aqua', 'blue', 'white', 'orange', 'green', 'yellow', 'red', 'pink', 'silver'],
      colorIndex: 0
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    if (this.state.colorIndex === this.state.palette.length - 1) {
      this.setState({
        colorIndex: 0
      });
    } else {
      this.setState(prevState => {
        return {
          colorIndex: prevState.colorIndex + 1
        };
      });
    }
    return this.state.palette[this.state.colorIndex];
  }

  render() {
    const blocks = this.state.palette.map((color, index) => (
      <Block key={index} color={color} changeColor={this.changeColor} />
    ));
    return <div className="container">{blocks}</div>;
  }
}
