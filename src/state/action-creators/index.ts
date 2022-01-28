import { ActionType } from "../action-types"
import { Dispatch } from "redux"

/* TODO */ 


const addAccount = (account: Array) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.ADD_ACCOUNT,
            payload: account
        })
    }
}
