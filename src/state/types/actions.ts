import { Account } from './Account';
import { Account } from './index'

interface CreateAction {
  type: Account.ADD_ACCOUNT;
  payload: Array; // must contain account_id, username, user_email, user_password (hashed?)
}

interface DeleteAction {
  type: Account.DELETE_ACCOUNT;
  payload: Array<object>; // must contain account_id, username, user_email, user_password (hashed?)
}

interface UpdateAction {
  type: Account.UPDATE_ACCOUNT;
  payload: Array<object>; // must contain account_id, username, user_email, user_password (hashed?)
}

// action must be Account type with payload of type array?
export type AccountActionTypes = 
| CreateAction 
| DeleteAction 
| UpdateAction;


/*  @dev: all possible app action types 
export type AppActions =
| AccountActionTypes
| ArtistActionTypes
| SongActionTypes
| AlbumActionTypes
| GroupActionTypes
*/