// src/store/system/actions.ts

import { ISystemState, SystemEvents, ISystemActionTypes } from './types'

export function updateSession(newSession: ISystemState): ISystemActionTypes {
    return {
        type: SystemEvents.UPDATE_SESSION,
        payload: newSession
    }
}
