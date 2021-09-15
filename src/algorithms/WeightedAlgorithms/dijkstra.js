import { getAllNodes,
  getUnvisitedNeighbors, 
} from './helperFunctions'

export const dijkstra = (grid, startNode, finishNode) => {
  let visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (unvisitedNodes.length) {
    sortByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (!closestNode.isWall) {
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
        updateUnvisitedNeighbors(closestNode, grid);
    }
  }
};

const updateUnvisitedNeighbors = (node, grid) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1; //dijkstra has one cost function aka real cost from source to each node : f(x) = g(x)
    neighbor.previousNode = node;
  }
};

const sortByDistance = (unvisitedNodes) => {
  unvisitedNodes.sort(function(nodeA, nodeB) {
    return nodeA.distance - nodeB.distance
  }); 
};