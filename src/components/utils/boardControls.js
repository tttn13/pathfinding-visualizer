import {getState,
  getStartAndFinishNodes,
  generateGrid,
} from "./gridUtils";
import { NodeClass } from "../Node/NodeClass";
import store from "../../redux/store";

export const isGridClear = (grid) => {
    for (const row of grid) {
      for (const node of row) {
        const nodeClassName = document.getElementById(`node-${node.row}-${node.col}`).className;
        if ( nodeClassName === "node visited" || nodeClassName === "node shortest-path" )
          return false;
      }
    }
    return true;
};

// export const isGridClear = (grid) => {
//   for (const row of grid) {
//     for (const node of row) {
//       if (!node.isVisited || !node.isShortest) return false
//     }
//   }
//   return true;
// };
  
export const clearPath = () => {
    if (!getState().isRunning) {
      const { grid } = getState();
      const { finishNodeRow, finishNodeCol } = getStartAndFinishNodes();
      let newGrid = JSON.parse(JSON.stringify(grid));
      for (const row of newGrid) {
        for (const node of row) {
          node.previousNode = null;
          const nodeClassName = document.getElementById(`node-${node.row}-${node.col}`).className;
            if (nodeClassName === "node visited" || nodeClassName === "node shortest-path") {
              document.getElementById(`node-${node.row}-${node.col}`).className = "node";
              const distance = Math.abs(finishNodeRow - node.row) + Math.abs(finishNodeCol - node.col);
              resetNodeProps(node, distance);
            } else if (nodeClassName === "node finish") {
              resetNodeProps(node, 0);
            } else if (nodeClassName === "node start") {
              const distance = Math.abs(finishNodeRow - node.row) +  Math.abs(finishNodeCol - node.col);
              resetNodeProps(node, distance);
              node.isStart = true;
              node.isWall = false;
              node.previousNode = null;
              node.isNode = true;
            } else {
              resetNodeProps(node, Infinity);
            }
          } 
        }
        generateGrid(newGrid)
      }
  };

  export const resetGrid = () => {
    if (!getState().isRunning) {
      console.log("reset grid")
      const { grid } = getState();
      let currentGrid = JSON.parse(JSON.stringify(grid));
      const { startNodeRow, startNodeCol, finishNodeRow, finishNodeCol } = getStartAndFinishNodes();
      const { ROW_COUNT, COLUMN_COUNT } = getState()

      let newGrid = [];
      for (let row = 0; row < ROW_COUNT; row++) {
        const currentRow = [];
        for (let col = 0; col < COLUMN_COUNT; col++) {
          let newNode =  NodeClass(
                                row,
                                col,
                                startNodeRow,
                                startNodeCol,
                                finishNodeRow,
                                finishNodeCol
                              );
          (newNode.isWall = currentGrid[row][col].isWall) 
          currentRow.push(newNode);
        }
        newGrid.push(currentRow);
      }
      // generateGrid(newGrid)
      return newGrid
    }
  }
  
  const resetNodeProps = (node, distanceToFinish) => {
    node.isVisited = false;
    node.distance = Infinity;
    node.totalDistance = Infinity;
    node.distanceToFinishNode = distanceToFinish;
  };
  
  const removeWalls = (grid) => {
    for (const row of grid) {
      for (const node of row) {
        node.isWall = false;
      }
    }
  };
  
  const resetDisplay = (grid) => {
    for (const row of grid) {
      for (const node of row) {
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;
        if (nodeClassName === "node wall") {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node";
        }
      }
    }
  };
  
  export const clearWalls = () => {
    const { isRunning, grid } = getState();
    if (!isRunning) {
      let newGrid = grid.slice()
      removeWalls(newGrid);
      resetDisplay(newGrid);
      generateGrid(newGrid)
    }
  };
  
  export const clearBoard = (grid) => {
    clearPath();

    // generateGrid(resetGrid())
    removeWalls(grid);
  };