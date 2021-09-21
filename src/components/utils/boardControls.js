import { getState, getStartAndFinishNodes, generateGrid } from "./gridUtils";
import { NodeClass } from "../Node/NodeClass";
import { getNodeColor } from "./createAnimations";

export const isGridClear = (grid) => {
  for (const row of grid) {
    for (const node of row) {
      if (!(node.isVisited || !node.shortestPath)) return false;
    }
  }
  return true;
};

export const resetGrid = (gridState) => {
  if (!getState().isRunning) {
    console.log("reset grid")
    const { ROW_COUNT, COLUMN_COUNT } = getState();
    let currentGrid = JSON.parse(JSON.stringify(gridState));
    const { startNodeRow, startNodeCol, finishNodeRow, finishNodeCol } = getStartAndFinishNodes();

    let newGrid = [];
    for (let row = 0; row < ROW_COUNT; row++) {
      const currentRow = [];
      for (let col = 0; col < COLUMN_COUNT; col++) {
        let newNode = NodeClass(
          row,
          col,
          startNodeRow,
          startNodeCol,
          finishNodeRow,
          finishNodeCol
        );
        newNode.isWall = currentGrid[row][col].isWall;
        currentRow.push(newNode);
        if (newNode.isWall) {
          newNode.type = getNodeColor("WALL");
        }
      }
      newGrid.push(currentRow);
    }
    return newGrid;
  }
};

export const clearWalls = (grid) => {
  const { isRunning } = getState();
  let newGrid = grid.slice()
  if (!isRunning) {
    for (const row of newGrid) {
      for (const node of row) {
        if (node.isWall === true) {
          node.isWall = false;
          node.type = getNodeColor("NOCOLOR");
        }
      }
    }
    return newGrid;
  }
};

export const clearBoard = (grid) => {
  console.log("clearBoard")
  generateGrid(resetGrid(grid));
  generateGrid(clearWalls(grid));
};
