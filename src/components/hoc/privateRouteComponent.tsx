import React, { ComponentType } from "react";

import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { Route, Redirect } from "react-router-dom";

export function privateRouteComponent<P extends object>(
    Component: ComponentType<P>, // React.Component,
    // TODO: no any
    ...rest: any) {
    return () => {
        const system = useSelector((state: IRootState) => state.system);

        return (
            <Route {...rest} render={(props) =>
                    system.loggedIn ?
                        // @ts-ignore TODO: побороть тайпинги
                        <Component {...props} /> :
                        <Redirect to="/login" />
                }/>
        );
    };
}
