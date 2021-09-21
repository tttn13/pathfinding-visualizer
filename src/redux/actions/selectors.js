export const selectGrid = (state) => state.grid.grid;
export const selectAlgo = state => state.grid.currentAlgo
export const selectAlgoOptions = state => state.grid.algoOptions
export const selectSpeed = state => state.grid.speed  
export const selectSpeedOptions = state => state.grid.speedOptions  
export const selectStartNodeRow = (state) => state.grid.START_NODE_ROW;
export const selectStartNodeCol = (state) => state.grid.START_NODE_COL
export const selectFinishNodeRow = (state) => state.grid.FINISH_NODE_ROW
export const selectFinishNodeCol = (state) => state.grid.FINISH_NODE_COL
export const selectRunning = (state) => state.grid.isRunning
export const selectRowCount = (state) => state.grid.ROW_COUNT;
export const selectColCount = (state) => state.grid.COLUMN_COUNT;