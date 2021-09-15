import { getAllNodes,
  getUnvisitedNeighbors,
} from './helperFunctions'

export const AStar = (grid, startNode, finishNode) => {
  let visitedNodesInOrder = [];
  startNode.distance = 0;
  startNode.totalDistance = 0;
  let unvisitedNodes = getAllNodes(grid);
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

const sortByDistance = (unvisitedNodes) => {
  unvisitedNodes.sort(function(nodeA, nodeB) {
    if (nodeA.totalDistance === nodeB.totalDistance) {
      return nodeA.distanceToFinishNode - nodeB.distanceToFinishNode
    }
    return nodeA.totalDistance - nodeB.totalDistance
  }); 
};

const updateUnvisitedNeighbors = (node, grid) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  // console.log("---")
  // console.log(node.col + ":" + node.row + " - " + node.totalDistance)
  for (const neighbor of unvisitedNeighbors) {
    const distance = node.distance + 1;
    if (distance < neighbor.distance) {
      neighbor.distance = distance; //A Star has 2 cost function: f(x) = g(x) + h(x) : g(x) is cost to reach a node x, h(x) is cost from node X to goal node aka heuristic function.
      neighbor.totalDistance = neighbor.distance + neighbor.distanceToFinishNode;
      neighbor.previousNode = node;
    }
    // console.log(neighbor.col + ":" + neighbor.row + " - " + neighbor.totalDistance)
  }
};