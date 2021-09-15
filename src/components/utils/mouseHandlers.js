import store from "../../redux/store";
import {
  getNewGridWithWallToggled,
  getInitialGrid,
  generateGrid,
  getState,
} from "./gridUtils";
import { clearPath, isGridClear } from "./boardControls";
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

/******************** Handle mouse events ********************/

export const handleMouseLeaveEvent = () => {
  const { ROW_COUNT, COLUMN_COUNT } = getState();
  const { isStartNode, isFinishNode, isWallNode } = getState();
  if (isStartNode) {
    store.dispatch(mouseLeaveAtStartNode());
  } else if (isFinishNode) {
    store.dispatch(mouseLeaveAtFinishNode());
  } else if (isWallNode) {
    store.dispatch(mouseLeaveAtWallNode());
    getInitialGrid(ROW_COUNT, COLUMN_COUNT);
  }
};

export const handleMouseUpEvent = (row, col) => {
  const { isRunning, isStartNode, isFinishNode } = getState();

  if (!isRunning) {
    const { ROW_COUNT, COLUMN_COUNT } = getState();
    store.dispatch(handleMouseUp());
    if (isStartNode) {
      store.dispatch(
        mouseUpAtStartNode({ START_NODE_ROW: row, START_NODE_COL: col })
      );
    } else if (isFinishNode) {
      store.dispatch(
        mouseUpAtFinishNode({ FINISH_NODE_ROW: row, FINISH_NODE_COL: col })
      );
    }
    getInitialGrid(ROW_COUNT, COLUMN_COUNT);
  }
};

export const handleMouseDownEvent = (row, col) => {
  const { isRunning, grid } = getState();
  if (!isRunning) {
    if (isGridClear(grid)) {
      if (
        document.getElementById(`node-${row}-${col}`).className === "node start"
      ) {
        store.dispatch(mouseDownAtStartNode({ currRow: row, currCol: col }));
      } else if (
        document.getElementById(`node-${row}-${col}`).className ===
        "node finish"
      ) {
        store.dispatch(mouseDownAtFinishNode({ currRow: row, currCol: col }));
      } else {
        const newGrid = getNewGridWithWallToggled(row, col);
        store.dispatch(
          mouseDownAtWallNode({
            grid: newGrid,
            currRow: row,
            currCol: col,
          })
        );
      }
    }
  } else {
    generateGrid(clearPath());
  }
};

export const handleMouseEnterEvent = (row, col) => {
  const {
    isRunning,
    mouseIsPressed,
    isWallNode,
    isStartNode,
    isFinishNode,
    grid,
    currRow,
    currCol,
  } = getState();

  if (!isRunning) {
    if (mouseIsPressed) {
      const nodeClassName = document.getElementById(
        `node-${row}-${col}`
      ).className;
      if (isStartNode) {
        if (nodeClassName !== "node wall") {
          let prevStartNode = grid[currRow][currCol];
          prevStartNode.isStart = false;
          document.getElementById(`node-${currRow}-${currCol}`).className =
            "node";
          store.dispatch(mouseEnterAtCurr({ currRow: row, currCol: col }));

          let currStartNode = grid[row][col];
          currStartNode.isStart = true;
          document.getElementById(`node-${row}-${col}`).className =
            "node start";
        }
        store.dispatch(
          mouseEnterAtStartNode({ START_NODE_ROW: row, START_NODE_COL: col })
        );
      } else if (isFinishNode) {
        if (nodeClassName !== "node wall") {
          let prevFinishNode = grid[currRow][currCol];
          prevFinishNode.isFinish = false;
          document.getElementById(`node-${currRow}-${currCol}`).className =
            "node";
          store.dispatch(mouseEnterAtCurr({ currRow: row, currCol: col }));

          let currFinishNode = grid[row][col];
          currFinishNode.isFinish = true;
          document.getElementById(`node-${row}-${col}`).className =
            "node finish";
        }
        store.dispatch(
          mouseEnterAtFinishNode({ FINISH_NODE_ROW: row, FINISH_NODE_COL: col })
        );
      } else if (isWallNode) {
        const newGrid = getNewGridWithWallToggled(row, col);
        generateGrid(newGrid);
      }
    }
  }
};
