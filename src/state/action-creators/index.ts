import { Dispatch } from 'redux';

import { Account } from '../types/Account';

/* TODO */

const addAccount = (account: Array) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: Account.ADD_ACCOUNT,
      payload: account,
    });
  };
};
