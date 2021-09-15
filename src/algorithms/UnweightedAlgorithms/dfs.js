import { getNeighbors } from './helperFunctions'
export const dfs = (grid, startNode, finishNode) => {
  let visitedNodesInOrder = [];
  let nextNodesStack = [startNode]; 

  while (nextNodesStack.length) {
    const currentNode = nextNodesStack.pop();
    
    if (currentNode === finishNode) return visitedNodesInOrder;
    if (
      !currentNode.isWall &&
      (currentNode.isStart || !currentNode.isVisited)
    ) {
      currentNode.isVisited = true;
      visitedNodesInOrder.push(currentNode);

      const { col, row } = currentNode;
      const neighbors = getNeighbors(grid,row, col, 'dfs')
      neighbors.forEach(neighbor => {
        if (!neighbor.isVisited) {
          neighbor.previousNode = currentNode;
          nextNodesStack.push(neighbor)
        }
      })
      // if (row > 0) {
      //   nextNode = grid[row - 1][col];
      //   if (!nextNode.isVisited) {
      //     nextNode.previousNode = currentNode;
      //     nextNodesStack.unshift(nextNode);
      //   }
      // }
      // if (row < grid.length - 1) {
      //   nextNode = grid[row + 1][col];
      //   if (!nextNode.isVisited) {
      //     nextNode.previousNode = currentNode;
      //     nextNodesStack.unshift(nextNode);
      //   }
      // }
      // if (col > 0) {
      //   nextNode = grid[row][col - 1];
      //   if (!nextNode.isVisited) {
      //     nextNode.previousNode = currentNode;
      //     nextNodesStack.unshift(nextNode);
      //   }
      // }
      // if (col < grid[0].length - 1) {
      //   nextNode = grid[row][col + 1];
      //   if (!nextNode.isVisited) {
      //     nextNode.previousNode = currentNode;
      //     nextNodesStack.unshift(nextNode);
      //   }
      // }      
    }
  }
  
};

