// src/store/system/reducers.ts

import { ISystemState, ISystemActionTypes, SystemEvents } from './types'

const initialState: ISystemState = {
    loggedIn: false,
    session: '',
    userName: ''
}

export function systemReducer(
    state = initialState,
    action: ISystemActionTypes
): ISystemState {
    switch (action.type) {
        case SystemEvents.UPDATE_SESSION: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SystemEvents.LOGIN: {
            alert('Ololo login event from reducer');

            return state;
        }
        default:
            return state
    }
}
