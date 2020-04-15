import React from "react";
import { SystemEvents } from "../store/system/types";
import { IRootState } from "../store";
import { connect, ConnectedProps } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "../pages/Login/Login";
import ArticleList from "../pages/ArticleList/ArticleList";
import Home from "../pages/Home/Home";

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

function AppComponent(props: IAppProps) {
    // const { system } = props;
    // const { loggedIn } = system; // TODO: роутить на Login если незалогинен

    return (
        <Router>
                {/* <Link to="/login">Login</Link> */}

                {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/articles">
                        <ArticleList />
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    {/* TODO: 404 */}
                </Switch>
        </Router>
    );
}

// TODO: Hooks + reselect? https://react-redux.js.org/api/hooks
export default connector(AppComponent);
