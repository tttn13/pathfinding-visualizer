import React , { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGrid,selectColCount,selectRunning,
  selectMouseIsPressed,selectRowCount
} from "../redux/actions/selectors";
import {
  handleMouseLeaveEvent,
  handleMouseUpEvent,
  handleMouseDownEvent,
  handleMouseEnterEvent,
} from "./utils/mouseHandlers";
import Node from "./Node/Node";
import { getGrid } from "../redux/actions/gridActions";
import { getInitialGrid } from "./utils/gridUtils";
import ResultTable from './Table';

const Grid = () => {
  const dispatch = useDispatch();
  /******************** Extract from Global State ********************/
  const mouseIsPressed = useSelector(selectMouseIsPressed);
  const gridGlobal = useSelector(selectGrid);
  const grid = gridGlobal.slice()
  const isRunning = useSelector(selectRunning);
  // const rowCount = useSelector(selectRowCount);
  // const colCount = useSelector(selectColCount);
  const rowCount = 25
  const colCount = 35
  console.log("isRunning",isRunning)
  
  
  
  // const renderTable = (myGrid) => {
  //   console.log("rendering table")
  //   let currGrid = JSON.parse(JSON.stringify(myGrid));

  //   let table = []
  //   for (let row = 0; row < myGrid.length; row++) {
  //     let children = []
  //     table.push(<tr key={row}>{children}</tr>)

  //     for (let col = 0; col < row.length; col++) {
  //       const { id, isFinish, isStart, isWall, isVisited } = currGrid[row][col];
        
  //       const extraClassName = 
  //         isFinish
  //         ? "finish"
  //         : isStart
  //         ? "start"
  //         : isWall
  //         ? "wall"
  //         : isVisited
  //         ? " "
  //         : " ";
        
  //       const node = currGrid[row][col];
  //       children.push( 
  //         <td
  //           key={id}
  //           className= {`node ${extraClassName}`}
  //           id={`node-${row}-${col}`}
  //           onMouseDown={() => handleMouseDownEvent(row, col)}
  //           onMouseEnter={() => handleMouseEnterEvent(row, col)}
  //           onMouseUp={() => handleMouseUpEvent(row, col)}
  //         ></td>
  //       )
  //     }
  //   }
  //   return table
  // }

  return (
    <div className="container">
      {/* <table
        className="grid-container table-responsive"
        onMouseLeave={() =>
          handleMouseLeaveEvent()}
      > 
        <tbody className="grid"> 
          {grid.length>0 ? renderTable(grid) : console.log("loading grid")}
        </tbody>
        
      
      </table> */}
       {grid.length > 0 ? (<ResultTable gridState={grid}/>) : null }
    </div>
  );
};

export default Grid;
