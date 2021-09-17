import './Node.css';
import React , { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRowCount,
  selectColCount,
  selectAlgo,
  selectAlgoOptions,selectGrid
} from "../../redux/actions/selectors";
const Node = ({
  id,
  col,
  row,
  isFinish,
  isStart,
  isWall,
  isVisited,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
 
  const extraClassName = 
    isFinish
    ? "finish"
    : isStart
    ? "start"
    : isWall
    ? "wall"
    : '';
  // const extraClassName = () => {
  //   if (isFinish) return "finish"
  //   else if (isStart) return "start"
  //   else if (isWall) return "wall"
  //   else return " "
  // }
  
  const getNodeColor = ({ isFinish, isStart, isWall, isVisited }) => {
    console.log("getNodeColor")
    if (isFinish) return "finish"
    if (isStart) return "start"
    if (isWall) return "wall"
    else return " "
  }

  return (
    <td
      key={id}
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
    ></td>
  );
};

export default Node;
