import { combineReducers } from 'redux';

import { viewReducer } from './view.reducer';
import { dashboardReducer } from './dashboard.reducer';

const rootReducer = combineReducers({
  view: viewReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
