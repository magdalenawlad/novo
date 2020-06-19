import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError, setUser } from '../actions/usersActions'
import { get, put as callPut } from '../api'

export function* handleUsersLoad(payload) {
  try {
    const users = yield call(get, 'https://reqres.in/api/users');
    yield put(setUsers(users))
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* handleUserPost() {
  try {
    const user = yield call(callPut, 'https://reqres.in/api/users/3');
    yield put(setUser(user))
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* usersLoad(action) {
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload)
}

export function* userPost() {
  const payload = yield take(USERS.ADD_USER);
  yield fork(handleUserPost, payload)
}
