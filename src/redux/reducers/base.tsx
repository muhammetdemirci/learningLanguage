import {
  RESET_REDUCER,
  CHANGE_REDUCER,
} from '../types';

export const initReducer = (stateKey: string, initialState = {}) =>
  (state = initialState, { type, ...rest }: any) => {
    switch (type) {
      case RESET_REDUCER(stateKey):
        return {
          ...initialState,
          ...rest
        }
      case CHANGE_REDUCER(stateKey):
        return {
          ...state,
          ...rest
        }
      default:
        return state;
    }
  };

