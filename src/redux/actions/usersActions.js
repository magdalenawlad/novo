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

const addUser = id => ({
    type: USERS.ADD_USER,
    id
});

const setUser = user => ({
    type: USERS.SET_USER,
    user
})

export { loadUsers, setError, setUsers, addUser, setUser };
