import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    alert: alertReducer
});

export default rootReducer;
