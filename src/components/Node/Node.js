import './Node.css';
import React from "react";

const Node = ({
  id,
  col,
  row,
  type,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
  
  const getNodeColor = (nodeType) => {
    if (nodeType === 0) return "wall"
    if (nodeType === 1 ) return "visited"
    if (nodeType === 2 ) return "shortest-path"
    if (nodeType === 3 ) return "start"
    if (nodeType === 4) return "finish"
    else return " "
  }

  return (
    <td
      key={id}
      id={`node-${row}-${col}`}
      className={`node ${getNodeColor(type)}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
    ></td>
  );
};

export default Node;
