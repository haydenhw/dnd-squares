import React from 'react';
import Square from "./Square";

const denormalizeSquares = (squares) =>
  Object.keys(squares).map(squareId => ({
      ...squares[squareId],
      id: squareId
    }
  ))

const isColliding = (rect1, rect2) => {
  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
    return true
  }
  return false
}

const isSelf = (square, otherSquare) => {
  return (
    square.x === otherSquare.x &&
    square.y === otherSquare.y &&
    square.width === otherSquare.width &&
    square.height === otherSquare.height
  )
}

const checkCollisions = (squares) => {
  const collisions = []
  for (let square of squares) {
    for (let otherSquare of squares) {
      const colliding = isColliding(square, otherSquare) && !isSelf(square, otherSquare)
      if (colliding) {
        collisions.push(square, otherSquare)
      }
    }
  }

  return collisions
}


function SquareList({squares}) {

  const onDragMove = (e) => {
    const {attrs: draggingSquare} = e.target

    let otherSquares = {...squares}
    delete otherSquares[draggingSquare.squareId]

    const otherSquaresArr = denormalizeSquares(otherSquares)

    console.log(otherSquaresArr)
    // checkCollisions([...squares, draggingSquare])
  }

  const renderSquare = ({x, y, width, height, id}) => {
    return (
      <Square
        key={id}
        id={id}
        x={x}
        y={y}
        width={width}
        height={height}
        onDragMove={onDragMove}
      />
    )
  }

  const squareArray = denormalizeSquares(squares)
  return squareArray.map(square => renderSquare(square))
}

export default SquareList;
