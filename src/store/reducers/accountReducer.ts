// import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { ActionType } from '../action-types';
import { Action } from '../actions/accounts';

// empty array initialized
// const initialState = {
//   accounts: []
// };

// const reducer = (state: object = initialState, action: Action) => {
//   switch (action.type) {
//     case ActionType.GET_ACCOUNT:
//       return state + action.payload; // add new account object to default state
//     case ActionType.DELETE_ACCOUNT:
//       return state; // delete account object
//     case ActionType.EDIT_ACCOUNT:
//       return; /* logic to create account */
//     default:
//       return state;
//   }
// };
// export default reducer;

////////////////////////////////////////////////////////////////////

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

// empty array (of objects) initialized
const initialState = {
  accounts: [],
};

// function accountReducer(state: Array<objeject> = initialState, action: Action) {
function accountReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.GET_ACCOUNT:
      return {
        ...state,
        // update state copy
        accounts: [...state.accounts, action.payload],
      };
    case ActionType.DELETE_ACCOUNT:
      return {
        ...state,
        // update state copy
        accounts: [...state.accounts.slice(action.payload)],
      };
    case ActionType.EDIT_ACCOUNT:
      return; /* logic to create account */
    default:
      return state;
  }
}
export default accountReducer;
