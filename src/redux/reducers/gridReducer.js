import {
  GET_GRID,
  SET_TOGGLE_RUNNING,
  CHANGE_ALGO,
  CHANGE_SPEED,
  HANDLE_MOUSE_DOWN_STARTNODE,
  HANDLE_MOUSE_DOWN_FINISHNODE,
  HANDLE_MOUSE_DOWN_WALLNODE,
  HANDLE_MOUSE_ENTER_FOR_CURR,
  HANDLE_MOUSE_ENTER_FOR_STARTNODE,
  HANDLE_MOUSE_ENTER_FOR_FINISHNODE,
  HANDLE_MOUSE_ENTER_FOR_GRID,
  HANDLE_MOUSE_UP,
  HANDLE_MOUSE_UP_FOR_STARTNODE,
  HANDLE_MOUSE_UP_FOR_FINISHNODE,
  HANDLE_MOUSE_LEAVE_FOR_STARTNODE,
  HANDLE_MOUSE_LEAVE_FOR_FINISHNODE,
  HANDLE_MOUSE_LEAVE_FOR_WALLNODE,
  CHANGE_NODE_TYPE,
} from "../actions/types";

const initialState = {
  grid: [],
  currentAlgo: null,
  speed: null,
  START_NODE_ROW: 5,
  FINISH_NODE_ROW: 7,
  START_NODE_COL: 5,
  FINISH_NODE_COL: 16,
  mouseIsPressed: false,
  ROW_COUNT: 25,
  COLUMN_COUNT: 35,
  isRunning: false,
  currNodeisStartNode: false,
  currNodeisFinishNode: false,
  currNodeisWallNode: false,
  currRow: 0,
  currCol: 0,
  algoOptions: [
    { id: 1, type: "Dijkstra" },
    { id: 2, type: "A*" },
    { id: 3, type: "Breadth First Search" },
    { id: 4, type: "Depth First Search" },
  ],
  speedOptions: [
    { id: 100, type: "Average" },
    { id: 5, type: "Fast" },
    { id: 200, type: "Slow" },
  ],
  nodeTypes: [
    { WALL: 0 },
    { VISITED: 1 },
    { SHORTEST: 2 },
    { START: 3 },
    { FINISH: 4 },
    { NOCOLOR: 5 },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //app init
    case GET_GRID:
      return {
        ...state,
        grid: action.payload.grid,
      };
    case SET_TOGGLE_RUNNING:
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    case CHANGE_ALGO:
      return {
        ...state,
        currentAlgo: action.payload.currentAlgo,
      };
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.payload.speed,
      };
    case CHANGE_NODE_TYPE:
      const { nodeToChange, color, grid } = action.payload;
      const { row, col } = nodeToChange;
      let gridClone = grid.slice();
      gridClone[row][col].type = color;

      return {
        ...state,
        grid: gridClone,
      };

    //handle mouse down event
    case HANDLE_MOUSE_DOWN_STARTNODE:
      return {
        ...state,
        mouseIsPressed: true,
        currNodeisStartNode: true,
        currRow: action.payload.currRow,
        currCol: action.payload.currCol,
      };
    case HANDLE_MOUSE_DOWN_FINISHNODE:
      return {
        ...state,
        mouseIsPressed: true,
        currNodeisFinishNode: true,
        currRow: action.payload.currRow,
        currCol: action.payload.currCol,
      };
    case HANDLE_MOUSE_DOWN_WALLNODE:
      return {
        ...state,
        grid: action.payload.grid,
        mouseIsPressed: true,
        currNodeisWallNode: true,
        currRow: action.payload.currRow,
        currCol: action.payload.currCol,
      };

    //handle mouse enter events
    case HANDLE_MOUSE_ENTER_FOR_CURR:
      return {
        ...state,
        currRow: action.payload.currRow,
        currCol: action.payload.currCol,
      };
    case HANDLE_MOUSE_ENTER_FOR_STARTNODE:
      return {
        ...state,
        START_NODE_ROW: action.payload.START_NODE_ROW,
        START_NODE_COL: action.payload.START_NODE_COL,
      };
    case HANDLE_MOUSE_ENTER_FOR_FINISHNODE:
      return {
        ...state,
        FINISH_NODE_ROW: action.payload.FINISH_NODE_ROW,
        FINISH_NODE_COL: action.payload.FINISH_NODE_COL,
      };
    case HANDLE_MOUSE_ENTER_FOR_GRID:
      return {
        ...state,
        grid: action.payload.grid,
      };

    //handle mouse up events
    case HANDLE_MOUSE_UP:
      return {
        ...state,
        mouseIsPressed: false,
      };
    case HANDLE_MOUSE_UP_FOR_STARTNODE:
      return {
        ...state,
        currNodeisStartNode: !state.currNodeisStartNode,
        START_NODE_ROW: action.payload.START_NODE_ROW,
        START_NODE_COL: action.payload.START_NODE_COL,
      };
    case HANDLE_MOUSE_UP_FOR_FINISHNODE:
      return {
        ...state,
        currNodeisFinishNode: !state.currNodeisFinishNode,
        FINISH_NODE_ROW: action.payload.FINISH_NODE_ROW,
        FINISH_NODE_COL: action.payload.FINISH_NODE_COL,
      };

    //handle mouse leave event
    case HANDLE_MOUSE_LEAVE_FOR_STARTNODE:
      return {
        ...state,
        currNodeisStartNode: !state.currNodeisStartNode,
        mouseIsPressed: false,
      };

    case HANDLE_MOUSE_LEAVE_FOR_FINISHNODE:
      return {
        ...state,
        currNodeisFinishNode: !state.currNodeisFinishNode,
        mouseIsPressed: false,
      };
    case HANDLE_MOUSE_LEAVE_FOR_WALLNODE:
      return {
        ...state,
        currNodeisWallNode: !state.currNodeisWallNode,
        mouseIsPressed: false,
      };
    default:
      return state;
  }
};

export default reducer;
