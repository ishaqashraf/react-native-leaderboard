import { IUserProps } from '@/redux/types';

export const GET_USERS = {
  GET: 'GET_USERS',
  SUCCESS: 'GET_USERS_SUCCESS',
  FAILURE: 'GET_USERS_FAILURE',
};

export type UserActionTypes =
  | { type: typeof GET_USERS.GET }
  | { type: typeof GET_USERS.SUCCESS; result: IUserProps[] }
  | { type: typeof GET_USERS.FAILURE };
