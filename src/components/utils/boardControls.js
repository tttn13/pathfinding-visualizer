import {getState,
  getStartAndFinishNodes,
  generateGrid,
} from "./gridUtils";

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
  
  export const clearPath = () => {
    if (!getState().isRunning) {
      const { grid } = getState();
      const { finishNodeRow, finishNodeCol } = getStartAndFinishNodes();
      let newGrid = JSON.parse(JSON.stringify(grid));
      for (const row of newGrid) {
        for (const node of row) {
          const nodeClassName = document.getElementById(`node-${node.row}-${node.col}`).className;
          if (
            nodeClassName !== "node start" &&
            nodeClassName !== "node finish" &&
            nodeClassName !== "node wall"
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node";
            const distance =
              Math.abs(finishNodeRow - node.row) +
              Math.abs(finishNodeCol - node.col);
            resetNodeProps(node, distance);
          } else if (nodeClassName === "node finish") {
            resetNodeProps(node, 0);
          } else if (nodeClassName === "node start") {
            const distance =
              Math.abs(finishNodeRow - node.row) +
              Math.abs(finishNodeCol - node.col);
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
    removeWalls(grid);
  };