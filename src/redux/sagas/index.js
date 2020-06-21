import { all } from "redux-saga/effects";

import { usersLoad, userPost, userPut } from "./usersSagas";

export default function* rootSaga() {
    yield all([
        usersLoad(),
        userPost(),
        userPut()
    ])
}
