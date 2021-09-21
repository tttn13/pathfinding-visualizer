import { AStar } from "../../algorithms/WeightedAlgorithms/astar";
import { dijkstra } from "../../algorithms/WeightedAlgorithms/dijkstra";
import { dfs } from "../../algorithms/UnweightedAlgorithms/dfs";
import { bfs } from "../../algorithms/UnweightedAlgorithms/bfs";
import { toggleRunning } from "./gridUtils";
import store from "../../redux/store";
import {getState} from "./gridUtils";
import { changeNodeColorAsync } from '../../redux/actions/asyncActions'


export const startApp = async (grid, algorithm, startNode, finishNode, speed) => {
  const nodesInOrder = generateNodesPath(grid, algorithm, startNode, finishNode)
  await animateNodesPath(nodesInOrder, finishNode, speed)
}

export const generateNodesPath = (grid, algorithm, startNode, finishNode) => {
  let visitedNodesInOrder;
  if (algorithm.type === "Dijkstra") {
      visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  }
  if (algorithm.type === "A*") {
      visitedNodesInOrder = AStar(grid, startNode, finishNode);
  }
  if (algorithm.type === "Breadth First Search") {
      visitedNodesInOrder = bfs(grid, startNode, finishNode);
  }
  if (algorithm.type === "Depth First Search") {
      visitedNodesInOrder = dfs(grid, startNode, finishNode);
  }  
  return visitedNodesInOrder;
}

const  animateNodesPath = async (visitedNodesInOrder, finishNode, speed) => {
  for (let i = 0; i < visitedNodesInOrder.length; i++) {
    let currentNode = visitedNodesInOrder[i]
    if (!(currentNode.isStart || currentNode.isFinish || currentNode.isWall)) {
      currentNode.isVisited = true;
      store.dispatch(changeNodeColorAsync(currentNode, getNodeColor("VISITED") ))
    }
    await pause(speed )
  }
  await pause(100 * speed )
  finishSearching(finishNode)
}

const finishSearching = async (finishNode) => {
  const nodesInShortestPath = await getNodesInShortestPathOrder(finishNode);
  await animateShortestPath(nodesInShortestPath)
}


// Backtracks from the finishNode to find the shortest path.
// Only works when called after the pathfinding methods.
const getNodesInShortestPathOrder = async (finishNode) => {
  const nodesInShortestPath = [];
  let currentNode = finishNode;
  while (currentNode !== null ) {
    nodesInShortestPath.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPath;
};

export const animateShortestPath = async (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    const node = nodesInShortestPathOrder[i];
    if (!node.isWall && !node.isStart && !node.isFinish) {
      node.shortestPath = true;
      store.dispatch(changeNodeColorAsync(node, getNodeColor("SHORTEST") ))
    }
    await pause(40)
  }
  toggleRunning()
};

export const getNodeColor = (color) => {
  const nodeColors = getState().nodeTypes;
  if (color === "WALL") return nodeColors[0].WALL;
  if (color === "VISITED") return nodeColors[1].VISITED;
  if (color === "SHORTEST") return nodeColors[2].SHORTEST;
  if (color === "START") return nodeColors[3].START;
  if (color === "FINISH") return nodeColors[4].FINISH;
  if (color === "NOCOLOR") return nodeColors[5].NOCOLOR
};

export const pause = async (speed) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, speed);
  });
};