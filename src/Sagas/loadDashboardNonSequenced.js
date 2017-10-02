import { take, select, call, put } from 'redux-saga/effects';

import { loadDeparture, loadFlight, loadForecast } from './apiCalls';

export default function* loadDashboardNonSequenced() {
  try {
    // wait for fetch user success
    yield take('FETCH_USER_SUCCESS');

    // take user info from state
    const user = yield select(state => state.userReducer);

    // get departure information
    const departure = yield call(loadDeparture, user);

    // call loadFlight and loadForecast at the same time \m/
    const [flight, forecast] = yield [
      call(loadFlight, departure.flightId),
      call(loadForecast, departure.date),
    ];

    // dispatch everything to the store
    yield put({
      type: 'FETCH_NON_SEQUENCED_DASHBOARD_SUCCESS',
      payload: {
        departure, flight, forecast,
      },
    });
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
      error: error.message,
    });
  }
}
