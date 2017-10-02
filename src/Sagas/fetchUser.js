import { call, put } from 'redux-saga/effects';
import { loadUser } from './apiCalls';

function* fetchUser() {
  try {
    const user = yield call(loadUser);

    yield put({
      type: 'FETCH_USER_SUCCESS',
      payload: user,
    });
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
      error,
    });
  }
}

export default fetchUser;
