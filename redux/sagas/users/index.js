import { takeEvery, put } from 'redux-saga/effects';
import DATA from '@/networks/leaderboard.json';
import { GET_USERS } from '@/redux/constants/users';

function* callUsersApi(action) {
  try {
    const result = DATA;
    yield put({ type: GET_USERS.SUCCESS, result });
  } catch (error) {
    yield put({ type: GET_USERS.FAILURE });
  }
}

export const usersSaga = [takeEvery(GET_USERS.GET, callUsersApi)];
