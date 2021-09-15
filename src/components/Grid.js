import React from "react";
import { useSelector } from "react-redux";
import {
  selectGrid,
  selectMouseIsPressed,
} from "../redux/actions/selectors";
import {
  handleMouseLeaveEvent,
  handleMouseUpEvent,
  handleMouseDownEvent,
  handleMouseEnterEvent,
} from "./utils/mouseHandlers";
import Node from "./Node/Node";

const Grid = () => {
  /******************** Extract from Global State ********************/
  const grid = useSelector(selectGrid);
  const mouseIsPressed = useSelector(selectMouseIsPressed);

  return (
    <table
      className="grid-container table-responsive"
      onMouseLeave={() =>
        handleMouseLeaveEvent()
      }
    >
      <tbody className="grid">
        {grid.map((row, rowIdx) => {
          return (
            <tr key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    row={row}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={() =>
                      handleMouseDownEvent(row, col)
                    }
                    onMouseEnter={() =>
                      handleMouseEnterEvent(row, col)
                    }
                    onMouseUp={() =>
                      handleMouseUpEvent(row, col)
                    }
                  ></Node>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
