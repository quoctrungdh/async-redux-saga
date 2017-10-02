import { fork, takeLatest } from 'redux-saga/effects';
import fetchUser from './fetchUser';

import loadDashboardSequenced from './loadDashboardSequenced';
import loadDashboardNonSequenced from './loadDashboardNonSequenced';
import { loadDashboardNonSequencedNonBlocking, isolatedFlight, isolatedForecast } from './loadDashboardNonSequencedNonBlocking';

function* rootSaga() {
  yield [
    fork(fetchUser),
    takeLatest('LOAD_SEQUENCED_DASHBOARD', loadDashboardSequenced),
    takeLatest('LOAD_NON_SEQUENCED_DASHBOARD', loadDashboardNonSequenced),
    takeLatest('LOAD_DASHBOARD_NON_SEQUENCE_NON_BLOCKING', loadDashboardNonSequencedNonBlocking),
    fork(isolatedFlight),
    fork(isolatedForecast),
  ];
}

export default rootSaga;
