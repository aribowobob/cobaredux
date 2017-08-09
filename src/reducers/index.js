import { combineReducers } from 'redux';
import members from './members';
//import visibilityFilter from './visibilityFilter';

const memberApp = combineReducers({
  members
});

export default memberApp;
