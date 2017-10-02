import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { sequencedDashboard, nonSequencedDashboard, nonSequencedNonBlockingDashboard } from './dashboardReducer';

const rootReducer = combineReducers({
  userReducer,
  sequencedDashboard,
  nonSequencedDashboard,
  nonSequencedNonBlockingDashboard,
});

export default rootReducer;
