import store from "../../redux/store";
import { NodeClass } from "../Node/NodeClass";
import { getGrid, changeRunningToggle } from "../../redux/actions/gridActions";
import { getNodeColor } from "./createAnimations";

export const getState = () => {
  return store.getState().grid;
};

export const toggleRunning = () => {
  store.dispatch(changeRunningToggle());
};

export const generateGrid = (newGrid) => {
  store.dispatch(getGrid({ grid: newGrid }));
};

export const getStartAndFinishNodes = () => {
  const {
    START_NODE_ROW: startNodeRow,
    START_NODE_COL: startNodeCol,
    FINISH_NODE_ROW: finishNodeRow,
    FINISH_NODE_COL: finishNodeCol,
  } = getState();

  return {
    startNodeRow,
    startNodeCol,
    finishNodeRow,
    finishNodeCol,
  };
};

export const getInitialGrid = (rowCount, colCount) => {
  const { startNodeRow, startNodeCol, finishNodeRow, finishNodeCol } = getStartAndFinishNodes();
  let initialGrid = [];
  for (let row = 0; row < rowCount; row++) {
    const currentRow = [];
    for (let col = 0; col < colCount; col++) {
      currentRow.push(
        NodeClass(
          row,
          col,
          startNodeRow,
          startNodeCol,
          finishNodeRow,
          finishNodeCol
        )
      );
    }
    initialGrid.push(currentRow);
  }
  return initialGrid;
};

export const getNewGridWithWallToggled = (row, col) => {
  const { grid } = getState();
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (!node.isStart && !node.isFinish) {
    let newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    if (newGrid[row][col].isWall === true) {
      newGrid[row][col].type = getNodeColor("WALL");
    } else {
      newGrid[row][col].type = getNodeColor("NOCOLOR");
    }
  }
  return newGrid;
};

