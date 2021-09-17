import store from "../../redux/store";
import { NodeClass } from "../Node/NodeClass";
import { getGrid, changeRunningToggle } from "../../redux/actions/gridActions";

export const getState = () => {
  return store.getState().grid;
};

export const toggleRunning = () => {
  store.dispatch(changeRunningToggle());
};

export const generateGrid = (newGrid) => {
  store.dispatch(getGrid({ grid: newGrid }))
}

export const getStartAndFinishNodes = () => {
  const { 
    START_NODE_ROW: startNodeRow ,
    START_NODE_COL: startNodeCol,
    FINISH_NODE_ROW: finishNodeRow,
    FINISH_NODE_COL: finishNodeCol
  } = getState() 

  return {
    startNodeRow,
    startNodeCol,
    finishNodeRow,
    finishNodeCol,
  };
};

export const getRowCounts = () => {
  return {
    rowCountDesktop: getState().ROW_COUNT,
    colCountDesktop: getState().COLUMN_COUNT,
    mobileRowCount: getState().MOBILE_ROW_COUNT,
    mobileColCount: getState().MOBILE_COLUMN_COUNT,
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
  console.log("getInitialGrid")
  return initialGrid;
};

export const getNewGridWithWallToggled = (row, col) => {
  const { grid } = getState();
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (!node.isStart && !node.isFinish && node.isNode) {
    let newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
  }
  return newGrid;
};



export const generateMobileView = () => {
  const { 
    START_NODE_ROW, 
    START_NODE_COL, 
    FINISH_NODE_ROW, 
    FINISH_NODE_COL } = getState();

  const { 
    MOBILE_ROW_COUNT, 
    MOBILE_COLUMN_COUNT } = getState();
 
  let newGrid;
  START_NODE_ROW > MOBILE_ROW_COUNT ||
  FINISH_NODE_ROW > MOBILE_ROW_COUNT ||
  START_NODE_COL > MOBILE_COLUMN_COUNT ||
  FINISH_NODE_COL > MOBILE_COLUMN_COUNT
    ? alert(
        "Start & Finish Nodes Must Be within 10 Rows x 20 Columns for Mobile View "
      )
    : (newGrid = getInitialGrid(MOBILE_ROW_COUNT, MOBILE_COLUMN_COUNT));
  console.log("mobile view")
  return newGrid;
};
