import { take, select, call, put } from 'redux-saga/effects';

import { loadDeparture, loadFlight, loadForecast } from './apiCalls';

export function* loadDashboardNonSequencedNonBlocking() {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(state => state.userReducer);

    const departure = yield call(loadDeparture, user);

    yield put({
      type: 'FETCH_NON_SEQUENCED_NON_BLOCKING_DASHBOARD_SUCCESS',
      payload: {
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

export function* isolatedFlight() {
  try {
    yield take('FETCH_NON_SEQUENCED_NON_BLOCKING_DASHBOARD_SUCCESS');

    const { departure } = yield select(state => state.nonSequencedNonBlockingDashboard);

    const flight = yield call(loadFlight, departure.flightId);

    yield put({
      type: 'FETCH_NON_SEQUENCED_NON_BLOCKING_DASHBOARD_SUCCESS',
      payload: {
        flight,
      },
    });
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
    });
  }
}

export function* isolatedForecast() {
  try {
    yield take('FETCH_NON_SEQUENCED_NON_BLOCKING_DASHBOARD_SUCCESS');

    const { departure } = yield select(state => state.nonSequencedNonBlockingDashboard);

    const forecast = yield call(loadForecast, departure.date);

    yield put({
      type: 'FETCH_NON_SEQUENCED_NON_BLOCKING_DASHBOARD_SUCCESS',
      payload: {
        forecast,
      },
    });
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
      error: error.message,
    });
  }
}
