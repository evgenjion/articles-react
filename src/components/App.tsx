import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import "./App.css";


function AppComponent() {
    return (
        <Router>
                {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    {/* TODO: 404 */}
                </Switch>
        </Router>
    );
}

export default AppComponent;
