import { GET_USERS } from '../../constants/users';

const initialState = {
  users: [],
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS.GET:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS.SUCCESS:
      return {
        ...state,
        users: action.result,
        isLoading: false,
      };
    case GET_USERS.FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
