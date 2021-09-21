import { changeNodeColor } from './gridActions'

export const changeNodeColorAsync = (nodeToChange, color) => async (dispatch, getState) => {
    const { grid } = getState().grid
    dispatch(changeNodeColor({ nodeToChange, color, grid }))
}