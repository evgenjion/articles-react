// src/store/system/actions.ts

import { ISystemState, SystemEvents } from './types'
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

function updateSession(newSession: ISystemState) {
    return {
        type: SystemEvents.UPDATE_SESSION,
        payload: newSession
    };
}

/**
 * Emulate session update from backend.
 */
export function loginUser(creds: ICredentials): ThunkAction<void, ISystemState, unknown, Action<string>> {
    return async (dispatch) => {
        const session = await auth(creds);

        setTimeout(function () {
            dispatch(updateSession(session));
        }, 1e3);
    };
}

interface ICredentials {
    login: string;
    password: string;
}

async function auth(creds: ICredentials): Promise<ISystemState> {
    return Promise.resolve({
        userName: creds.login,
        session: uuidv4(),
        loggedIn: true,
    });
}

/**
 * copied from stackoverflow uuidv4 generation ¯\_(ツ)_/¯
 */
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
