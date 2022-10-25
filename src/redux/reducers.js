import { combineReducers } from 'redux';
import dashboard from './dashboard/reducer';

const reducers = combineReducers({
  dashboard,
});

export default reducers;