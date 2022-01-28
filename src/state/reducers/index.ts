import { combineReducers } from 'redux';

import accountReducer from './accountReducer';
// TODO:  import all other reducers

const reducers = combineReducers({
  // reducer k,v pairs
  account: accountReducer,
  // artist: artistReducer
});

// produces the following state object:
/*
{
    account: {
        // ... accounts and other state managed by accountReducer ...
    },
    artist: {
        /// ... artists and other state managed by artistReducer ...
    }
}
*/
export default reducers;
