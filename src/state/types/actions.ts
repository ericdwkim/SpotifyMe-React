import { Account } from './Account'

export enum IAccount {
  ADD_ACCOUNT = 'ADD_ACCOUNT',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
}

interface CreateAction {
  type: IAccount.ADD_ACCOUNT;
  payload: Account; // must contain account_id, username, user_email, user_password (hashed?)
}

interface DeleteAction {
  // account_id: string;
  type: IAccount.DELETE_ACCOUNT;
  payload: Account; // must contain account_id, username, user_email, user_password (hashed?)
}

interface UpdateAction {
  account_id: string;
  type: IAccount.UPDATE_ACCOUNT;
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