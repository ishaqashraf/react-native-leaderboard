import { UserActionTypes, GET_USERS } from '../constants/users';
import { getUsers } from '../actions/users';

describe('user actions', () => {
  it('should create an action to get users', () => {
    const expectedAction: UserActionTypes = {
      type: GET_USERS.GET,
    };
    expect(getUsers()).toEqual(expectedAction);
  });
});
