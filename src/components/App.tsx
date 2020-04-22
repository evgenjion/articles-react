import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Article from "../pages/Article/Article";

import { HomePageLink } from '../components/HomePageLink';

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

                    <Route path="/article/:id">
                        <Article />
                    </Route>

                    <Route path="/">
                        <h1>Error 404: page not found</h1>
                        <HomePageLink />
                    </Route>
                </Switch>
        </Router>
    );
}

export default AppComponent;
