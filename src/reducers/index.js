import { combineReducers } from 'redux';
import taskReducer from './tasks';
import uiReducer from './ui';
import modalReducer from './modal';

const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
  modal: modalReducer
});

export default rootReducer;
