import { combineReducers } from 'redux';
import  gridReducer from './gridReducer';

const rootReducer = combineReducers({
    grid: gridReducer,
})
export default rootReducer