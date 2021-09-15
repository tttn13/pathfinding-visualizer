import React from "react";
import './Node.css';

const Node = ({
  col,
  row,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {

  const extraClassName = isFinish
    ? "finish"
    : isStart
    ? "start"
    : isWall
    ? "wall"
    : '';
    
  return (
    <td
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></td>
  );
};

export default Node;
