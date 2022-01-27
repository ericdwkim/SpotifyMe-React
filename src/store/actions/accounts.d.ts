import { ActionType } from '../action-types';

interface CreateAction {
  type: ActionType.CREATE;
  payload: array; // must contain account_id, username, user_email, user_password (hashed?)
}

interface DeleteAction {
  type: ActionType.DELETE;
  payload: array; // must contain account_id, username, user_email, user_password (hashed?)
}

interface UpdateAction {
  type: ActionType.UPDATE;
  payload: array; // must contain account_id, username, user_email, user_password (hashed?)
}

// action must be Account type with payload of type array?
export type Action = CreateAction | DeleteAction | UpdateAction;
