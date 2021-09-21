import store from "../../redux/store";
import {
  getNewGridWithWallToggled,
  getInitialGrid,
  generateGrid,
  getState,
} from "./gridUtils";
import { isGridClear } from "./boardControls";
import {
  handleMouseUp,
  mouseUpAtStartNode,
  mouseUpAtFinishNode,
  mouseLeaveAtStartNode,
  mouseLeaveAtFinishNode,
  mouseLeaveAtWallNode,
  mouseDownAtStartNode,
  mouseDownAtFinishNode,
  mouseDownAtWallNode,
  mouseEnterAtStartNode,
  mouseEnterAtFinishNode,
  mouseEnterAtCurr,
} from "../../redux/actions/gridActions";
import { changeNodeColorAsync } from '../../redux/actions/asyncActions'
import { getNodeColor } from './createAnimations'
/******************** Handle mouse events ********************/

export const handleMouseLeaveEvent = () => {

  const { ROW_COUNT, COLUMN_COUNT } = getState();
  const { currNodeisStartNode, currNodeisFinishNode, currNodeisWallNode } = getState();
  if (currNodeisStartNode) {
    store.dispatch(mouseLeaveAtStartNode());
  } else if (currNodeisFinishNode) {
    store.dispatch(mouseLeaveAtFinishNode());
  } else if (currNodeisWallNode) {
    store.dispatch(mouseLeaveAtWallNode());
    getInitialGrid(ROW_COUNT, COLUMN_COUNT);
  }
};

export const handleMouseUpEvent = (row, col) => {

  const { isRunning, grid, currNodeisStartNode, currNodeisFinishNode } = getState();

  if (!isRunning) {
    const { ROW_COUNT, COLUMN_COUNT } = getState();
    store.dispatch(handleMouseUp());
    const releasedNode = grid[row][col]

    if (currNodeisStartNode) {
      store.dispatch(mouseUpAtStartNode({ START_NODE_ROW: row, START_NODE_COL: col }));
      store.dispatch(changeNodeColorAsync(releasedNode, getNodeColor("START")))

    } else if (currNodeisFinishNode) {
      store.dispatch( mouseUpAtFinishNode({ FINISH_NODE_ROW: row, FINISH_NODE_COL: col }) );
      store.dispatch(changeNodeColorAsync(releasedNode, getNodeColor("FINISH")))

    }
    getInitialGrid(ROW_COUNT, COLUMN_COUNT);
  }
};

export const handleMouseDownEvent = (row, col) => {

  const { isRunning, grid } = getState();
  if (!isRunning) {
    
    if (isGridClear(grid)) {
      const pressedNode = grid[row][col]
      if (pressedNode.isStart) {
        store.dispatch(mouseDownAtStartNode({ currRow: row, currCol: col }));

      } else if (pressedNode.isFinish) {
        store.dispatch(mouseDownAtFinishNode({ currRow: row, currCol: col }));

      } else {
        const newGrid = getNewGridWithWallToggled(row, col);
        store.dispatch(mouseDownAtWallNode({
            grid: newGrid,
            currRow: row,
            currCol: col,
          }));
      }
    }
  } 
};

export const handleMouseEnterEvent = (row, col) => {

  const {
    isRunning,
    mouseIsPressed,
    currNodeisWallNode,
    currNodeisStartNode,
    currNodeisFinishNode,
    grid,
    currRow,
    currCol,
  } = getState();

  if (!isRunning) {
    if (mouseIsPressed) {
      let enteredNode = grid[row][col]
      
      if (currNodeisStartNode) {
        
        if (enteredNode.isWall === false) {
          let prevStartNode = grid[currRow][currCol];
          prevStartNode.isStart = false;
          store.dispatch(changeNodeColorAsync(prevStartNode, getNodeColor("NOCOLOR")))
          store.dispatch(mouseEnterAtCurr({ currRow: row, currCol: col }));
          
          enteredNode.isStart = true;
          store.dispatch(changeNodeColorAsync(enteredNode, getNodeColor("START")))
        }
        store.dispatch(mouseEnterAtStartNode({ START_NODE_ROW: row, START_NODE_COL: col }));
        store.dispatch(changeNodeColorAsync(enteredNode, getNodeColor("START")))

      } else if (currNodeisFinishNode) {

        if (enteredNode.isWall === false) {
          let prevFinishNode = grid[currRow][currCol];
          prevFinishNode.isFinish = false;
          store.dispatch(mouseEnterAtCurr({ currRow: row, currCol: col }));
          store.dispatch(changeNodeColorAsync(prevFinishNode, getNodeColor("NOCOLOR")))

          enteredNode.isFinish = true;
          store.dispatch(changeNodeColorAsync(enteredNode, getNodeColor("FINISH")))
        }
        store.dispatch( mouseEnterAtFinishNode({ FINISH_NODE_ROW: row, FINISH_NODE_COL: col }));
        store.dispatch(changeNodeColorAsync(enteredNode, getNodeColor("FINISH")))

      } else if (currNodeisWallNode) {

        const newGrid = getNewGridWithWallToggled(row, col);
        generateGrid(newGrid);
      }
    }
  }
};
