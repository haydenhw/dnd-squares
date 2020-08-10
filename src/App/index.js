import React, { Component } from "react";
import Konva from 'konva';
import { Stage, Layer, Text } from 'react-konva';
import SquareList from "../components/SquareList";


class App extends Component {
  state = {
    squares: {
      '1': {
        x: 10,
        y: 50,
        height: 75,
        width: 75,
        color: 'green',
        isColliding: false,
      },
      '2': {
        x: 80,
        y: 170,
        height: 75,
        width: 75,
        color: 'green',
        isColliding: false,
      },
    }
  }

  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.1,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };
  handleDragMove = e => {
    const attrs = e.target.getAttrs()
    console.log(attrs)
  };
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try to drag a star" />
          <SquareList squares={this.state.squares} />
        </Layer>
      </Stage>
    );
  }
}

export default App;
