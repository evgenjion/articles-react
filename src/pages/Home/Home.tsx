import React from "react";
import { privateRouteComponent } from "../../components/hoc/privateRouteComponent";

function HomePage() {
    return (
        <h1>TODO: make a homepage</h1>
    );
}

// TODO: Hooks + reselect? https://react-redux.js.org/api/hooks
export default privateRouteComponent(HomePage);
