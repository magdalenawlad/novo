import { USERS } from "../constants";

const loadUsers = () => ({
    type: USERS.LOAD
});

const setUsers = posts => ({
    type: USERS.LOAD_SUCCESS,
    payload: posts
});

const setError = error => ({
    type: USERS.LOAD_FAIL,
    payload: error
});

const addUser = user =>  ({
    type: USERS.ADD_USER,
    user
});

const updateUser = (userId, user) => ({
    type: USERS.UPDATE_USER,
    userId,
    user
});

const setUpdatedUser = payload => ({
    type: USERS.SET_UPDATED_USER,
    payload
})

const setAddedUser = payload => ({
    type: USERS.SET_ADDED_USER,
    payload
})

export { loadUsers, setError, setUsers, addUser, updateUser, setUpdatedUser, setAddedUser };
