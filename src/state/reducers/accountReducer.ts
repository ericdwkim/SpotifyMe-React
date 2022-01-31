// import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { Account } from '../types/Account';
import { AccountActionTypes, IAccount } from '../types/actions';
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

const  accountReducer = (
    state = accountsReducerDefaultState, 
    action: AccountActionTypes
    ) => {
    switch (action.type) {
      case IAccount.ADD_ACCOUNT:
        return {
          ...state, //default state
          accounts: state.push(action.payload), // add new account to Account[]
        };
      case IAccount.DELETE_ACCOUNT:
        return {
          ...state,
          accounts: state.filter(( { account_id } ) => account_id !== action.Account.account_id),
        };
      case IAccount.UPDATE_ACCOUNT:
        return state.map(account => {
          if (account.account_id === action.account_id)
        })
      default:
        return state;
    }
}
export default accountReducer;
