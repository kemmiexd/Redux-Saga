import { combineReducers } from 'redux';
import taskReducer from './tasks';

const rootReducer = combineReducers({
  task: taskReducer
});

export default rootReducer;
