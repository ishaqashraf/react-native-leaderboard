import { UserActionTypes, GET_USERS } from '../constants/users';
import usersReducer from '../reducers/users';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(usersReducer(undefined, {} as UserActionTypes)).toEqual({
      users: [],
      isLoading: false,
    });
  });

  it('should handle GET_USERS.GET', () => {
    expect(
      usersReducer(undefined, {
        type: GET_USERS.GET,
      })
    ).toEqual({
      users: [],
      isLoading: true,
    });
  });

  it('should handle GET_USERS.SUCCESS', () => {
    const users = [
      {
        bananas: 100,
        lastDayPlayed: '2018-03-23',
        longestStreak: 1,
        name: 'Riham',
        stars: 4,
        subscribed: false,
        uid: 'zghUw5XBDkNoGC25zsLObiLCQiZ2',
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: '',
        stars: 5,
        subscribed: false,
        uid: 'zgjeBDbDyHO0XlGcF6p30THLr3h2',
      },
    ];
    expect(
      usersReducer(undefined, {
        type: GET_USERS.SUCCESS,
        result: users,
      })
    ).toEqual({
      users,
      isLoading: false,
    });
  });

  it('should handle GET_USERS.FAILURE', () => {
    expect(
      usersReducer(
        { users: [], isLoading: true },
        {
          type: GET_USERS.FAILURE,
        }
      )
    ).toEqual({
      users: [],
      isLoading: false,
    });
  });
});
