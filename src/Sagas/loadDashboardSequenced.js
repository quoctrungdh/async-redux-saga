import { take, select, call, put } from 'redux-saga/effects';

import { loadDeparture, loadFlight, loadForecast } from './apiCalls';

export default function* loadDashboardSequenced() {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(state => state.userReducer);

    const departure = yield call(loadDeparture, user);

    const flight = yield call(loadFlight, departure.flightId);

    const forecast = yield call(loadForecast, departure.date);

    yield put({
      type: 'FETCH_SEQUENCED_DASHBOARD_SUCCESS',
      payload: {
        forecast,
        flight,
        departure,
      },
    });
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
      error: error.message,
    });
  }
}
