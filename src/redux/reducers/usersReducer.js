import { USERS } from '../constants';

const usersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      return action.payload.data;
    case USERS.LOAD_FAIL:
      return action.payload;
    case USERS.SET_USER: {
      return state
      // todo: update list
    }
    default:
      return state;
  }
};

export default usersReducer;
