import { ActionType } from '../action-types';

interface CreateAction {
  type: ActionType.ADD_ACCOUNT;
  payload: Array<object>; // must contain account_id, username, user_email, user_password (hashed?)
}

interface DeleteAction {
  type: ActionType.DELETE_ACCOUNT;
  payload: Array<object>; // must contain account_id, username, user_email, user_password (hashed?)
}

interface UpdateAction {
  type: ActionType.UPDATE_ACCOUNT;
  payload: Array<object>; // must contain account_id, username, user_email, user_password (hashed?)
}

// action must be Account type with payload of type array?
export type Action = CreateAction | DeleteAction | UpdateAction;
