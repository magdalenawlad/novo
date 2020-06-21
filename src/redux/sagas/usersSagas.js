import { call, fork, put, take, takeEvery } from "redux-saga/effects";

import { USERS } from "../constants";
import { setUsers, setError, setAddedUser, setUpdatedUser } from "../actions/usersActions";
import * as Api from "../api"

export function* handleUsersLoad() {
    try {
        const users = yield call(Api.get, "https://reqres.in/api/users");
        yield put(setUsers(users));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export function* handleUserPost({ user }) {
    try {
        const response = yield call(Api.post, "https://reqres.in/api/users", { ...user });
        yield put(setAddedUser(response));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export function* handleUserPatch({ userId, user }) {
    try {
        const response = yield call(Api.patch, `https://reqres.in/api/users/${userId}`, { ...user });
        yield put(setUpdatedUser(response));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export function* usersLoad() {
    const payload = yield take(USERS.LOAD);
    yield fork(handleUsersLoad, payload);
}

export function* userPost() {
    yield takeEvery(USERS.ADD_USER, handleUserPost);
}

export function* userPatch() {
    yield takeEvery(USERS.UPDATE_USER, handleUserPatch);
}
