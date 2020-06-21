import { all } from "redux-saga/effects";

import { usersLoad, userPost, userPatch } from "./usersSagas";

export default function* rootSaga() {
    yield all([
        usersLoad(),
        userPost(),
        userPatch()
    ])
}
