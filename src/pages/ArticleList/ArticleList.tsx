import React from "react";
import { SystemEvents } from "../../store/system/types";
import { IRootState } from "../../store";
import { connect, ConnectedProps } from "react-redux";
import { Button } from '@material-ui/core';
import { privateRouteComponent } from "../../components/hoc/privateRouteComponent";

const mapState = (state: IRootState) => ({
    system: state.system,
});

const mapDispatch = {
    login: () => ({ type: SystemEvents.LOGIN }),
};

const connector = connect(mapState, mapDispatch);
type IPropsFromRedux = ConnectedProps<typeof connector>;

/**
 * Own props of component
 */
interface IAppProps extends IPropsFromRedux {
    backgroundColor: string;
}

function LoginPage(props: IAppProps) {
    const { system } = props;
    const { loggedIn } = system;

    return (
        <div className="App" style={{ backgroundColor: props.backgroundColor }}>
            <header className="App-header">
                {`User is logged in: ${loggedIn}`}
            </header>
            <Button variant="contained" color="primary" onClick={props.login}>
                Login
            </Button>
        </div>
    );
}

// TODO: Hooks + reselect? https://react-redux.js.org/api/hooks
export default privateRouteComponent(connector((LoginPage)));
