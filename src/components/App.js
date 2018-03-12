import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: ['white', 'blue', 'orange', 'pink', 'yellow', 'green', 'red'],
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
      console.log(this.state.colorIndex);
    }
  }

  render() {
    const blocks = this.state.palette.map((color, index) => (
      <div
        onClick={this.changeColor}
        key={index}
        className="block"
        style={{ backgroundColor: this.state.palette[this.state.colorIndex] }}
      />
    ));
    return <div className="container">{blocks}</div>;
  }
}
