import { all } from "redux-saga/effects";

import { userPost, usersLoad } from "./usersSagas";

export default function* rootSaga() {
    yield all([
        userPost(),
        usersLoad()
    ])
}
