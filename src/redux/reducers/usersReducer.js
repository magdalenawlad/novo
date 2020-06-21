import { USERS } from "../constants";

const usersReducer = (state = { data: [] }, action) => {
    switch (action.type) {
    case USERS.LOAD_SUCCESS:
        return {
            ...state,
            ...action.payload.data
        };
    case USERS.SET_UPDATED_USER:
        return {
            ...state,
            data: state.data.map((user) => (user.id === action.payload.data.id ?
                ({ ...user, ...action.payload.data }) : user)
            )
        }
    case USERS.SET_ADDED_USER:
        return {
            ...state,
            data: [
                ...state.data,
                action.payload.data
            ]
        }
    default:
        return state;
    }
};

export default usersReducer;
