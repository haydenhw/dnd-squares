import React from 'react';
import {Rect} from "react-konva";

function Square(props) {
  const { x, y, width, height, id, onDragMove } = props;
  return (
      <Rect
        key={'fdsa'}
        x={x}
        y={y}
        squareId={id}
        width={width}
        height={height}
        fill="#89b717"
        opacity={0.8}
        draggable
        shadowColor="black"
        shadowBlur={10}
        shadowOpacity={0.6}
        onDragMove={onDragMove}
        // onDragStart={this.handleDragStart}
        // onDragEnd={this.handleDragEnd}
      />
  )
}

export default Square;
