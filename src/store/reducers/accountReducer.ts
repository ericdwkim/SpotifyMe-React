// import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { ActionType } from '../action-types';
import { Action } from '../actions/accounts';

// empty object array initialized
const initialState = {
  accounts: [],
};

const reducer = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ACCOUNT:
      return state + action.payload; // add new account object to default state
    case ActionType.DELETE_ACCOUNT:
      return state; // delete account object
    case ActionType.EDIT_ACCOUNT:
      return; /* logic to create account */
    default:
      return state;
  }
};
export default reducer;
