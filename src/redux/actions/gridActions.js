import {
    GET_GRID,
    SET_TOGGLE_RUNNING,
    CHANGE_ALGO,
    CHANGE_SPEED,
    TOGGLE_VIEW,
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
} from './types';

export const getGrid = ({ grid }) => ({
    type: GET_GRID,
    payload: {
        grid
    }
})

export const handleMouseUp = () => ({
    type: HANDLE_MOUSE_UP
})


export const mouseUpAtStartNode = ({ START_NODE_ROW, START_NODE_COL }) => ({
    type: HANDLE_MOUSE_UP_FOR_STARTNODE,
    payload: {
        START_NODE_ROW,
        START_NODE_COL
    }
})

export const mouseUpAtFinishNode = ({ FINISH_NODE_ROW, FINISH_NODE_COL }) => ({
    type: HANDLE_MOUSE_UP_FOR_FINISHNODE,
    payload: {
        FINISH_NODE_ROW,
        FINISH_NODE_COL
    }
})

export const mouseLeaveAtStartNode = () => ({
    type: HANDLE_MOUSE_LEAVE_FOR_STARTNODE  
})

export const mouseLeaveAtFinishNode = () => ({
    type: HANDLE_MOUSE_LEAVE_FOR_FINISHNODE,
   
})

export const mouseLeaveAtWallNode = () => ({
    type: HANDLE_MOUSE_LEAVE_FOR_WALLNODE,
    
})

export const mouseDownAtStartNode = ({ currRow, currCol }) => ({
    type: HANDLE_MOUSE_DOWN_STARTNODE,
    payload: {
        currRow,
        currCol
    }
})

export const mouseDownAtFinishNode = ({ currRow, currCol }) => ({
    type: HANDLE_MOUSE_DOWN_FINISHNODE,
    payload: {
        currRow,
        currCol
    }
})

export const mouseDownAtWallNode = ({ grid, currRow, currCol }) => ({
    type: HANDLE_MOUSE_DOWN_WALLNODE,
    payload: {
        grid,
        currRow,
        currCol
    }
})

export const mouseEnterAtStartNode = ({ START_NODE_ROW, START_NODE_COL }) => ({
    type: HANDLE_MOUSE_ENTER_FOR_STARTNODE,
    payload: {
        START_NODE_ROW,
        START_NODE_COL
    }
})

export const mouseEnterAtFinishNode = ({ FINISH_NODE_ROW, FINISH_NODE_COL }) => ({
    type: HANDLE_MOUSE_ENTER_FOR_FINISHNODE,
    payload: {
        FINISH_NODE_ROW,
        FINISH_NODE_COL
    }
})

export const mouseEnterAtGrid = ({ grid }) => ({
    type: HANDLE_MOUSE_ENTER_FOR_GRID,
    payload: {
        grid
    }
})

export const mouseEnterAtCurr = ({ currRow, currCol }) => ({
    type: HANDLE_MOUSE_ENTER_FOR_CURR,
    payload: {
        currRow,
        currCol
    }
})

export const changeRunningToggle = () => ({
    type: SET_TOGGLE_RUNNING
})

export const changeView = () => ({
    type: TOGGLE_VIEW,
})

export const changeAlgo = ({ currentAlgo }) => ({
    type: CHANGE_ALGO,
    payload: {
        currentAlgo
    }
})

export const changeSpeed = ({ speed }) => ({
    type: CHANGE_SPEED,
    payload: {
        speed
    }
})