export interface ISystemState {
    loggedIn: boolean
    session: string
    userName: string
}

export enum SystemEvents {
    UPDATE_SESSION = 'UPDATE_SESSION',
}

interface IUpdateSessionAction {
    type: SystemEvents.UPDATE_SESSION;
    payload: ISystemState;
}

export type ISystemActionTypes = IUpdateSessionAction;
