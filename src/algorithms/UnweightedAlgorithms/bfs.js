export const bfs = (grid, startNode, finishNode) => {
  let visitedNodesInOder = [];
  let nextNodesQueue = [startNode]; //initialize queue with startNode

  while (nextNodesQueue.length) {
    const currentNode = nextNodesQueue.shift();
    if (currentNode === finishNode) return visitedNodesInOder;

    if (
      !currentNode.isWall &&
      (currentNode.isStart || !currentNode.isVisited)
    ) {
      currentNode.isVisited = true;
      visitedNodesInOder.push(currentNode);
      const { col, row } = currentNode;
      let nextNode;
      if (row > 0) {
        nextNode = grid[row - 1][col];
        evaluateNextNode(nextNode, currentNode, nextNodesQueue);
      }
      if (row < grid.length - 1) {
        nextNode = grid[row + 1][col];
        evaluateNextNode(nextNode, currentNode, nextNodesQueue);
      }
      if (col > 0) {
        nextNode = grid[row][col - 1];
        evaluateNextNode(nextNode, currentNode, nextNodesQueue);
      }
      if (col < grid[0].length - 1) {
        nextNode = grid[row][col + 1];
        evaluateNextNode(nextNode, currentNode, nextNodesQueue);
      }
      // const neighbors = getNeighbors(grid,row, col, 'bfs')
      // neighbors.forEach(neighbor => {
      //   if (!neighbor.isVisited) {
      //     neighbor.previousNode = currentNode;
      //     nextNodesQueue.push(neighbor)
      //   }
      }
    }
  
};

const evaluateNextNode = (nextNode, currentNode, nextNodesQueue) => {
  if (!nextNode.isVisited) {
    nextNode.previousNode = currentNode;
    nextNodesQueue.push(nextNode);
  }
};
