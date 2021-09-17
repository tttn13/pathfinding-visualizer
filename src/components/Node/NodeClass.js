export const NodeClass = (row, col, startNodeRow, startNodeCol, finishNodeRow, finishNodeCol ) => {
  const nodeID = (row.toString() + col.toString())
  return {
      id: (nodeID),
      row,
      col,
      isStart: row === startNodeRow && col === startNodeCol,
      isFinish: row === finishNodeRow && col === finishNodeCol,
      distance: Infinity,
      totalDistance: Infinity,
      distanceToFinishNode:
        Math.abs(finishNodeRow - row) + Math.abs(finishNodeCol - col),
      isVisited: false,
      isWall: false,
      isShortest: false,
      previousNode: null,
      isNode: true,
    };
  };