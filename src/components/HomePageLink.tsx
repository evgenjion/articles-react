import React from "react";

import { NavLink } from "react-router-dom";
import { Link } from "@material-ui/core";

export function HomePageLink() {
    return (
        <NavLink to={`/`}>
            <Link component="button" variant="body2">
                {'< Go to the article list '}
            </Link>
        </NavLink>
    );
}
