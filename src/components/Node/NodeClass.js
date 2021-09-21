export const NodeClass = (row, col, startNodeRow, startNodeCol, finishNodeRow, finishNodeCol ) => {
  const nodeID = (row.toString() + col.toString())
  let defaultType = null;
  let startNode = false;
  let finishNode = false;
  if (row === startNodeRow && col === startNodeCol) {
    defaultType = 3;
    startNode = true; 
  }
  if (row === finishNodeRow && col === finishNodeCol) {
    defaultType = 4;
    finishNode = true;
  }

  return {
      id: (nodeID),
      row,
      col,
      type : defaultType,
      isStart: startNode,
      isFinish: finishNode,
      distance: Infinity,
      totalDistance: Infinity,
      distanceToFinishNode:
        Math.abs(finishNodeRow - row) + Math.abs(finishNodeCol - col),
      isVisited: false,
      isWall: false,
      previousNode: null,
      isNode: true,
      shortestPath: false,
    };
  };