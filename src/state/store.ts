import { configureStore } from '@reduxjs/toolkit';

import { Account } from './types/Account';
import accountReducer  from './reducers/accountReducer';

const store = configureStore({ 
  reducer: {
    account: accountReducer,
  },
});

// export default configureStore({
//   reducer: {
//     account: accountReducer,
//   },
// });

// console.log(store.getState());
// expected output: { accounts: [] }

store.dispatch({ type: Account.ADD_ACCOUNT });

//console.log(store.getState())
// expected output: { accounts: [
// {
//     "account_id": 1,
//       "username": username,
//       "user_email": user_email,
//       "user_password": user_password (hashed?)
//   }
//]}
