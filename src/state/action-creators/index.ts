import { Dispatch } from 'redux';

import { ActionType } from '../action-types';

/* TODO */

const addAccount = (account: Array) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADD_ACCOUNT,
      payload: account,
    });
  };
};
