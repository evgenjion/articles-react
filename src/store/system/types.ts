export interface ISystemState {
    loggedIn: boolean
    session: string
    userName: string
}

export enum SystemEvents {
    UPDATE_SESSION = 'UPDATE_SESSION',
    LOGIN = 'LOGIN'
}

interface IUpdateSessionAction {
    type: SystemEvents.UPDATE_SESSION;
    payload: ISystemState;
}

interface IUserLoginAction {
    type: SystemEvents.LOGIN;
}

export type ISystemActionTypes = IUpdateSessionAction | IUserLoginAction;
