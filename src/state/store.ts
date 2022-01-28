import { configureStore } from '@reduxjs/toolkit';

import { ActionType } from './action-types';
import accountReducer from './reducers/accountReducer';

// const store = configureStore({ reducer: accountReducer})

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});

console.log(store.getState());
// expected output: { accounts: [] }

store.dispatch({ type: ActionType.ADD_ACCOUNT });

//console.log(store.getState())
// expected output: { accounts: [
// {
//     "account_id": 1,
//       "username": username,
//       "user_email": user_email,
//       "user_password": user_password (hashed?)
//   }
//]}
