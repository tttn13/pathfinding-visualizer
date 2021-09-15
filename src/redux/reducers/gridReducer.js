import {
    GET_GRID,
    SET_TOGGLE_RUNNING,
    TOGGLE_VIEW,
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
    HANDLE_MOUSE_LEAVE_FOR_WALLNODE
} from '../actions/types';

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
    MOBILE_ROW_COUNT: 10,
    MOBILE_COLUMN_COUNT: 20,
    isRunning: false,
    isStartNode: false,
    isFinishNode: false,
    isWallNode: false,
    currRow: 0,
    currCol: 0,
    isDesktopView: true,
    algoOptions: [
        { id: 1, type: 'Dijkstra' },
        { id: 2, type: 'A*' },
        { id: 3, type: 'Breadth First Search' },
        { id: 4, type: 'Depth First Search' },
    ],
    speedOptions: [
        { id: 100, type: 'Average' },
        { id: 10, type: 'Fast' },
        { id: 200, type: 'Slow' },
    ]
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        //app init
        case GET_GRID:
            return {
                ...state,
                grid: action.payload.grid
            }
        case SET_TOGGLE_RUNNING:
            return {
                ...state,
                isRunning: !state.isRunning
            }
        case TOGGLE_VIEW:
            return {
                ...state,
                isDesktopView: !state.isDesktopView,
            }
        case CHANGE_ALGO:
            return {
                ...state,
                currentAlgo: action.payload.currentAlgo
            }
        case CHANGE_SPEED:
            return {
                ...state,
                speed: action.payload.speed
            }
    
        //handle mouse down event 
        case HANDLE_MOUSE_DOWN_STARTNODE:
            return {
                ...state,
                mouseIsPressed: true,
                isStartNode: true,
                currRow: action.payload.currRow,
                currCol: action.payload.currCol
            }
        case HANDLE_MOUSE_DOWN_FINISHNODE:
            return {
                ...state,
                mouseIsPressed: true,
                isFinishNode: true,
                currRow: action.payload.currRow,
                currCol: action.payload.currCol
            }
        case HANDLE_MOUSE_DOWN_WALLNODE:
            return {
                ...state,
                grid: action.payload.grid,
                mouseIsPressed: true,
                isWallNode: true,
                currRow: action.payload.currRow,
                currCol: action.payload.currCol
            }         

        //handle mouse enter events    
        case HANDLE_MOUSE_ENTER_FOR_CURR:
            return {
                ...state,
                currRow: action.payload.currRow,
                currCol: action.payload.currCol,
            }
        case HANDLE_MOUSE_ENTER_FOR_STARTNODE:
            return {
                ...state,
                START_NODE_ROW: action.payload.START_NODE_ROW,
                START_NODE_COL: action.payload.START_NODE_COL,
            }
        case HANDLE_MOUSE_ENTER_FOR_FINISHNODE:
            return {
                ...state,
                FINISH_NODE_ROW: action.payload.FINISH_NODE_ROW,
                FINISH_NODE_COL: action.payload.FINISH_NODE_COL,
            }
        case HANDLE_MOUSE_ENTER_FOR_GRID:
            return {
                ...state,
                grid: action.payload.grid
            }

        //handle mouse up events
        case HANDLE_MOUSE_UP:
            return {
                ...state,
                mouseIsPressed: false,
            }
        case HANDLE_MOUSE_UP_FOR_STARTNODE:
            return {
                ...state,
                isStartNode: !state.isStartNode,
                START_NODE_ROW: action.payload.START_NODE_ROW,
                START_NODE_COL: action.payload.START_NODE_COL,
            }
        case HANDLE_MOUSE_UP_FOR_FINISHNODE:

            return {
                ...state,
                isFinishNode: !state.isFinishNode,
                FINISH_NODE_ROW: action.payload.FINISH_NODE_ROW,
                FINISH_NODE_COL: action.payload.FINISH_NODE_COL
            }

        //handle mouse leave event
        case HANDLE_MOUSE_LEAVE_FOR_STARTNODE:
            const newStartNode = !state.isStartNode
            return {
                ...state,
                isStartNode: newStartNode,
                mouseIsPressed: false
            }
        case HANDLE_MOUSE_LEAVE_FOR_FINISHNODE:
            const newFinishNode = !state.isFinishNode
            return {
                ...state,
                isFinishNode: newFinishNode,
                mouseIsPressed: false
            }      
        case HANDLE_MOUSE_LEAVE_FOR_WALLNODE:
            const newWallNode = !state.isWallNode
            return {
                ...state,
                isWallNode: newWallNode ,
                mouseIsPressed: false,
            }
        default:
            return state;
    }
}

export default reducer