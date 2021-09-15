import { AStar } from "../../algorithms/WeightedAlgorithms/astar";
import { dijkstra } from "../../algorithms/WeightedAlgorithms/dijkstra";
import { dfs } from "../../algorithms/UnweightedAlgorithms/dfs";
import { bfs } from "../../algorithms/UnweightedAlgorithms/bfs";
import { toggleRunning } from "./gridUtils";

/******************** Create Animations ********************/

export const visualize = (grid, startNode, finishNode, algorithm, speed) => {
  let visitedNodesInOrder;
  switch (algorithm.type) {
    case "Dijkstra":
      visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
      break;
    case "A*":
      visitedNodesInOrder = AStar(grid, startNode, finishNode);
      break;
    case "Breadth First Search":
      visitedNodesInOrder = bfs(grid, startNode, finishNode);
      break;
    case "Depth First Search":
      visitedNodesInOrder = dfs(grid, startNode, finishNode);
      break;
    default:
      break;
  }
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  nodesInShortestPathOrder.push("end");
  animate(visitedNodesInOrder, nodesInShortestPathOrder, speed);
};

export const animate = (visitedNodesInOrder, nodesInShortestPathOrder, speed) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder);
      }, speed * i);
      return;
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      let nodeClassName = document.getElementById(
        `node-${node.row}-${node.col}`
      ).className;
      if (nodeClassName !== "node start" && nodeClassName !== "node finish") {
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node visited";
      }
    }, speed * i);
  }
};

/******************** Create path from start to finish ********************/

export const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    if (nodesInShortestPathOrder[i] === "end") {
      setTimeout(() => {
        toggleRunning();
      }, 50 * i);
    } else {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;
        if (nodeClassName !== "node start" && nodeClassName !== "node finish") {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node shortest-path";
        }
      }, 40 * i);
    }
  }
};

// Backtracks from the finishNode to find the shortest path.
// Only works when called after the pathfinding methods.
const getNodesInShortestPathOrder = (finishNode) => {
  const nodesInShortestPath = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPath.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPath;
};
