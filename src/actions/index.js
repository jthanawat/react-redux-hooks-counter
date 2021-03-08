import { INCREMENT, DECREMENT, SET_USER, LOG_OUT } from './types';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const setUser = (userObj) => {
  return {
    type: SET_USER,
    payload: userObj,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
