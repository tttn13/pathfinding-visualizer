export const getNeighbors = (grid, row, col, algoName) => {
    let nextNode;
    let neighbors = []
    if (grid[row - 1] && grid[row-1][col]) {
      nextNode = grid[row - 1][col];
      if (algoName === 'dfs') neighbors.unshift(nextNode)
      else if (algoName === 'bfs') neighbors.push(nextNode)
    }
  
    if (grid[row][col+1]) {
      nextNode = grid[row][col+1];
      if (algoName === 'dfs') neighbors.unshift(nextNode)
      else if (algoName === 'bfs') neighbors.push(nextNode)
    }
  
    if (grid[row+1] && grid[row+1][col]) {
      nextNode = grid[row+1][col];
      if (algoName === 'dfs') neighbors.unshift(nextNode)
      else if (algoName === 'bfs') neighbors.push(nextNode)
    }
  
    if (grid[row][col-1]) {
      nextNode = grid[row][col-1]
      neighbors.unshift(nextNode)
  
    }
    return neighbors;
  }