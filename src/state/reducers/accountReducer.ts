// import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { Account } from '../types/Account';
import { AccountActionTypes } from '../types/actions';

/*
Example array of account objects
accounts: [
  {
    "account_id": 1,
      "username": username,
      "user_email": user_email,
      "user_password": user_password (hashed?)
  },

  {
    "account_id": 2,
      "username": username2,
      "user_email": user_email2,
      "user_password": user_password2 (hashed?)
  }
]

*/

const accountsReducerDefaultState: Account[] = [];

function accountReducer(state = accountsReducerDefaultState, action: AccountActionTypes) {
  switch (action.type) {
    case Account.ADD_ACCOUNT:
      return {
        ...state, //default state
        accounts: state.push(action.payload), // add new account to Account[]
      };
    case Account.DELETE_ACCOUNT:
      return {
        ...state,
        accounts: [state.slice(action.payload)],
      };
    case Account.UPDATE_ACCOUNT:
      return; /* logic to create account */
    default:
      return state;
  }
}
export default accountReducer;
